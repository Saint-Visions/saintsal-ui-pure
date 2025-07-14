import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const UPSTASH_VECTOR_URL = process.env.UPSTASH_VECTOR_REST_URL!;
const UPSTASH_TOKEN = process.env.UPSTASH_VECTOR_REST_TOKEN!;
const UPSTASH_READONLY_TOKEN = process.env.UPSTASH_VECTOR_REST_READONLY_TOKEN!;

export async function POST(request: NextRequest) {
  try {
    const {
      query,
      userId,
      type = "general",
      limit = 10,
    } = await request.json();

    if (!query || !userId) {
      return NextResponse.json(
        { error: "Query and userId required" },
        { status: 400 },
      );
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

    // Check usage limits
    const { data: usage } = await supabase
      .from("usage_limits")
      .select("*")
      .eq("user_id", userId)
      .single();

    const searchLimit =
      user.subscriptions?.[0]?.plan_type === "free" ? 20 : 500;

    if (usage && usage.search_count >= searchLimit) {
      return NextResponse.json(
        {
          error: "Search limit reached. Upgrade for unlimited searches.",
          requiresUpgrade: true,
        },
        { status: 403 },
      );
    }

    // Generate embedding for the query using OpenAI
    const embeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_SEARCH_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-embedding-ada-002",
          input: query,
        }),
      },
    );

    if (!embeddingResponse.ok) {
      throw new Error("Failed to generate embedding");
    }

    const embeddingData = await embeddingResponse.json();
    const embedding = embeddingData.data[0].embedding;

    // Search in Upstash Vector database
    const searchResponse = await fetch(`${UPSTASH_VECTOR_URL}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_READONLY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vector: embedding,
        topK: limit,
        includeMetadata: true,
        includeVectors: false,
        filter: type !== "general" ? `type = "${type}"` : undefined,
      }),
    });

    if (!searchResponse.ok) {
      throw new Error("Vector search failed");
    }

    const searchResults = await searchResponse.json();

    // Process and enhance results
    const enhancedResults = searchResults.map((result: any) => ({
      id: result.id,
      content: result.metadata?.content || "",
      title: result.metadata?.title || "",
      type: result.metadata?.type || "document",
      score: result.score,
      source: result.metadata?.source || "knowledge_base",
      timestamp: result.metadata?.timestamp || new Date().toISOString(),
      divine_relevance:
        result.score > 0.8
          ? "high"
          : result.score > 0.6
            ? "medium"
            : "standard",
    }));

    // Update usage count
    await supabase.from("usage_limits").upsert({
      user_id: userId,
      search_count: (usage?.search_count || 0) + 1,
      last_search: new Date().toISOString(),
    });

    // Log search activity
    await supabase.from("search_logs").insert({
      user_id: userId,
      query: query,
      type: type,
      results_count: enhancedResults.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      query: query,
      results: enhancedResults,
      total: enhancedResults.length,
      searchType: type,
      message: "Divine knowledge retrieved from the cosmos",
    });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Search systems temporarily unavailable" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { content, metadata, userId } = await request.json();

    // Verify user has upload permissions
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*, subscriptions(*)")
      .eq("id", userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const canUpload = user.subscriptions?.[0]?.plan_type !== "free";

    if (!canUpload) {
      return NextResponse.json(
        {
          error: "Knowledge upload requires Pro plan or higher",
          requiresUpgrade: true,
        },
        { status: 403 },
      );
    }

    // Generate embedding for content
    const embeddingResponse = await fetch(
      "https://api.openai.com/v1/embeddings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_SEARCH_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-embedding-ada-002",
          input: content,
        }),
      },
    );

    const embeddingData = await embeddingResponse.json();
    const embedding = embeddingData.data[0].embedding;

    // Store in Upstash Vector
    const vectorId = `${userId}_${Date.now()}`;
    const upsertResponse = await fetch(`${UPSTASH_VECTOR_URL}/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: vectorId,
        vector: embedding,
        metadata: {
          ...metadata,
          content: content,
          userId: userId,
          timestamp: new Date().toISOString(),
          source: "user_upload",
        },
      }),
    });

    if (!upsertResponse.ok) {
      throw new Error("Failed to store knowledge");
    }

    // Log the upload
    await supabase.from("knowledge_uploads").insert({
      user_id: userId,
      vector_id: vectorId,
      content_preview: content.substring(0, 200),
      metadata: metadata,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      vectorId: vectorId,
      message: "Divine knowledge blessed into the cosmos",
    });
  } catch (error) {
    console.error("Knowledge upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload knowledge" },
      { status: 500 },
    );
  }
}
