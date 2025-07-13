"use client";

import { useEffect } from "react";
import {
  initializeBuilder,
  registerCustomComponents,
} from "../../lib/builder-sync";
import { customComponents } from "../../builder-registry-simple";

export function BuilderInit() {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

    if (!apiKey) {
      console.warn("Builder.io API key not found. Live editing disabled.");
      return;
    }

    // Initialize Builder.io
    initializeBuilder(apiKey);

    // Register custom components
    registerCustomComponents(customComponents);

    console.log("✅ Builder.io initialized with live DOM sync");
  }, []);

  return null; // This component doesn't render anything
}
