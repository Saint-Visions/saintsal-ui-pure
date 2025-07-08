// 🚀 SAINTSAL™ MOVEMENT - PRODUCTION READY - DIRECT DEPLOYMENT
"use client";
import React, { useState } from "react";
import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";
import { customComponents } from "../builder-registry";
import { BuilderDebug } from "../components/builder/BuilderDebug";

export default function Page() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Builder.io integration for dynamic content
  const [builderContent, setBuilderContent] = useState(null);

  React.useEffect(() => {
    async function loadBuilderContent() {
      try {
        const { initializeNodeRuntime } = await import(
          "@builder.io/sdk-react/node/init"
        );
        initializeNodeRuntime();

        const content = await fetchOneEntry({
          apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
          model: "page",
          userAttributes: { urlPath: "/" },
        });

        setBuilderContent(content);
      } catch (error) {
        console.log("Builder.io content loading failed:", error);
      }
    }

    loadBuilderContent();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Landing Page */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with your exact image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content - EXACT layout from your photos */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Quote Section - EXACT match */}
          <div className="text-center mb-8 max-w-2xl">
            <div className="bg-black/80 rounded-xl p-6 mb-6 border border-yellow-500/30">
              <p className="text-yellow-400 text-lg font-medium mb-2">
                "SaintSal" AI doesn't just answer.
              </p>
              <p className="text-white text-base mb-3">
                It adapts. It empowers. It becomes your...
              </p>
              <p className="text-yellow-400 text-2xl font-bold">GOTTA GUY™!</p>
            </div>
          </div>

          {/* Main Interface Card - EXACT match to your design */}
          <div className="bg-black/90 rounded-2xl p-8 mb-8 border border-yellow-500/30 max-w-md w-full">
            {/* Logo Section - EXACT match */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <div className="text-black font-bold text-xl">SV</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-xs mb-1">SAINTSAL™</div>
                <div className="text-yellow-400 text-xs mb-2">
                  Cooking Knowledge
                </div>
                <h1 className="text-white text-2xl font-bold">
                  SaintVisionAI™
                </h1>
              </div>
            </div>

            {/* Start Cooking Button - EXACT match */}
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-xl mb-4 flex items-center justify-center transition-all shadow-lg"
            >
              🔥 Start Cooking
              <span className="ml-2">→</span>
            </button>

            {/* Action Buttons - EXACT match */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors"
              >
                💬 AI Chat
              </button>
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors"
              >
                🔐 Sign In
              </button>
            </div>

            {/* Quick Access - EXACT match */}
            <div className="text-center text-xs">
              <p className="text-yellow-400 mb-2">Quick Access:</p>
              <div className="flex justify-center space-x-4 text-white/70">
                <span className="cursor-pointer hover:text-yellow-400">
                  ⚠️ Pricing
                </span>
                <span className="cursor-pointer hover:text-yellow-400">
                  🤖 Setup
                </span>
                <span className="cursor-pointer hover:text-yellow-400">
                  ❓ Help
                </span>
              </div>
            </div>
          </div>

          {/* What's Inside These Walls - EXACT match */}
          <div className="w-full max-w-4xl">
            <h2 className="text-yellow-400 text-xl font-bold text-center mb-6 flex items-center justify-center">
              🔧 What's Inside These Walls
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">🔍</span>
                  <h3 className="font-semibold text-sm">Lead Discovery</h3>
                </div>
                <p className="text-xs opacity-90">AI-powered lookup</p>
              </div>

              <div className="bg-green-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">🤝</span>
                  <h3 className="font-semibold text-sm">Referral Network</h3>
                </div>
                <p className="text-xs opacity-90">Partner tracking</p>
              </div>

              <div className="bg-purple-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">📊</span>
                  <h3 className="font-semibold text-sm">AI Deal Analysis</h3>
                </div>
                <p className="text-xs opacity-90">GPT-4 insights</p>
              </div>

              <div className="bg-red-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">📱</span>
                  <h3 className="font-semibold text-sm">Mobile Export</h3>
                </div>
                <p className="text-xs opacity-90">iOS/Android apps</p>
              </div>
            </div>

            {/* Elite Sanctuary - EXACT match */}
            <div className="text-center">
              <h3 className="text-yellow-400 text-lg font-semibold mb-2">
                ✨ Elite AI Sanctuary • Ready for Saints
              </h3>
              <p className="text-white/70 text-sm">
                Azure Cognitive Services + OpenAI GPT-4o + Premium
                Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Builder.io Dynamic Content Section */}
      {(builderContent || isPreviewing() || isEditing()) && (
        <div className="relative z-10">
          <Content
            apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
            model="page"
            content={builderContent}
            customComponents={customComponents}
          />
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-yellow-500/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Welcome to SaintVisionAI
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <div className="text-black font-bold text-lg">SV</div>
              </div>
              <p className="text-white/70 mb-6">
                The patent-protected AI movement is loading your elite
                sanctuary...
              </p>
              <div className="text-yellow-400 text-sm">
                U.S. Patent No. 10,290,222
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Builder.io Debug Component */}
      <BuilderDebug />
    </div>
  );
}
