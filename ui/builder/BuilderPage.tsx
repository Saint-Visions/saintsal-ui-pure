"use client";

import {
  Content,
  Builder,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";
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

    // Initialize Builder.io for live editing
    Builder.set({
      apiKey,
      canTrack: true,
    });

    // Register custom components for the visual editor
    customComponents.forEach((component) => {
      Builder.registerComponent(component.component, {
        name: component.name,
        inputs: component.inputs,
        canHaveChildren: component.canHaveChildren,
      });
    });

    // Enable live DOM synchronization
    Builder.register("editor.settings", {
      designTokens: {
        colors: [
          { name: "SaintSal Gold", value: "#fbbf24" },
          { name: "SaintSal Black", value: "#000000" },
          { name: "SaintSal White", value: "#ffffff" },
          { name: "Blue Action", value: "#2563eb" },
          { name: "Green Success", value: "#16a34a" },
          { name: "Purple Premium", value: "#9333ea" },
          { name: "Red Alert", value: "#dc2626" },
        ],
        spacing: [
          { name: "xs", value: "4px" },
          { name: "sm", value: "8px" },
          { name: "md", value: "16px" },
          { name: "lg", value: "24px" },
          { name: "xl", value: "32px" },
          { name: "2xl", value: "48px" },
        ],
        fontFamily: [
          { name: "System", value: "system-ui, -apple-system, sans-serif" },
          { name: "Mono", value: 'ui-monospace, "SF Mono", monospace' },
        ],
      },
    });
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
