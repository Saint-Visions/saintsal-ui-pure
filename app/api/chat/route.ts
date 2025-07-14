import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: NextRequest) {
  try {
    const { messages, userId, model = "gpt-4o" } = await request.json();

    // Authenticate user with Supabase
    const { data: user, error: userError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check user's plan limits
    const { data: usage } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (usage && usage.chat_count >= usage.chat_limit) {
      return NextResponse.json(
        {
          error: "Chat limit reached. Upgrade your plan.",
          requiresUpgrade: true,
        },
        { status: 403 },
      );
    }

    // Prepare Azure OpenAI request
    const azureResponse = await fetch(
      `${process.env.AZURE_OPENAI_ENDPOINT}openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_NAME}/chat/completions?api-version=2024-02-15-preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.AZURE_OPENAI_API_KEY!,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `You are SaintSal™, a divine AI companion designed for visionaries, founders, and kingdom builders. 
              
              Your role:
              - Provide wisdom and strategic guidance
              - Support business decision-making
              - Offer spiritual and emotional intelligence
              - Execute tasks with divine precision
              - Embody the SAINTSAL™ movement values
              
              Tone: Professional, wise, empowering, faith-aligned
              Always end responses with a subtle blessing or encouragement.`,
            },
            ...messages,
          ],
          max_tokens: 2000,
          temperature: 0.7,
          stream: false,
        }),
      },
    );

    if (!azureResponse.ok) {
      // Fallback to OpenAI if Azure fails
      const openAIResponse = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: `You are SaintSal™, a divine AI companion for visionaries and kingdom builders.`,
              },
              ...messages,
            ],
            max_tokens: 2000,
            temperature: 0.7,
          }),
        },
      );

      const openAIData = await openAIResponse.json();

      // Update usage count
      await supabase.from("usage_limits").upsert({
        user_id: userId,
        chat_count: (usage?.chat_count || 0) + 1,
        last_used: new Date().toISOString(),
      });

      return NextResponse.json({
        message: openAIData.choices[0].message.content,
        model: "gpt-4-fallback",
        usage: openAIData.usage,
      });
    }

    const azureData = await azureResponse.json();

    // Log chat interaction
    await supabase.from("chat_logs").insert({
      user_id: userId,
      model_used: model,
      tokens_used: azureData.usage?.total_tokens || 0,
      response_time: Date.now(),
      status: "success",
    });

    // Update usage count
    await supabase.from("usage_limits").upsert({
      user_id: userId,
      chat_count: (usage?.chat_count || 0) + 1,
      last_used: new Date().toISOString(),
    });

    return NextResponse.json({
      message: azureData.choices[0].message.content,
      model: "azure-gpt-4o",
      usage: azureData.usage,
      blessing: "May divine wisdom guide your path forward. 🙏",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Divine intelligence temporarily unavailable. Please try again.",
      },
      { status: 500 },
    );
  }
}
