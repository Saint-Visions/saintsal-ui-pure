"use client";

// Simple Builder.io initialization
export function initializeBuilder(apiKey: string) {
  if (typeof window === "undefined") return;

  console.log(
    "✅ Builder.io initialized with API key:",
    apiKey.substring(0, 8) + "...",
  );
}

// Helper function to register all custom components
export function registerCustomComponents(components: any[]) {
  if (typeof window === "undefined") return;

  console.log("✅ Builder.io components registered:", components.length);
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
