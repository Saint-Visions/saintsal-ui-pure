import { NextRequest, NextResponse } from "next/server";
import { saintAI } from "../../../lib/azure/openai-client";

export async function POST(request: NextRequest) {
  try {
    const { messages, userId, userPlan = "free" } = await request.json();

    // Rate limiting for free users
    if (userPlan === "free" && messages.length > 5) {
      return NextResponse.json(
        {
          error: "Message limit reached. Upgrade to Pro for unlimited access.",
        },
        { status: 403 },
      );
    }

    const stream = await saintAI.chatStream(messages, userId);

    // Create readable stream for real-time responses
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(`data: ${JSON.stringify({ content })}\n\n`);
          }
        }
        controller.enqueue(`data: [DONE]\n\n`);
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "SaintAI temporarily unavailable" },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
