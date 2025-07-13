"use client";
import React, { useState } from "react";
import { Content, isPreviewing, isEditing } from "@builder.io/sdk-react";
import { BuilderDebug } from "../components/builder/BuilderDebug";
import BrandShowcase from "../components/brand-showcase";
import UpgradeModal from "../components/stripe/upgrade-modal";
import { useUpgradeModal } from "../lib/hooks/use-upgrade-modal";
import { BackgroundGallery } from "../components/BackgroundGallery";

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

  // Builder.io API key - hardcoded for Azure stability
  const BUILDER_PUBLIC_API_KEY = "d83998c6a81f466db4fb83ab90c7ba25";

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
  onShowBrandShowcase,
  onTriggerUpgrade,
}: {
  builderContent: any;
  onShowBrandShowcase: () => void;
  onTriggerUpgrade: (context?: string) => void;
  searchParams: Record<string, string>;
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Landing Page */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Premium Background Gallery */}
        <div className="absolute inset-0">
          <BackgroundGallery
            featured={true}
            autoRotate={true}
            className="w-full h-full"
          />
        </div>

        {/* Content - EXACT layout from your photos */}
        <div
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8155e04eb6064174a0cb82e2eecf77b6)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Elite Partnership Network - Premium Brand Showcase */}
          <div className="text-center mb-8 max-w-4xl">
            <div className="bg-black/90 rounded-2xl p-8 mb-6 border border-yellow-500/30 backdrop-blur-sm">
              {/* Premium Partnership Network */}
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb7a0e6e16e0a4460bd0b7177a652b1b2?format=webp&width=800"
                  alt="SaintVisionAI Elite Partnership Network"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-2xl border border-yellow-500/20"
                />
                <p className="text-yellow-400 text-sm mt-3 font-medium">
                  🏆 Elite Tech Partnership Network • We Lead The Industry
                </p>
              </div>

              {/* Partnership Statement */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-xl p-6 border border-yellow-500/20">
                <p className="text-yellow-400 text-lg font-medium mb-2">
                  &ldquo;SaintSal&rdquo; AI doesn&apos;t just answer.
                </p>
                <p className="text-white text-base mb-3">
                  It adapts. It empowers. It becomes your...
                </p>
                <p className="text-yellow-400 text-2xl font-bold">
                  GOTTA GUY™!
                </p>
              </div>
            </div>
          </div>

          {/* Main Interface Card - Elite Design */}
          <div className="bg-black/90 rounded-2xl p-8 mb-8 border border-yellow-500/30 max-w-md w-full backdrop-blur-sm">
            {/* Elite Logo Section - Premium SAINTSAL™ Branding */}
            <div className="flex flex-col items-center mb-6">
              {/* Premium "SaintSal + You" Brand Element */}
              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8edb245cc9584641bca60634e49f7638?format=webp&width=800"
                  alt="SaintSal + You - Elite Partnership"
                  className="w-48 h-auto rounded-xl shadow-2xl border border-yellow-500/30"
                />
                <p className="text-yellow-400 text-xs mt-2 font-medium text-center">
                  ✨ Elite Partnership • You + SaintSal™
                </p>
              </div>

              {/* Main Logo */}
              <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 shadow-2xl overflow-hidden bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40">
                <img
                  src="/LIGHT_BRAND_LOGO.png"
                  alt="SaintVisionAI Professional Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <div className="text-yellow-400 text-xs mb-1 font-bold">
                  SAINTSAL™
                </div>
                <div className="text-yellow-400 text-xs mb-2 opacity-90">
                  Cookin' Knowledge • Elite AI
                </div>
                <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                  SaintVisionAI™
                </h1>
                <p className="text-yellow-400/80 text-xs mt-1">
                  🏆 Industry Leader • Better Than OpenAI
                </p>
              </div>
            </div>

            {/* Start Cooking Button - Elite Version */}
            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-xl mb-4 flex items-center justify-center transition-all shadow-2xl border border-yellow-300/50"
            >
              🔥 Start Cooking
              <span className="ml-2">→</span>
            </button>

            {/* Action Buttons - Enhanced */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors shadow-lg border border-blue-400/30"
              >
                💬 AI Chat
              </button>
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors shadow-lg border border-green-400/30"
              >
                🔐 Sign In
              </button>
            </div>

            {/* Quick Access - Elite Version */}
            <div className="text-center text-xs">
              <p className="text-yellow-400 mb-2 font-medium">
                🌟 Elite Quick Access:
              </p>
              <div className="flex justify-center space-x-3 text-white/70 mb-3">
                <span
                  className="cursor-pointer hover:text-yellow-400 transition-colors"
                  onClick={() => onTriggerUpgrade("pricing-quick-access")}
                >
                  ⚠️ Pricing
                </span>
                <a
                  href="/chat"
                  className="cursor-pointer hover:text-yellow-400 transition-colors"
                >
                  🧠 Divine AI
                </a>
                <span className="cursor-pointer hover:text-yellow-400 transition-colors">
                  ❓ Help
                </span>
              </div>
              <button
                onClick={onShowBrandShowcase}
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white text-xs py-2 px-4 rounded-lg transition-all shadow-lg border border-purple-500/30"
              >
                🎨 Brand Showcase
              </button>
            </div>
          </div>

          {/* What's Inside These Walls - Elite Version */}
          <div className="w-full max-w-4xl">
            <h2 className="text-yellow-400 text-xl font-bold text-center mb-6 flex items-center justify-center">
              🔧 What's Inside These Elite Walls
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white shadow-xl border border-blue-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">🔍</span>
                  <h3 className="font-semibold text-sm">Lead Discovery</h3>
                </div>
                <p className="text-xs opacity-90">AI-powered lookup</p>
              </div>

              <div className="bg-green-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white shadow-xl border border-green-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">🤝</span>
                  <h3 className="font-semibold text-sm">Referral Network</h3>
                </div>
                <p className="text-xs opacity-90">Partner tracking</p>
              </div>

              <div className="bg-purple-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white shadow-xl border border-purple-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">📊</span>
                  <h3 className="font-semibold text-sm">AI Deal Analysis</h3>
                </div>
                <p className="text-xs opacity-90">GPT-4 insights</p>
              </div>

              <div className="bg-red-600 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white shadow-xl border border-red-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">📱</span>
                  <h3 className="font-semibold text-sm">Mobile Export</h3>
                </div>
                <p className="text-xs opacity-90">iOS/Android apps</p>
              </div>
            </div>

            {/* Elite Sanctuary - Premium Status */}
            <div className="text-center">
              <h3 className="text-yellow-400 text-lg font-semibold mb-4">
                ✨ Elite AI Sanctuary • Ready for Saints
              </h3>

              {/* Premium Tech Stack Badge */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-xl p-4 border border-yellow-500/20 mb-4">
                <p className="text-white/90 text-sm mb-2 font-medium">
                  🏆 Premium Enterprise Infrastructure
                </p>
                <p className="text-white/70 text-xs">
                  Azure Cognitive Services + OpenAI GPT-4o + Elite Network
                </p>
              </div>

              {/* Industry Leadership Statement */}
              <div className="bg-black/60 rounded-lg p-3 border border-yellow-500/30">
                <p className="text-yellow-400 text-sm font-bold">
                  🥇 #1 AI Platform • Surpassing Industry Giants
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Elite Performance Beyond Microsoft, Apple, Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal - Elite Version */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-yellow-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Welcome to SaintVisionAI Elite
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <div className="text-black font-bold text-lg">SV</div>
              </div>
              <p className="text-white/70 mb-6">
                The patent-protected elite AI movement is loading your premium
                sanctuary...
              </p>
              <div className="text-yellow-400 text-sm font-medium">
                🏆 U.S. Patent No. 10,290,222 • Industry Leading Technology
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
