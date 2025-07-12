"use client";

import { useEffect } from "react";

export function BuilderInit() {
  useEffect(() => {
    // 🚨 SNAT PORT FIX: Minimal Builder.io initialization
    console.log("🔧 Builder.io - Minimal initialization (SNAT port fix)");

    try {
      // Only initialize Builder.io if absolutely necessary
      const apiKey = "d83998c6a81f466db4fb83ab90c7ba25";

      if (!apiKey) {
        console.warn("Builder.io API key not found. Skipping initialization.");
        return;
      }

      // 🔥 CRITICAL: Delay and minimize external API calls
      const initializeBuilder = async () => {
        try {
          // Import only when needed to prevent SNAT port exhaustion
          const { builder } = await import("@builder.io/react");

          // Initialize with minimal config
          builder.init(apiKey);

          console.log("✅ Builder.io initialized (minimal mode)");
        } catch (error) {
          console.warn(
            "Builder.io initialization failed (continuing without):",
            error.message,
          );
          // Don't throw - continue without Builder.io to prevent SNAT issues
        }
      };

      // Delay initialization to prevent immediate SNAT port usage
      setTimeout(initializeBuilder, 2000);
    } catch (error) {
      console.warn(
        "BuilderInit failed, continuing without Builder.io:",
        error.message,
      );
    }
  }, []);

  return null; // This component doesn't render anything
}
