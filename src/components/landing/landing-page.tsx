import React from "react";
import Image from "next/image";
import ButtonGold from "../shared/button-gold";
import { SaintSalLogo } from "../shared/saintsal-logo";

interface LandingPageProps {
  onStartCooking?: () => void;
  onAIChat?: () => void;
  onSignIn?: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
}) => (
  <div
    className={`${color} rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-lg border border-white/10`}
  >
    <div className="flex items-center space-x-3 mb-3">
      <span className="text-2xl">{icon}</span>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <p className="text-sm opacity-90 leading-relaxed">{description}</p>
  </div>
);

export default function LandingPage({
  onStartCooking,
  onAIChat,
  onSignIn,
}: LandingPageProps) {
  const features = [
    {
      title: "Lead Discovery",
      description: "AI-powered lookup and intelligence gathering",
      icon: "🔍",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      title: "Referral Network",
      description: "Partner tracking and commission management",
      icon: "🤝",
      color: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      title: "AI Deal Analysis",
      description: "GPT-4 insights and market intelligence",
      icon: "📊",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
    {
      title: "Mobile Export",
      description: "iOS/Android apps with full sync",
      icon: "📱",
      color: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Hero Quote */}
        <div className="text-center mb-8 max-w-3xl">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-yellow-500/30 shadow-2xl">
            <p className="text-yellow-400 text-xl md:text-2xl font-medium mb-3">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-white text-lg md:text-xl mb-4">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              GOTTA GUY™!
            </p>
          </div>
        </div>

        {/* Main Interface Card */}
        <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-yellow-500/30 shadow-2xl max-w-lg w-full">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <SaintSalLogo size="large" className="mb-4" />
            <div className="text-center">
              <div className="text-yellow-400 text-sm font-medium mb-1">
                SAINTSAL™
              </div>
              <div className="text-yellow-400 text-xs opacity-80 mb-2">
                Cooking Knowledge
              </div>
              <h1 className="text-white text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SaintVisionAI™
              </h1>
            </div>
          </div>

          {/* Primary CTA */}
          <ButtonGold
            onClick={onStartCooking}
            className="w-full mb-6 text-lg py-4"
            icon="🔥"
          >
            Start Cooking
          </ButtonGold>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={onAIChat}
              className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 border border-blue-500/30"
            >
              💬 AI Chat
            </button>
            <button
              onClick={onSignIn}
              className="bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 border border-green-500/30"
            >
              🔐 Sign In
            </button>
          </div>

          {/* Quick Access */}
          <div className="text-center">
            <p className="text-yellow-400 text-sm font-medium mb-3">
              Quick Access:
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <span>⚠️</span>
                <span>Pricing</span>
              </button>
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <span>🤖</span>
                <span>Setup</span>
              </button>
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-1">
                <span>❓</span>
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold flex items-center justify-center mb-2">
              🔧 What's Inside These Walls
            </h2>
            <p className="text-white/70 text-lg">
              Premium AI tools for the modern entrepreneur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Elite Sanctuary Badge */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-yellow-400 text-xl font-bold mb-2 flex items-center justify-center">
                ✨ Elite AI Sanctuary • Ready for Saints
              </h3>
              <p className="text-white/80 text-sm">
                Azure Cognitive Services + OpenAI GPT-4o + Premium
                Infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
