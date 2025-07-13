import Image from "next/image";
import { useState } from "react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

const ModuleCard = ({
  title,
  description,
  icon,
  color,
  onClick,
}: ModuleCardProps) => (
  <div
    className={`${color} rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200 text-white`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-2 mb-2">
      <span className="text-xl">{icon}</span>
      <h3 className="font-semibold text-sm">{title}</h3>
    </div>
    <p className="text-xs opacity-90">{description}</p>
  </div>
);

export default function LandingPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const modules = [
    {
      title: "Lead Discovery",
      description: "AI-powered lookup",
      icon: "🔍",
      color: "bg-blue-600",
    },
    {
      title: "Referral Network",
      description: "Partner tracking",
      icon: "🤝",
      color: "bg-green-600",
    },
    {
      title: "AI Deal Analysis",
      description: "GPT-4 insights",
      icon: "📊",
      color: "bg-purple-600",
    },
    {
      title: "Mobile Export",
      description: "iOS/Android apps",
      icon: "📱",
      color: "bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Quote Section */}
        <div className="text-center mb-8 max-w-2xl">
          <div className="bg-black/70 rounded-lg p-6 mb-6 border border-yellow-500/30">
            <p className="text-yellow-400 text-lg font-medium mb-2">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-white text-base mb-3">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-2xl font-bold">GOTTA GUY™!</p>
          </div>
        </div>

        {/* Main Logo Card */}
        <div className="bg-black/80 rounded-2xl p-8 mb-8 border border-yellow-500/30 max-w-md w-full">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <div className="text-black font-bold text-xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-xs mb-1">SAINTSAL™</div>
              <div className="text-yellow-400 text-xs">Cooking Knowledge</div>
            </div>
            <h1 className="text-white text-2xl font-bold mt-2">
              SaintVisionAI™
            </h1>
          </div>

          {/* Start Cooking Button */}
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg mb-4 flex items-center justify-center transition-colors">
            🔥 Start Cooking
            <span className="ml-2">→</span>
          </button>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center">
              💬 AI Chat
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center">
              🔐 Sign In
            </button>
          </div>

          {/* Quick Access */}
          <div className="text-center text-xs">
            <p className="text-yellow-400 mb-2">Quick Access:</p>
            <div className="flex justify-center space-x-4 text-white">
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

        {/* What's Inside These Walls */}
        <div className="w-full max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-yellow-400 text-xl font-bold flex items-center justify-center">
              🔧 What's Inside These Walls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} />
            ))}
          </div>

          {/* Elite AI Sanctuary */}
          <div className="text-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">
              ✨ Elite AI Sanctuary • Ready for Saints
            </h3>
            <p className="text-white text-sm">
              Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
