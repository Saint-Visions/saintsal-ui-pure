"use client";

import { Content, Builder } from "@builder.io/sdk-react";
import { customComponents } from "../../builder-registry";
import { useEffect } from "react";

interface BuilderWrapperProps {
  content: any;
  model?: string;
  apiKey: string;
  options?: any;
}

// Initialize Builder.io with live editing capabilities
Builder.register("editor.settings", {
  designTokens: {
    colors: [
      { name: "Primary Yellow", value: "rgb(251, 191, 36)" },
      { name: "Black", value: "rgb(0, 0, 0)" },
      { name: "White", value: "rgb(255, 255, 255)" },
      { name: "Gold", value: "rgb(255, 215, 0)" },
    ],
    spacing: [
      { name: "Small", value: "10px" },
      { name: "Medium", value: "20px" },
      { name: "Large", value: "40px" },
    ],
    fontFamily: [
      { name: "System", value: "system-ui, sans-serif" },
      { name: "Mono", value: "ui-monospace, monospace" },
    ],
  },
});

export function BuilderWrapper({
  content,
  model = "page",
  apiKey,
  options = {},
}: BuilderWrapperProps) {
  useEffect(() => {
    // Register custom components for live editing
    customComponents.forEach((component) => {
      Builder.registerComponent(component.component, {
        name: component.name,
        inputs: component.inputs,
        canHaveChildren: component.canHaveChildren,
      });
    });

    // Enable live editing features
    Builder.set({
      apiKey,
      canTrack: true,
    });
  }, [apiKey]);

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
