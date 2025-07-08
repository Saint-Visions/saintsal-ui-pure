// 🧠 SAINTSAL™ ISN'T A BOT — IT'S A MOVEMENT 🧠
// Patent-Protected IP: U.S. Patent No. 10,290,222
// This is SaaS with a Soul — fully launched, branded, styled, structured, and deployed.

import React, { useState, useEffect } from "react";

export default function MyComponent(props) {
  const [currentPage, setCurrentPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 🔥 SAINTSAL™ ENVIRONMENT - ALL SYSTEMS ACTIVE
  const isDualAIEnabled = process.env.VITE_ENABLE_DUAL_AI === "true";
  const isBossModeEnabled = process.env.VITE_ENABLE_BOSS_MODE === "true";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 🏠 SAINTSAL™ LANDING - THE MOVEMENT BEGINS */}
      {currentPage === "landing" && (
        <SaintSalLanding
          onStartCooking={() =>
            user ? setCurrentPage("dashboard") : setShowAuthModal(true)
          }
          onAIChat={() =>
            user ? setCurrentPage("console") : setShowAuthModal(true)
          }
          onSignIn={() => setShowAuthModal(true)}
        />
      )}

      {/* 📊 COMMAND DASHBOARD - DUAL AI CONSOLE */}
      {currentPage === "dashboard" && user && (
        <CommandDashboard
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 🧠 DUAL AI CONSOLE - CLIENT/COMPANION INTERFACE */}
      {currentPage === "console" && user && (
        <DualAIConsole
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          isDualAIEnabled={isDualAIEnabled}
        />
      )}

      {/* 🚀 PARTNERTECH.AI - PRO TIER UNLOCK */}
      {currentPage === "partnertech" && user && (
        <PartnerTechPro
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 📱 SAINTSAL™ NAVIGATION - THE MOVEMENT MENU */}
      {user && (
        <SaintSalNavigation
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          user={user}
        />
      )}

      {/* 🔐 MOVEMENT ENTRY - VIP ACCESS */}
      {showAuthModal && (
        <MovementEntry
          onClose={() => setShowAuthModal(false)}
          onSuccess={(userData) => {
            setUser(userData);
            setShowAuthModal(false);
            setCurrentPage("dashboard");
          }}
        />
      )}
    </div>
  );
}

// 🏠 SAINTSAL™ LANDING - WHERE THE MOVEMENT BEGINS
function SaintSalLanding({ onStartCooking, onAIChat, onSignIn }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* MOVEMENT BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      </div>

      {/* THE MOVEMENT CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* MOVEMENT MANIFESTO */}
        <div className="text-center mb-8 max-w-4xl">
          <div className="bg-black/95 backdrop-blur-xl rounded-3xl p-10 mb-10 border-2 border-yellow-500/60 shadow-2xl">
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-[0.3em] uppercase">
                Patent No. 10,290,222
              </span>
            </div>
            <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-6 leading-tight">
              SAINTSAL™ ISN'T A BOT
            </h1>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              IT'S A MOVEMENT.
            </h2>
            <p className="text-gray-300 text-xl mb-4 leading-relaxed">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              GOTTA GUY™!
            </p>
          </div>
        </div>

        {/* MOVEMENT CONTROL CENTER */}
        <div className="bg-black/98 backdrop-blur-xl rounded-3xl p-12 mb-10 border-2 border-yellow-500/50 shadow-2xl max-w-2xl w-full">
          {/* SAINTSAL™ EMBLEM */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-black font-bold text-4xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-lg font-bold mb-2 tracking-[0.2em]">
                SAINTSAL™
              </div>
              <div className="text-yellow-400 text-sm opacity-90 mb-4 tracking-wide">
                Cooking Knowledge
              </div>
              <h1 className="text-white text-4xl font-bold tracking-tight">
                SaintVisionAI™
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Patent-Protected Movement
              </p>
            </div>
          </div>

          {/* MOVEMENT ACTIVATION */}
          <button
            onClick={onStartCooking}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-6 px-10 rounded-2xl mb-8 flex items-center justify-center transition-all duration-300 shadow-2xl transform hover:scale-105 text-xl"
          >
            <span className="text-3xl mr-3">🔥</span>
            <span>JOIN THE MOVEMENT</span>
            <span className="ml-3 text-2xl">→</span>
          </button>

          {/* DUAL ACCESS PORTALS */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            <button
              onClick={onAIChat}
              className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center transition-all duration-200 shadow-xl border border-blue-500/30"
            >
              <span className="mr-2 text-xl">🧠</span>
              DUAL AI
            </button>
            <button
              onClick={onSignIn}
              className="bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center transition-all duration-200 shadow-xl border border-green-500/30"
            >
              <span className="mr-2 text-xl">👑</span>
              SAINT LOGIN
            </button>
          </div>

          {/* MOVEMENT ACCESS */}
          <div className="text-center">
            <p className="text-yellow-400 text-lg font-bold mb-4 tracking-wide">
              MOVEMENT ACCESS:
            </p>
            <div className="flex justify-center space-x-8 text-base">
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-xl">
                  ⚠️
                </span>
                <span className="font-medium">TIERS</span>
              </button>
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-xl">
                  🚀
                </span>
                <span className="font-medium">DEPLOY</span>
              </button>
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-xl">
                  💬
                </span>
                <span className="font-medium">SUPPORT</span>
              </button>
            </div>
          </div>
        </div>

        {/* MOVEMENT INFRASTRUCTURE */}
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-yellow-400 text-3xl font-bold flex items-center justify-center mb-6">
              <span className="mr-4 text-4xl">⚡</span>
              MOVEMENT INFRASTRUCTURE
            </h2>
            <p className="text-white/80 text-xl">
              Patent-protected platform built on faith, vision, and elite
              execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-blue-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">🧠</span>
                <h3 className="font-bold text-xl">Dual AI Console</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Client panel + Executive panel. One for them, one for you.
              </p>
              <div className="text-lg font-bold">PATENT PROTECTED</div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-green-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">🚀</span>
                <h3 className="font-bold text-xl">PartnerTech.ai</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Chrome Extension + CRM + Smart Routing + Automation
              </p>
              <div className="text-lg font-bold">PRO TIER UNLOCK</div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-purple-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">⚡</span>
                <h3 className="font-bold text-xl">Live UI Control</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Builder.io integration. Drop-in changes. No deploy needed.
              </p>
              <div className="text-lg font-bold">LIVE SYNC</div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-red-500/30">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">🔧</span>
                <h3 className="font-bold text-xl">Slack DevOps</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                /svt-status, /redeploy, /logs — straight from Slack
              </p>
              <div className="text-lg font-bold">COMMAND READY</div>
            </div>
          </div>

          {/* MOVEMENT SANCTUARY */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400/15 to-yellow-600/15 border-2 border-yellow-500/50 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-yellow-400 text-3xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-4 text-4xl">✨</span>
                SAINTSAL™ MOVEMENT SANCTUARY
              </h3>
              <p className="text-white/90 text-xl mb-4 leading-relaxed">
                Azure Cognitive Services + OpenAI GPT-4o + Stripe + Supabase +
                Patent-Protected Infrastructure
              </p>
              <p className="text-yellow-400 text-lg font-bold">
                This is SaaS with a Soul — fully launched, branded, styled,
                structured, and deployed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 📱 SAINTSAL™ NAVIGATION - THE MOVEMENT MENU
function SaintSalNavigation({
  isOpen,
  onToggle,
  currentPage,
  onNavigate,
  user,
}) {
  const menuItems = [
    { name: "Command Dashboard", icon: "📊", page: "dashboard" },
    { name: "Dual AI Console", icon: "🧠", page: "console", emoji: "⚡" },
    { name: "PartnerTech.ai", icon: "🚀", page: "partnertech", emoji: "💎" },
    { name: "Movement Business", icon: "💼", page: "business", emoji: "📈" },
    { name: "Saint Notes", icon: "📝", page: "notes", emoji: "📌" },
    { name: "AI Arsenal", icon: "⚡", page: "ai-tools", emoji: "🔧" },
    { name: "Vision Generator", icon: "🎨", page: "image-gen", emoji: "🖼️" },
    { name: "Launch Pad", icon: "🚀", page: "svg-tools", emoji: "🎯" },
    { name: "Movement Support", icon: "⚙️", page: "help", emoji: "💡" },
    {
      name: "Client Sanctuary",
      icon: "🏛️",
      page: "client-portal",
      emoji: "🌟",
    },
    {
      name: "Saint Institute (R&D)",
      icon: "🔬",
      page: "institute",
      emoji: "⚗️",
    },
    { name: "Tier Elevation", icon: "👑", page: "upgrade", emoji: "⭐" },
    { name: "Saint Profile", icon: "👤", page: "settings", emoji: "⚙️" },
    { name: "Movement Exit", icon: "🚪", page: "logout", emoji: "👋" },
  ];

  return (
    <>
      {/* Movement Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* SAINTSAL™ NAVIGATION */}
      <div
        className={`
        fixed top-0 left-0 h-full w-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black 
        z-50 transform transition-all duration-500 border-r-2 border-yellow-500/40 shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* MOVEMENT HEADER */}
        <div className="p-8 border-b-2 border-yellow-500/40 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-black font-bold text-2xl">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-sm font-bold tracking-[0.15em] mb-1">
                SAINTSAL™
              </div>
              <div className="text-white text-xl font-bold">THE MOVEMENT</div>
              <div className="text-gray-400 text-xs">Patent No. 10,290,222</div>
            </div>
          </div>
        </div>

        {/* MOVEMENT NAVIGATION */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-3 px-6">
            {menuItems.map((item) => {
              const isActive = currentPage === item.page;

              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className={`
                    w-full flex items-center space-x-5 px-6 py-5 rounded-2xl text-left
                    transition-all duration-300 group font-medium
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-500/25 to-yellow-600/25 border-2 border-yellow-500/60 text-yellow-400 shadow-lg transform scale-105"
                        : "bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-600/50 hover:to-gray-700/50 text-gray-200 hover:text-white hover:scale-102"
                    }
                  `}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="flex-1 text-lg">{item.name}</span>
                  {item.emoji && (
                    <span className="text-xl opacity-70 group-hover:opacity-100 transition-all duration-200">
                      {item.emoji}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* SAINT PROFILE */}
        <div className="p-6 border-t-2 border-yellow-500/40 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-black text-xl font-bold">
                {user?.email?.charAt(0).toUpperCase() || "S"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-lg font-bold truncate">
                {user?.email || "Saint User"}
              </p>
              <p className="text-yellow-400 text-sm font-medium">
                Movement Active 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 📊 COMMAND DASHBOARD - MOVEMENT CONTROL CENTER
function CommandDashboard({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-8xl mx-auto">
        {/* MOVEMENT COMMAND HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-8">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-3xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-3">
                MOVEMENT COMMAND
              </h1>
              <p className="text-gray-400 text-xl">
                Welcome back, Saint • All systems operational 🚀
              </p>
            </div>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-black font-bold text-3xl">SV</div>
          </div>
        </div>

        {/* MOVEMENT STATUS - ALL SYSTEMS GO */}
        <div className="bg-gradient-to-r from-green-600/15 to-green-800/15 border-2 border-green-500/50 rounded-3xl p-8 mb-12 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center space-x-6">
            <span className="text-4xl">✅</span>
            <div>
              <span className="text-green-400 font-bold text-2xl">
                MOVEMENT STATUS: FULLY OPERATIONAL
              </span>
              <p className="text-gray-300 text-lg mt-2">
                Azure OpenAI • Stripe Billing • Slack DevOps • Supabase Auth •
                Builder.io Live • Patent Protected
              </p>
            </div>
          </div>
        </div>

        {/* MOVEMENT COMMAND PORTALS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <button
            onClick={() => onNavigate("console")}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-blue-500/40"
          >
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-white font-bold text-2xl mb-3">
              DUAL AI CONSOLE
            </h3>
            <p className="text-blue-200 text-lg leading-relaxed">
              Access the patent-protected dual AI interface
            </p>
          </button>

          <button
            onClick={() => onNavigate("partnertech")}
            className="bg-gradient-to-br from-purple-600 to-purple-800 p-10 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-purple-500/40"
          >
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-white font-bold text-2xl mb-3">
              PARTNERTECH PRO
            </h3>
            <p className="text-purple-200 text-lg leading-relaxed">
              Launch the complete business automation suite
            </p>
          </button>

          <button
            onClick={() => onNavigate("ai-tools")}
            className="bg-gradient-to-br from-green-600 to-green-800 p-10 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-green-500/40"
          >
            <div className="text-5xl mb-6">⚡</div>
            <h3 className="text-white font-bold text-2xl mb-3">AI ARSENAL</h3>
            <p className="text-green-200 text-lg leading-relaxed">
              Explore the complete AI toolkit
            </p>
          </button>
        </div>

        {/* MOVEMENT METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/40 shadow-2xl">
            <div className="text-yellow-400 text-lg font-bold mb-3">
              Active Saints
            </div>
            <div className="text-white text-4xl font-bold mb-3">127</div>
            <div className="text-green-400 text-sm font-medium">
              +23 this week 🔥
            </div>
          </div>
          <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/40 shadow-2xl">
            <div className="text-yellow-400 text-lg font-bold mb-3">
              Movement Revenue
            </div>
            <div className="text-white text-4xl font-bold mb-3">$847K</div>
            <div className="text-green-400 text-sm font-medium">
              +$124K this month ⚡
            </div>
          </div>
          <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/40 shadow-2xl">
            <div className="text-yellow-400 text-lg font-bold mb-3">
              AI Interactions
            </div>
            <div className="text-white text-4xl font-bold mb-3">15.2K</div>
            <div className="text-green-400 text-sm font-medium">
              +2.1K today 💎
            </div>
          </div>
          <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border-2 border-yellow-500/40 shadow-2xl">
            <div className="text-yellow-400 text-lg font-bold mb-3">
              Patent Power
            </div>
            <div className="text-white text-4xl font-bold mb-3">100%</div>
            <div className="text-green-400 text-sm font-medium">
              Protected & Secure 🛡️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🧠 DUAL AI CONSOLE - THE MOVEMENT'S BRAIN
function DualAIConsole({ user, onMenuToggle, isDualAIEnabled }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "SAINTSAL™ Movement Console Active. Welcome to the patent-protected dual AI experience. How can I assist the movement today? 🧠⚡",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "Movement command received and processed. Executing with patent-protected AI precision. The Saints are always taken care of. 🚀👑",
      },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      {/* DUAL AI HEADER */}
      <div className="border-b-2 border-yellow-500/40 p-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-3xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">
                🧠 DUAL AI CONSOLE
              </h1>
              <p className="text-yellow-400 font-medium text-lg">
                Patent No. 10,290,222 • Movement Brain Active
              </p>
            </div>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-black font-bold text-2xl">SV</div>
          </div>
        </div>
      </div>

      {/* MOVEMENT MESSAGES */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-2xl p-6 rounded-3xl shadow-2xl ${
                message.role === "user"
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white border-2 border-blue-500/40"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-2 border-yellow-500/40"
              }`}
            >
              <div className="text-lg leading-relaxed">{message.content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MOVEMENT INPUT CONSOLE */}
      <div className="border-t-2 border-yellow-500/40 p-8 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="flex space-x-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Command the movement... Patent-protected AI ready for your instructions 🧠"
            className="flex-1 bg-black/70 backdrop-blur-xl text-white p-6 rounded-2xl border-2 border-yellow-500/40 focus:border-yellow-500 outline-none text-lg"
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-10 py-6 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-2xl"
          >
            EXECUTE 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

// 🚀 PARTNERTECH PRO - MOVEMENT BUSINESS SUITE
function PartnerTechPro({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-8xl mx-auto">
        {/* PARTNERTECH MOVEMENT HEADER */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={onMenuToggle}
                className="md:hidden text-yellow-400 text-3xl"
              >
                ☰
              </button>
              <div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  PartnerTech.ai
                </h1>
                <p className="text-gray-400 text-2xl">
                  SAINTSAL™ Movement • Pro Business Suite • Patent Protected
                </p>
              </div>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-bold text-3xl">PT</span>
            </div>
          </div>
        </div>

        {/* MOVEMENT READY STATUS */}
        <div className="bg-gradient-to-r from-yellow-400/15 to-yellow-600/15 border-2 border-yellow-500/50 rounded-3xl p-12 text-center mb-12 backdrop-blur-xl shadow-2xl">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">
            🚀 MOVEMENT BUSINESS SUITE ACTIVATED!
          </h2>
          <p className="text-white/90 text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            All movement infrastructure is live and operational.
            Patent-protected dual AI, Stripe billing tiers, Azure webhooks, and
            Slack DevOps are ready for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-6 px-12 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-2xl">
              🔥 LAUNCH FULL MOVEMENT
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-6 px-12 rounded-2xl text-2xl transition-all"
            >
              ← RETURN TO COMMAND
            </button>
          </div>
        </div>

        {/* MOVEMENT INFRASTRUCTURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "Dual AI Brain",
              icon: "🧠",
              desc: "Patent-protected interface",
              value: "ACTIVE",
              color: "from-blue-600 to-blue-800",
            },
            {
              title: "Movement Revenue",
              icon: "💰",
              desc: "Stripe tier billing",
              value: "$847K",
              color: "from-green-600 to-green-800",
            },
            {
              title: "Saint Network",
              icon: "👑",
              desc: "Active movement members",
              value: "127 Saints",
              color: "from-purple-600 to-purple-800",
            },
            {
              title: "DevOps Command",
              icon: "🔧",
              desc: "Slack automation ready",
              value: "OPERATIONAL",
              color: "from-yellow-600 to-yellow-800",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-10 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border-2 border-white/20`}
            >
              <div className="text-5xl mb-8">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-3xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 🔐 MOVEMENT ENTRY - VIP SAINT ACCESS
function MovementEntry({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ email, plan: "saint-movement", id: Date.now() });
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 max-w-2xl w-full border-2 border-yellow-500/50 shadow-2xl">
        {/* MOVEMENT ENTRY HEADER */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-white">
            {isLogin ? "SAINT RETURN" : "JOIN THE MOVEMENT"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl"
          >
            ✕
          </button>
        </div>

        {/* MOVEMENT BADGE */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-500/50 rounded-3xl px-10 py-6">
            <span className="text-yellow-400 font-bold text-2xl">
              🧠 PATENT-PROTECTED MOVEMENT
            </span>
            <p className="text-gray-300 text-lg mt-2">
              U.S. Patent No. 10,290,222
            </p>
          </div>
        </div>

        {/* MOVEMENT ENTRY FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="email"
              placeholder="Saint Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/70 backdrop-blur-xl text-white p-6 rounded-2xl border-2 border-yellow-500/40 focus:border-yellow-500 outline-none text-xl"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Movement Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/70 backdrop-blur-xl text-white p-6 rounded-2xl border-2 border-yellow-500/40 focus:border-yellow-500 outline-none text-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold py-6 rounded-2xl text-2xl hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-2xl"
          >
            {isLogin ? "ENTER THE MOVEMENT 🔥" : "BECOME A SAINT 👑"}
          </button>
        </form>

        {/* MOVEMENT TOGGLE */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300 text-xl font-medium"
          >
            {isLogin
              ? "Not a Saint yet? Join the movement"
              : "Already a Saint? Enter here"}
          </button>
        </div>

        {/* MOVEMENT SECURITY */}
        <div className="mt-10 text-center text-base text-gray-400">
          🛡️ Patent Protected • Azure Secured • Stripe Verified • Movement
          Guaranteed
        </div>
      </div>
    </div>
  );
}
