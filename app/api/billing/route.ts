import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const PRICE_IDS = {
  free: process.env.VITE_STRIPE_FREE_PRICE_ID!,
  pro: process.env.VITE_STRIPE_PRO_PRICE_ID!,
  unlimited: process.env.VITE_STRIPE_UNLIMITED_PRICE_ID!,
  white_label: process.env.VITE_STRIPE_WHITE_LABEL_PRICE_ID!,
  custom: process.env.VITE_STRIPE_CUSTOM_PRICE_ID!,
};

export async function POST(request: NextRequest) {
  try {
    const { action, userId, planType, email } = await request.json();

    // Verify user
    const { data: user, error: userError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    switch (action) {
      case "create_checkout_session":
        const priceId = PRICE_IDS[planType as keyof typeof PRICE_IDS];

        if (!priceId) {
          return NextResponse.json(
            { error: "Invalid plan type" },
            { status: 400 },
          );
        }

        const session = await stripe.checkout.sessions.create({
          customer_email: email || user.email,
          line_items: [
            {
              price: priceId,
              quantity: 1,
            },
          ],
          mode: "subscription",
          success_url: `${process.env.NEXTAUTH_URL}/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${process.env.NEXTAUTH_URL}/upgrade/cancelled`,
          metadata: {
            userId: userId,
            planType: planType,
            source: "saintsal_console",
          },
          subscription_data: {
            metadata: {
              userId: userId,
              planType: planType,
            },
          },
        });

        // Log checkout attempt
        await supabase.from("billing_events").insert({
          user_id: userId,
          event_type: "checkout_created",
          plan_type: planType,
          stripe_session_id: session.id,
          timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
          success: true,
          checkoutUrl: session.url,
          sessionId: session.id,
          message: "Divine upgrade portal opened",
        });

      case "create_portal_session":
        // Get customer from Supabase
        const { data: subscription } = await supabase
          .from("subscriptions")
          .select("stripe_customer_id")
          .eq("user_id", userId)
          .single();

        if (!subscription?.stripe_customer_id) {
          return NextResponse.json(
            { error: "No active subscription found" },
            { status: 404 },
          );
        }

        const portalSession = await stripe.billingPortal.sessions.create({
          customer: subscription.stripe_customer_id,
          return_url: `${process.env.NEXTAUTH_URL}/dashboard`,
        });

        return NextResponse.json({
          success: true,
          portalUrl: portalSession.url,
          message: "Billing portal manifestation complete",
        });

      case "get_subscription_status":
        const { data: subStatus } = await supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (!subStatus) {
          return NextResponse.json({
            success: true,
            subscription: null,
            plan: "free",
            message: "Free tier blessed",
          });
        }

        // Get latest Stripe subscription data
        const stripeSubscription = await stripe.subscriptions.retrieve(
          subStatus.stripe_subscription_id,
        );

        return NextResponse.json({
          success: true,
          subscription: {
            ...subStatus,
            stripe_status: stripeSubscription.status,
            current_period_end: stripeSubscription.current_period_end,
            cancel_at_period_end: stripeSubscription.cancel_at_period_end,
          },
          message: "Subscription status divine",
        });

      case "upgrade_plan":
        // Handle plan upgrades
        const { data: currentSub } = await supabase
          .from("subscriptions")
          .select("stripe_subscription_id")
          .eq("user_id", userId)
          .single();

        if (currentSub?.stripe_subscription_id) {
          // Modify existing subscription
          const updatedSubscription = await stripe.subscriptions.update(
            currentSub.stripe_subscription_id,
            {
              items: [
                {
                  price: PRICE_IDS[planType as keyof typeof PRICE_IDS],
                },
              ],
              proration_behavior: "always_invoice",
            },
          );

          await supabase
            .from("subscriptions")
            .update({
              plan_type: planType,
              updated_at: new Date().toISOString(),
            })
            .eq("user_id", userId);

          return NextResponse.json({
            success: true,
            subscription: updatedSubscription,
            message: "Divine upgrade executed successfully",
          });
        } else {
          return NextResponse.json(
            { error: "No subscription to upgrade" },
            { status: 404 },
          );
        }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Billing API error:", error);
    return NextResponse.json(
      { error: "Billing systems temporarily unavailable" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    // Get user's current subscription and usage
    const { data: user } = await supabase
      .from("profiles")
      .select(
        `
        *,
        subscriptions(*),
        usage_limits(*)
      `,
      )
      .eq("id", userId)
      .single();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const currentPlan = user.subscriptions?.[0]?.plan_type || "free";
    const usage = user.usage_limits?.[0] || {};

    // Define plan limits
    const planLimits = {
      free: { chats: 50, crm_access: false, ai_tools: "basic" },
      pro: { chats: 1000, crm_access: true, ai_tools: "advanced" },
      unlimited: { chats: -1, crm_access: true, ai_tools: "premium" },
      white_label: { chats: -1, crm_access: true, ai_tools: "enterprise" },
    };

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        plan: currentPlan,
        limits: planLimits[currentPlan as keyof typeof planLimits],
        usage: usage,
        subscription_active: user.subscriptions?.[0]?.status === "active",
      },
      message: "User divine status retrieved",
    });
  } catch (error) {
    console.error("Billing GET error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve billing information" },
      { status: 500 },
    );
  }
}
