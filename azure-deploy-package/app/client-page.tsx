"use client";
import React, { useState } from "react";
import { Content, isPreviewing, isEditing } from "@builder.io/sdk-react";
import { customComponents } from "../builder-registry-simple";
import { BuilderDebug } from "../components/builder/BuilderDebug";
import BrandShowcase from "../components/brand-showcase";
import UpgradeModal from "../components/stripe/upgrade-modal";
import { useUpgradeModal } from "../lib/hooks/use-upgrade-modal";

interface ClientHomePageProps {
  initialBuilderContent: any;
  showBrandShowcase: boolean;
  searchParams: Record<string, string>;
}

export function ClientHomePage({
  initialBuilderContent,
  showBrandShowcase: initialShowBrandShowcase,
  searchParams,
}: ClientHomePageProps) {
  const [showBrandShowcase, setShowBrandShowcase] = useState(
    initialShowBrandShowcase,
  );
  const {
    isOpen: isUpgradeModalOpen,
    closeUpgradeModal,
    triggerUpgrade,
  } = useUpgradeModal();

  // Builder.io API key
  const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

  // If brand showcase is requested, show it
  if (showBrandShowcase) {
    return (
      <div className="min-h-screen bg-black">
        {/* Toggle button to go back */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setShowBrandShowcase(false)}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transition-colors shadow-lg"
          >
            ← Back to Landing
          </button>
        </div>
        <BrandShowcase />
        <BuilderDebug />
      </div>
    );
  }

  const canShowBuilderContent =
    initialBuilderContent ||
    isPreviewing(searchParams) ||
    isEditing(searchParams);

  return (
    <>
      <HomePage
        builderContent={initialBuilderContent}
        onShowBrandShowcase={() => setShowBrandShowcase(true)}
        onTriggerUpgrade={triggerUpgrade}
        searchParams={searchParams}
      />

      {/* Builder.io Dynamic Content Zone - Before Features */}
      {canShowBuilderContent && (
        <div className="w-full max-w-4xl mx-auto mb-8">
          <Content
            apiKey={BUILDER_PUBLIC_API_KEY}
            model="page"
            content={initialBuilderContent}
            customComponents={customComponents}
            data={{ section: "before-features" }}
          />
        </div>
      )}

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={closeUpgradeModal}
        currentPlan="free"
      />
    </>
  );
}

function HomePage({
  builderContent,
  onShowBrandShowcase,
  onTriggerUpgrade,
  searchParams,
}: {
  builderContent: any;
  onShowBrandShowcase: () => void;
  onTriggerUpgrade: (context?: string) => void;
  searchParams: Record<string, string>;
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Landing Page */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat saintsal-landing-bg">
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
              <div className="flex justify-center space-x-3 text-white/70 mb-3">
                <span
                  className="cursor-pointer hover:text-yellow-400"
                  onClick={() => onTriggerUpgrade("pricing-quick-access")}
                >
                  ⚠️ Pricing
                </span>
                <span className="cursor-pointer hover:text-yellow-400">
                  🤖 Setup
                </span>
                <span className="cursor-pointer hover:text-yellow-400">
                  ❓ Help
                </span>
              </div>
              <button
                onClick={() => (window.location.href = "/brand-showcase")}
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white text-xs py-2 px-4 rounded-lg transition-all shadow-lg border border-purple-500/30"
              >
                🎨 Brand Showcase
              </button>
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
    </div>
  );
}
