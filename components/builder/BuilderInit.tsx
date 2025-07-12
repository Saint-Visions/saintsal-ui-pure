"use client";

import { useEffect } from "react";
import { builder } from "@builder.io/react";

export function BuilderInit() {
  useEffect(() => {
    const apiKey = "d83998c6a81f466db4fb83ab90c7ba25";

    if (!apiKey) {
      console.warn("Builder.io API key not found. Live editing disabled.");
      return;
    }

    try {
      // Initialize Builder.io
      builder.init(apiKey);

      // Safe component registration with fallback
      let customComponents = [];

      try {
        // Try to import custom components
        const builderRegistry = require("../../builder-registry");
        customComponents =
          builderRegistry.customComponents || builderRegistry.default || [];
      } catch (error) {
        console.warn(
          "Builder registry not found, using basic setup:",
          error.message,
        );
        customComponents = [];
      }

      // Register custom components if available
      if (Array.isArray(customComponents) && customComponents.length > 0) {
        customComponents.forEach((component) => {
          try {
            builder.registerComponent(component.component, {
              name: component.name,
              inputs: component.inputs || [],
              canHaveChildren: component.canHaveChildren || false,
            });
          } catch (compError) {
            console.warn(
              `Failed to register component ${component.name}:`,
              compError.message,
            );
          }
        });
      }

      console.log(
        "✅ Builder.io initialized successfully:",
        apiKey.substring(0, 8) + "...",
      );
      console.log("✅ Components registered:", customComponents.length);
    } catch (error) {
      console.error("❌ Builder.io initialization failed:", error.message);
      console.log("🔧 Continuing without Builder.io components...");
    }
  }, []);

  return null; // This component doesn't render anything
}
