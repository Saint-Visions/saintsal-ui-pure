"use client";

import { Builder } from "@builder.io/sdk-react";

// Initialize Builder.io with proper settings for live editing
export function initializeBuilder(apiKey: string) {
  if (typeof window === "undefined") return;

  Builder.set({
    apiKey,
    canTrack: true,
  });

  // Enable live editing features
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
        { name: "Yellow Warning", value: "#f59e0b" },
      ],
      spacing: [
        { name: "xs", value: "4px" },
        { name: "sm", value: "8px" },
        { name: "md", value: "16px" },
        { name: "lg", value: "24px" },
        { name: "xl", value: "32px" },
        { name: "2xl", value: "48px" },
        { name: "3xl", value: "64px" },
      ],
      fontFamily: [
        {
          name: "System",
          value: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        },
        { name: "Mono", value: 'ui-monospace, "SF Mono", Consolas, monospace' },
      ],
      fontSize: [
        { name: "xs", value: "12px" },
        { name: "sm", value: "14px" },
        { name: "base", value: "16px" },
        { name: "lg", value: "18px" },
        { name: "xl", value: "20px" },
        { name: "2xl", value: "24px" },
        { name: "3xl", value: "30px" },
        { name: "4xl", value: "36px" },
      ],
    },
  });

  // Set up DOM synchronization for live editing
  if (window.parent !== window) {
    // We're in an iframe (Builder.io editor)
    setupLiveEditingSync();
  }
}

function setupLiveEditingSync() {
  // Listen for Builder.io editor messages
  window.addEventListener("message", (event) => {
    if (event.origin.includes("builder.io")) {
      const { data } = event;

      if (data.type === "builder.updateContent") {
        // Handle content updates for live rendering
        console.log("Builder.io content updated, syncing DOM...");

        // Force re-render if needed
        window.dispatchEvent(
          new CustomEvent("builder-content-update", {
            detail: data.content,
          }),
        );
      }

      if (data.type === "builder.selectionChange") {
        // Handle element selection in the visual editor
        console.log("Builder.io selection changed");
      }
    }
  });

  // Send ready signal to Builder.io editor
  window.parent.postMessage(
    {
      type: "builder.loaded",
      data: {
        url: window.location.href,
        title: document.title,
      },
    },
    "*",
  );
}

// Helper function to register all custom components
export function registerCustomComponents(components: any[]) {
  components.forEach((component) => {
    Builder.registerComponent(component.component, {
      name: component.name,
      inputs: component.inputs,
      canHaveChildren: component.canHaveChildren,
    });
  });
}

// Helper to check if we're in Builder.io editing mode
export function isBuilderEditing(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.parent !== window && window.location.search.includes("builder.space")
  );
}

// Helper to check if we're in Builder.io preview mode
export function isBuilderPreview(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.search.includes("builder.preview");
}
