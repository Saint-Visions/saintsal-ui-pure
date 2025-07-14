import { NextRequest, NextResponse } from "next/server";

// Conditional imports to prevent build errors
let supabase: any = null;
let jwt: any = null;

if (process.env.VITE_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  try {
    const { createClient } = require("@supabase/supabase-js");
    supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    );
  } catch (error) {
    console.warn("Supabase not available");
  }
}

if (process.env.SUPABASE_JWT_SECRET) {
  try {
    jwt = require("jsonwebtoken");
  } catch (error) {
    console.warn("JWT not available");
  }
}

const JWT_SECRET = process.env.SUPABASE_JWT_SECRET || "fallback-secret";

export async function POST(request: NextRequest) {
  try {
    const { action, email, password, userData } = await request.json();

    switch (action) {
      case "signup":
        // Create user in Supabase Auth
        const { data: authData, error: authError } =
          await supabase.auth.admin.createUser({
            email: email,
            password: password,
            email_confirm: true,
            user_metadata: {
              full_name: userData?.fullName || "",
              avatar_url: "",
              plan: "free",
            },
          });

        if (authError) {
          return NextResponse.json(
            { error: authError.message },
            { status: 400 },
          );
        }

        // Create profile
        const { error: profileError } = await supabase.from("profiles").insert({
          id: authData.user.id,
          email: email,
          full_name: userData?.fullName || "",
          plan: "free",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

        if (profileError) {
          console.error("Profile creation error:", profileError);
        }

        // Initialize usage limits
        await supabase.from("usage_limits").insert({
          user_id: authData.user.id,
          chat_count: 0,
          search_count: 0,
          chat_limit: 50,
          search_limit: 20,
          created_at: new Date().toISOString(),
        });

        // Send welcome email (you can implement this with your email service)

        return NextResponse.json({
          success: true,
          user: {
            id: authData.user.id,
            email: email,
            plan: "free",
          },
          message:
            "Welcome to the SAINTSAL™ divine family! Your journey begins now. 🙏",
        });

      case "signin":
        const { data: signInData, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });

        if (signInError) {
          return NextResponse.json(
            { error: signInError.message },
            { status: 401 },
          );
        }

        // Get full user profile
        const { data: profile } = await supabase
          .from("profiles")
          .select(
            `
            *,
            subscriptions(*),
            usage_limits(*)
          `,
          )
          .eq("id", signInData.user.id)
          .single();

        // Update last login
        await supabase
          .from("profiles")
          .update({
            last_login: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", signInData.user.id);

        return NextResponse.json({
          success: true,
          user: profile,
          session: signInData.session,
          message: "Divine authentication blessed. Welcome back! ✨",
        });

      case "signout":
        const { error: signOutError } = await supabase.auth.signOut();

        if (signOutError) {
          return NextResponse.json(
            { error: signOutError.message },
            { status: 400 },
          );
        }

        return NextResponse.json({
          success: true,
          message: "May divine peace follow you until we meet again. 🙏",
        });

      case "reset_password":
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo: `${process.env.NEXTAUTH_URL}/reset-password`,
          },
        );

        if (resetError) {
          return NextResponse.json(
            { error: resetError.message },
            { status: 400 },
          );
        }

        return NextResponse.json({
          success: true,
          message:
            "Divine password reset instructions sent to your sacred inbox.",
        });

      case "update_password":
        const { newPassword, accessToken } = await request.json();

        // Verify the access token
        const { data: user, error: tokenError } =
          await supabase.auth.getUser(accessToken);

        if (tokenError || !user) {
          return NextResponse.json(
            { error: "Invalid or expired token" },
            { status: 401 },
          );
        }

        const { error: updateError } = await supabase.auth.admin.updateUserById(
          user.user.id,
          { password: newPassword },
        );

        if (updateError) {
          return NextResponse.json(
            { error: updateError.message },
            { status: 400 },
          );
        }

        return NextResponse.json({
          success: true,
          message:
            "Divine password blessing complete. Your security is fortified.",
        });

      case "update_profile":
        const { userId, profileData } = await request.json();

        const { error: updateProfileError } = await supabase
          .from("profiles")
          .update({
            ...profileData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);

        if (updateProfileError) {
          return NextResponse.json(
            { error: updateProfileError.message },
            { status: 400 },
          );
        }

        return NextResponse.json({
          success: true,
          message: "Divine profile updates blessed and saved.",
        });

      case "get_session":
        const authHeader = request.headers.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return NextResponse.json(
            { error: "No token provided" },
            { status: 401 },
          );
        }

        const token = authHeader.split(" ")[1];

        try {
          const decoded = jwt.verify(token, JWT_SECRET) as any;

          const { data: sessionUser } = await supabase
            .from("profiles")
            .select(
              `
              *,
              subscriptions(*),
              usage_limits(*)
            `,
            )
            .eq("id", decoded.sub)
            .single();

          if (!sessionUser) {
            return NextResponse.json(
              { error: "User not found" },
              { status: 404 },
            );
          }

          return NextResponse.json({
            success: true,
            user: sessionUser,
            message: "Divine session validated",
          });
        } catch (jwtError) {
          return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Auth API error:", error);
    return NextResponse.json(
      { error: "Authentication systems temporarily unavailable" },
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

    return NextResponse.json({
      success: true,
      user: user,
      message: "Divine user data retrieved",
    });
  } catch (error) {
    console.error("Auth GET error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve user data" },
      { status: 500 },
    );
  }
}
