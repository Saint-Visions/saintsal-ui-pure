"use client";

import { Content, isPreviewing, isEditing } from "@builder.io/sdk-react";
import { customComponents } from "../../builder-registry";
import { useEffect, useState } from "react";

interface BuilderPageProps {
  model?: string;
  content: any;
  apiKey: string;
  options?: any;
}

export function BuilderPage({
  model = "page",
  content,
  apiKey,
  options = {},
}: BuilderPageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log(
      "✅ BuilderPage initialized with API key:",
      apiKey.substring(0, 8) + "...",
    );
  }, [apiKey]);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="text-black font-bold text-lg">SV</div>
          </div>
          <p className="text-yellow-400">Loading SaintVisionAI Builder...</p>
        </div>
      </div>
    );
  }

  // Handle preview and editing modes
  const canShowContent = content || isPreviewing() || isEditing();

  if (!canShowContent) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg">No content found for this page.</p>
          <p className="text-sm text-yellow-400 mt-4">
            Create content in Builder.io
          </p>
        </div>
      </div>
    );
  }

  return (
    <Content
      model={model}
      content={content}
      apiKey={apiKey}
      customComponents={customComponents}
      {...options}
    />
  );
}
