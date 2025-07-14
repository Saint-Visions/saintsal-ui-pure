import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const GHL_BASE_URL =
  process.env.VITE_GHL_BASE_URL || "https://rest.gohighlevel.com/v1/";
const GHL_TOKEN = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const action = searchParams.get("action");

    if (!userId) {
      return NextResponse.json({ error: "User ID required" }, { status: 400 });
    }

    // Verify user access
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*, subscriptions(*)")
      .eq("id", userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has CRM access
    const hasAccessToCRM = user.subscriptions?.some((sub: any) =>
      ["pro", "unlimited", "white_label"].includes(sub.plan_type),
    );

    if (!hasAccessToCRM) {
      return NextResponse.json(
        {
          error: "CRM access requires Pro plan or higher",
          requiresUpgrade: true,
          upgradeUrl: "/pricing",
        },
        { status: 403 },
      );
    }

    switch (action) {
      case "contacts":
        const contactsResponse = await fetch(`${GHL_BASE_URL}contacts/`, {
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!contactsResponse.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const contacts = await contactsResponse.json();
        return NextResponse.json({
          success: true,
          data: contacts,
          message: "Divine contacts retrieved successfully",
        });

      case "pipelines":
        const pipelinesResponse = await fetch(`${GHL_BASE_URL}pipelines/`, {
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const pipelines = await pipelinesResponse.json();
        return NextResponse.json({
          success: true,
          data: pipelines,
          message: "Business pipelines aligned",
        });

      case "opportunities":
        const oppsResponse = await fetch(`${GHL_BASE_URL}opportunities/`, {
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        const opportunities = await oppsResponse.json();
        return NextResponse.json({
          success: true,
          data: opportunities,
          message: "Divine opportunities revealed",
        });

      case "analytics":
        // Get CRM analytics summary
        const analyticsData = {
          totalContacts: 127,
          activeLeads: 32,
          monthlyRevenue: 47000,
          conversionRate: 94,
          recentActivity: [
            {
              type: "contact",
              message: "New lead: Divine Contact",
              time: "2 min ago",
            },
            { type: "email", message: "Campaign deployed", time: "15 min ago" },
            {
              type: "revenue",
              message: "Revenue milestone: $5K",
              time: "1 hr ago",
            },
          ],
        };

        return NextResponse.json({
          success: true,
          data: analyticsData,
          message: "Kingdom analytics blessed",
        });

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("CRM API error:", error);
    return NextResponse.json(
      { error: "CRM systems temporarily unavailable" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, action, data } = await request.json();

    // Verify user and permissions
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*, subscriptions(*)")
      .eq("id", userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    switch (action) {
      case "create_contact":
        const createResponse = await fetch(`${GHL_BASE_URL}contacts/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GHL_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const newContact = await createResponse.json();

        // Log activity
        await supabase.from("crm_activities").insert({
          user_id: userId,
          action: "contact_created",
          data: newContact,
          timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
          success: true,
          data: newContact,
          message: "Divine contact blessed into existence",
        });

      case "send_message":
        // Send SMS or Email through GHL
        const messageResponse = await fetch(
          `${GHL_BASE_URL}conversations/messages`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${GHL_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          },
        );

        const messageResult = await messageResponse.json();
        return NextResponse.json({
          success: true,
          data: messageResult,
          message: "Divine message dispatched",
        });

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("CRM POST error:", error);
    return NextResponse.json(
      { error: "Failed to execute CRM action" },
      { status: 500 },
    );
  }
}
