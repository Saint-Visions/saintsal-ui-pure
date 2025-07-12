"use client";

import { useEffect } from "react";
import { builder } from "@builder.io/react";
import { customComponents } from "../../builder-registry";

export function BuilderInit() {
  useEffect(() => {
    const apiKey = "d83998c6a81f466db4fb83ab90c7ba25";

    if (!apiKey) {
      console.warn("Builder.io API key not found. Live editing disabled.");
      return;
    }

    // Initialize Builder.io
    builder.init(apiKey);

    // Register custom components
    customComponents.forEach((component) => {
      builder.registerComponent(component.component, {
        name: component.name,
        inputs: component.inputs || [],
        canHaveChildren: component.canHaveChildren || false,
      });
    });

    console.log(
      "✅ Builder.io initialized successfully:",
      apiKey.substring(0, 8) + "...",
    );
    console.log("✅ Components registered:", customComponents.length);
  }, []);

  return null; // This component doesn't render anything
}
