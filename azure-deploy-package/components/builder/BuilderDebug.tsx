"use client";

import { useState, useEffect } from "react";
import { isPreviewing, isEditing } from "@builder.io/sdk-react";

export function BuilderDebug() {
  const [debugInfo, setDebugInfo] = useState({
    apiKey: "",
    isPreview: false,
    isEdit: false,
    isIframe: false,
    builderLoaded: false,
  });

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";
    const isPreview = isPreviewing();
    const isEdit = isEditing();
    const isIframe = window.parent !== window;

    setDebugInfo({
      apiKey: apiKey ? `${apiKey.substring(0, 8)}...` : "Missing",
      isPreview,
      isEdit,
      isIframe,
      builderLoaded: typeof window !== "undefined" && "Builder" in window,
    });
  }, []);

  // Only show debug info in development or when editing
  if (
    process.env.NODE_ENV === "production" &&
    !debugInfo.isEdit &&
    !debugInfo.isPreview
  ) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg border border-yellow-500/30 text-xs z-50">
      <div className="font-bold text-yellow-400 mb-2">🔧 Builder.io Debug</div>
      <div className="space-y-1">
        <div>API Key: {debugInfo.apiKey}</div>
        <div>Preview Mode: {debugInfo.isPreview ? "✅" : "❌"}</div>
        <div>Edit Mode: {debugInfo.isEdit ? "✅" : "❌"}</div>
        <div>In Iframe: {debugInfo.isIframe ? "✅" : "❌"}</div>
        <div>Builder Loaded: {debugInfo.builderLoaded ? "✅" : "❌"}</div>
      </div>
      <div className="mt-2 text-yellow-400 text-xs">
        SaintVisionAI v2.0 - Live DOM Sync Ready
      </div>
    </div>
  );
}
