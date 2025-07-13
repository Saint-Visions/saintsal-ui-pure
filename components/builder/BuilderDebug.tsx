"use client";
import React, { useState } from "react";

export function BuilderDebug() {
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development or preview mode
  if (typeof window !== "undefined") {
    const isDev = process.env.NODE_ENV === "development";
    const isPreview = window.location.search.includes("builder.preview=true");

    if (!isDev && !isPreview) {
      return null;
    }
  }

  return (
    <>
      {/* Debug Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full shadow-lg transition-colors"
        title="Toggle Builder.io Debug"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Debug Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-sm w-full shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold text-sm">
              Builder.io Debug
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-gray-300">
              <span className="text-gray-500">API Key:</span>{" "}
              <span className="font-mono">d83998...ba25</span>
            </div>
            <div className="text-gray-300">
              <span className="text-gray-500">Model:</span> page
            </div>
            <div className="text-gray-300">
              <span className="text-gray-500">Status:</span>{" "}
              <span className="text-green-400">Connected</span>
            </div>
            <div className="text-gray-300">
              <span className="text-gray-500">Environment:</span>{" "}
              <span className="text-yellow-400">
                {process.env.NODE_ENV || "production"}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-700">
            <a
              href="https://builder.io/content/d83998c6a81f466db4fb83ab90c7ba25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs underline"
            >
              Open in Builder.io Editor
            </a>
          </div>
        </div>
      )}
    </>
  );
}
