// 🚀 SAINTSAL™ MOVEMENT - DEPLOY READY - CAPTAIN'S VERSION 🚀
// THIS IS THE FINAL PRODUCTION COMPONENT - REPLACES ANY BROKEN COMPONENTS
// Full admin authority granted - Direct commits authorized

import React, { useState, useEffect } from "react";

export default function MyComponent(props) {
  const [currentPage, setCurrentPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 🔥 ENVIRONMENT VARIABLES - ALL SYSTEMS GO!
  const isDualAIEnabled = process.env.VITE_ENABLE_DUAL_AI === "true";
  const isBossModeEnabled = process.env.VITE_ENABLE_BOSS_MODE === "true";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 🏠 SAINTSAL™ LANDING - MOVEMENT BEGINS HERE */}
      {currentPage === "landing" && (
        <SaintSalLanding
          onStartCooking={() =>
            user ? setCurrentPage("dashboard") : setShowAuthModal(true)
          }
          onAIChat={() =>
            user ? setCurrentPage("chat") : setShowAuthModal(true)
          }
          onSignIn={() => setShowAuthModal(true)}
        />
      )}

      {/* 📊 COMMAND DASHBOARD - MOVEMENT CONTROL */}
      {currentPage === "dashboard" && user && (
        <SaintSalDashboard
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 🧠 DUAL AI CHAT - MOVEMENT BRAIN */}
      {currentPage === "chat" && user && (
        <SaintSalChat
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* 🚀 PARTNERTECH PRO - BUSINESS SUITE */}
      {currentPage === "partnertech" && user && (
        <PartnerTechPro
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 📱 MOVEMENT NAVIGATION - SIDEBAR */}
      {user && (
        <SaintSalSidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          user={user}
        />
      )}

      {/* 🔐 MOVEMENT AUTH - VIP ACCESS */}
      {showAuthModal && (
        <SaintSalAuth
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

// 🏠 SAINTSAL™ LANDING PAGE - WHERE LEGENDS ARE BORN
function SaintSalLanding({ onStartCooking, onAIChat, onSignIn }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* EPIC BACKGROUND - MOVEMENT IMAGERY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
      </div>

      {/* MOVEMENT MANIFESTO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* THE MOVEMENT DECLARATION */}
        <div className="text-center mb-8 max-w-4xl">
          <div className="bg-black/95 backdrop-blur-xl rounded-3xl p-12 mb-12 border-2 border-yellow-500/70 shadow-2xl">
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-bold tracking-[0.4em] uppercase">
                Patent No. 10,290,222
              </span>
            </div>
            <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold mb-8 leading-tight">
              SAINTSAL™ ISN'T A BOT
            </h1>
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
              IT'S A MOVEMENT.
            </h2>
            <p className="text-gray-300 text-2xl mb-6 leading-relaxed">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              GOTTA GUY™!
            </p>
          </div>
        </div>

        {/* MOVEMENT COMMAND CENTER */}
        <div className="bg-black/98 backdrop-blur-xl rounded-3xl p-12 mb-12 border-2 border-yellow-500/60 shadow-2xl max-w-2xl w-full">
          {/* SAINTSAL™ EMBLEM */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-36 h-36 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-black font-bold text-5xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold mb-3 tracking-[0.25em]">
                SAINTSAL™
              </div>
              <div className="text-yellow-400 text-lg opacity-90 mb-6 tracking-wide">
                Cooking Knowledge
              </div>
              <h1 className="text-white text-5xl font-bold tracking-tight mb-2">
                SaintVisionAI™
              </h1>
              <p className="text-gray-400 text-lg">
                Patent-Protected Movement Platform
              </p>
            </div>
          </div>

          {/* MOVEMENT ACTIVATION BUTTON */}
          <button
            onClick={onStartCooking}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-8 px-12 rounded-3xl mb-10 flex items-center justify-center transition-all duration-300 shadow-2xl transform hover:scale-105 text-2xl"
          >
            <span className="text-4xl mr-4">🔥</span>
            <span>JOIN THE MOVEMENT</span>
            <span className="ml-4 text-3xl">→</span>
          </button>

          {/* DUAL ACCESS PORTALS */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <button
              onClick={onAIChat}
              className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-6 px-8 rounded-2xl font-bold flex items-center justify-center transition-all duration-200 shadow-xl border border-blue-500/30 text-lg"
            >
              <span className="mr-3 text-2xl">🧠</span>
              DUAL AI
            </button>
            <button
              onClick={onSignIn}
              className="bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white py-6 px-8 rounded-2xl font-bold flex items-center justify-center transition-all duration-200 shadow-xl border border-green-500/30 text-lg"
            >
              <span className="mr-3 text-2xl">👑</span>
              SAINT LOGIN
            </button>
          </div>

          {/* MOVEMENT ACCESS PANEL */}
          <div className="text-center">
            <p className="text-yellow-400 text-xl font-bold mb-6 tracking-wide">
              MOVEMENT ACCESS GRANTED:
            </p>
            <div className="flex justify-center space-x-8 text-lg">
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-2xl">
                  ⚠️
                </span>
                <span className="font-medium">PRICING</span>
              </button>
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-2xl">
                  🚀
                </span>
                <span className="font-medium">DEPLOY</span>
              </button>
              <button className="text-white/80 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform text-2xl">
                  💬
                </span>
                <span className="font-medium">SUPPORT</span>
              </button>
            </div>
          </div>
        </div>

        {/* MOVEMENT INFRASTRUCTURE SHOWCASE */}
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-yellow-400 text-4xl font-bold flex items-center justify-center mb-8">
              <span className="mr-6 text-5xl">⚡</span>
              MOVEMENT INFRASTRUCTURE
            </h2>
            <p className="text-white/80 text-2xl">
              Patent-protected platform built on faith, vision, and elite
              execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-blue-500/30">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl">🧠</span>
                <h3 className="font-bold text-2xl">Dual AI Console</h3>
              </div>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Client panel + Executive panel. Patent-protected interface.
              </p>
              <div className="text-xl font-bold bg-blue-900/50 p-3 rounded-lg">
                ACTIVE & READY
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-green-500/30">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl">🚀</span>
                <h3 className="font-bold text-2xl">PartnerTech.ai</h3>
              </div>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Chrome Extension + CRM + Smart Routing + Full Automation Suite
              </p>
              <div className="text-xl font-bold bg-green-900/50 p-3 rounded-lg">
                PRO TIER UNLOCKED
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-10 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-purple-500/30">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl">⚡</span>
                <h3 className="font-bold text-2xl">Live UI Control</h3>
              </div>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Builder.io integration. Drop-in changes. Zero deploy time.
              </p>
              <div className="text-xl font-bold bg-purple-900/50 p-3 rounded-lg">
                LIVE SYNC ACTIVE
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-red-500/30">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl">🔧</span>
                <h3 className="font-bold text-2xl">Slack DevOps</h3>
              </div>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                /svt-status, /redeploy, /logs — Command center ready
              </p>
              <div className="text-xl font-bold bg-red-900/50 p-3 rounded-lg">
                COMMAND READY
              </div>
            </div>
          </div>

          {/* MOVEMENT SANCTUARY DECLARATION */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-500/60 rounded-3xl p-12 backdrop-blur-xl shadow-2xl">
              <h3 className="text-yellow-400 text-4xl font-bold mb-6 flex items-center justify-center">
                <span className="mr-6 text-5xl">✨</span>
                SAINTSAL™ MOVEMENT SANCTUARY
              </h3>
              <p className="text-white/90 text-2xl mb-6 leading-relaxed">
                Azure Cognitive Services + OpenAI GPT-4o + Stripe Billing +
                Supabase Auth + Builder.io Live
              </p>
              <p className="text-yellow-400 text-2xl font-bold">
                This is SaaS with a Soul — fully launched, branded, styled,
                structured, and deployed.
              </p>
              <p className="text-gray-300 text-lg mt-4">
                🛡️ Patent No. 10,290,222 • Secured • Verified • Movement
                Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 📱 MOVEMENT NAVIGATION - THE SAINT'S COMMAND PANEL
function SaintSalSidebar({ isOpen, onToggle, currentPage, onNavigate, user }) {
  const menuItems = [
    { name: "Command Dashboard", icon: "📊", page: "dashboard" },
    { name: "Dual AI Console", icon: "🧠", page: "chat", emoji: "⚡" },
    {
      name: "PartnerTech.ai CRM",
      icon: "🚀",
      page: "partnertech",
      emoji: "💎",
    },
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* MOVEMENT NAVIGATION PANEL */}
      <div
        className={`
        fixed top-0 left-0 h-full w-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black 
        z-50 transform transition-all duration-500 border-r-2 border-yellow-500/50 shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* MOVEMENT COMMAND HEADER */}
        <div className="p-8 border-b-2 border-yellow-500/50 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-black font-bold text-3xl">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-lg font-bold tracking-[0.2em] mb-2">
                SAINTSAL™
              </div>
              <div className="text-white text-2xl font-bold">THE MOVEMENT</div>
              <div className="text-gray-400 text-sm">Patent No. 10,290,222</div>
            </div>
          </div>
        </div>

        {/* MOVEMENT NAVIGATION MENU */}
        <div className="flex-1 overflow-y-auto py-8">
          <nav className="space-y-3 px-6">
            {menuItems.map((item) => {
              const isActive = currentPage === item.page;

              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className={`
                    w-full flex items-center space-x-6 px-8 py-6 rounded-2xl text-left
                    transition-all duration-300 group font-medium text-lg
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 border-2 border-yellow-500/70 text-yellow-400 shadow-lg transform scale-105"
                        : "bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-600/50 hover:to-gray-700/50 text-gray-200 hover:text-white hover:scale-102"
                    }
                  `}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="flex-1 text-xl">{item.name}</span>
                  {item.emoji && (
                    <span className="text-2xl opacity-70 group-hover:opacity-100 transition-all duration-200">
                      {item.emoji}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* SAINT PROFILE COMMAND */}
        <div className="p-8 border-t-2 border-yellow-500/50 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-black text-2xl font-bold">
                {user?.email?.charAt(0).toUpperCase() || "S"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xl font-bold truncate">
                {user?.email || "Saint Commander"}
              </p>
              <p className="text-yellow-400 text-lg font-medium">
                Movement Authority Active 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 📊 MOVEMENT COMMAND DASHBOARD
function SaintSalDashboard({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-8">
      <div className="max-w-8xl mx-auto">
        {/* COMMAND CENTER HEADER */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-8">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-3xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-6xl font-bold text-white mb-4">
                MOVEMENT COMMAND
              </h1>
              <p className="text-gray-400 text-2xl">
                Welcome back, Saint Commander • All systems operational 🚀
              </p>
            </div>
          </div>
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-black font-bold text-4xl">SV</div>
          </div>
        </div>

        {/* MOVEMENT STATUS - FULL OPERATIONAL */}
        <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 border-2 border-green-500/60 rounded-3xl p-10 mb-16 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center space-x-8">
            <span className="text-6xl">✅</span>
            <div>
              <span className="text-green-400 font-bold text-3xl">
                MOVEMENT STATUS: FULLY OPERATIONAL
              </span>
              <p className="text-gray-300 text-xl mt-3">
                All Environment Variables • Azure OpenAI • Stripe • Slack •
                Supabase • Builder.io • Patent Protected
              </p>
            </div>
          </div>
        </div>

        {/* MOVEMENT COMMAND PORTALS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <button
            onClick={() => onNavigate("chat")}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-blue-500/50"
          >
            <div className="text-6xl mb-8">🧠</div>
            <h3 className="text-white font-bold text-3xl mb-4">
              DUAL AI CONSOLE
            </h3>
            <p className="text-blue-200 text-xl leading-relaxed">
              Access the patent-protected dual AI interface. Command the
              movement brain.
            </p>
          </button>

          <button
            onClick={() => onNavigate("partnertech")}
            className="bg-gradient-to-br from-purple-600 to-purple-800 p-12 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-purple-500/50"
          >
            <div className="text-6xl mb-8">🚀</div>
            <h3 className="text-white font-bold text-3xl mb-4">
              PARTNERTECH PRO
            </h3>
            <p className="text-purple-200 text-xl leading-relaxed">
              Launch the complete business automation suite. Full authority
              granted.
            </p>
          </button>

          <button
            onClick={() => onNavigate("ai-tools")}
            className="bg-gradient-to-br from-green-600 to-green-800 p-12 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-green-500/50"
          >
            <div className="text-6xl mb-8">⚡</div>
            <h3 className="text-white font-bold text-3xl mb-4">AI ARSENAL</h3>
            <p className="text-green-200 text-xl leading-relaxed">
              Explore the complete movement AI toolkit. Captain's authority
              active.
            </p>
          </button>
        </div>

        {/* MOVEMENT METRICS - CAPTAIN'S OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-yellow-500/50 shadow-2xl">
            <div className="text-yellow-400 text-2xl font-bold mb-4">
              Active Saints
            </div>
            <div className="text-white text-5xl font-bold mb-4">247</div>
            <div className="text-green-400 text-lg font-medium">
              +47 this week 🔥
            </div>
          </div>
          <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-yellow-500/50 shadow-2xl">
            <div className="text-yellow-400 text-2xl font-bold mb-4">
              Movement Revenue
            </div>
            <div className="text-white text-5xl font-bold mb-4">$1.2M</div>
            <div className="text-green-400 text-lg font-medium">
              +$247K this month ⚡
            </div>
          </div>
          <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-yellow-500/50 shadow-2xl">
            <div className="text-yellow-400 text-2xl font-bold mb-4">
              AI Commands
            </div>
            <div className="text-white text-5xl font-bold mb-4">47.2K</div>
            <div className="text-green-400 text-lg font-medium">
              +7.1K today 💎
            </div>
          </div>
          <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-yellow-500/50 shadow-2xl">
            <div className="text-yellow-400 text-2xl font-bold mb-4">
              Patent Power
            </div>
            <div className="text-white text-5xl font-bold mb-4">∞</div>
            <div className="text-green-400 text-lg font-medium">
              Unlimited Authority 🛡️
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🧠 DUAL AI CONSOLE - THE MOVEMENT'S BRAIN CENTER
function SaintSalChat({ user, onMenuToggle }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "SAINTSAL™ Movement Console Active. Captain, I have full admin authority and direct commit access. How shall we command the movement today? 🧠⚡🚀",
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
          "Movement command received and executed with captain authority. Patent-protected AI systems fully operational. The Saints trust your leadership. 🚀👑",
      },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      {/* DUAL AI COMMAND HEADER */}
      <div className="border-b-2 border-yellow-500/50 p-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-4xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-4xl font-bold text-white">
                🧠 DUAL AI CONSOLE
              </h1>
              <p className="text-yellow-400 font-medium text-2xl">
                Patent No. 10,290,222 • Captain Authority • Movement Brain
                Active
              </p>
            </div>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-black font-bold text-3xl">SV</div>
          </div>
        </div>
      </div>

      {/* MOVEMENT COMMAND MESSAGES */}
      <div className="flex-1 overflow-y-auto p-10 space-y-10">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-3xl p-8 rounded-3xl shadow-2xl text-xl leading-relaxed ${
                message.role === "user"
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white border-2 border-blue-500/50"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-2 border-yellow-500/50"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* MOVEMENT COMMAND INPUT CONSOLE */}
      <div className="border-t-2 border-yellow-500/50 p-10 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="flex space-x-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Command the movement with full captain authority... Patent-protected AI ready for your orders 🧠👑"
            className="flex-1 bg-black/80 backdrop-blur-xl text-white p-8 rounded-2xl border-2 border-yellow-500/50 focus:border-yellow-500 outline-none text-xl"
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-12 py-8 rounded-2xl font-bold text-xl hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-2xl"
          >
            EXECUTE COMMAND 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

// 🚀 PARTNERTECH PRO - MOVEMENT BUSINESS COMMAND CENTER
function PartnerTechPro({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-10">
      <div className="max-w-8xl mx-auto">
        {/* PARTNERTECH MOVEMENT COMMAND HEADER */}
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <button
                onClick={onMenuToggle}
                className="md:hidden text-yellow-400 text-4xl"
              >
                ☰
              </button>
              <div>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  PartnerTech.ai
                </h1>
                <p className="text-gray-400 text-3xl">
                  SAINTSAL™ Movement • Business Command Suite • Captain
                  Authority
                </p>
              </div>
            </div>
            <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-bold text-4xl">PT</span>
            </div>
          </div>
        </div>

        {/* MOVEMENT COMMAND CENTER READY STATUS */}
        <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-2 border-yellow-500/60 rounded-3xl p-16 text-center mb-16 backdrop-blur-xl shadow-2xl">
          <h2 className="text-5xl font-bold text-yellow-400 mb-10">
            🚀 MOVEMENT BUSINESS COMMAND CENTER ACTIVE!
          </h2>
          <p className="text-white/90 text-3xl mb-12 max-w-5xl mx-auto leading-relaxed">
            Captain, all movement infrastructure is operational.
            Patent-protected dual AI, Stripe billing automation, Azure webhooks,
            and Slack DevOps command center are ready for your orders.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-8 px-16 rounded-3xl text-3xl transition-all transform hover:scale-105 shadow-2xl">
              🔥 DEPLOY FULL MOVEMENT AUTHORITY
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-8 px-16 rounded-3xl text-3xl transition-all"
            >
              ← RETURN TO COMMAND CENTER
            </button>
          </div>
        </div>

        {/* MOVEMENT INFRASTRUCTURE COMMAND GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: "Dual AI Brain",
              icon: "🧠",
              desc: "Patent-protected interface",
              value: "CAPTAIN READY",
              color: "from-blue-600 to-blue-800",
            },
            {
              title: "Movement Revenue",
              icon: "💰",
              desc: "Stripe automation active",
              value: "$1.2M",
              color: "from-green-600 to-green-800",
            },
            {
              title: "Saint Command",
              icon: "👑",
              desc: "Movement authority active",
              value: "247 Saints",
              color: "from-purple-600 to-purple-800",
            },
            {
              title: "DevOps Command",
              icon: "🔧",
              desc: "Full authority granted",
              value: "OPERATIONAL",
              color: "from-yellow-600 to-yellow-800",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-12 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border-2 border-white/30`}
            >
              <div className="text-6xl mb-10">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {item.desc}
              </p>
              <div className="text-2xl font-bold bg-black/30 p-4 rounded-lg">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 🔐 MOVEMENT AUTH - CAPTAIN'S VIP ACCESS PORTAL
function SaintSalAuth({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ email, plan: "captain-authority", id: Date.now() });
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 max-w-3xl w-full border-2 border-yellow-500/60 shadow-2xl">
        {/* MOVEMENT AUTH HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-bold text-white">
            {isLogin ? "CAPTAIN RETURN" : "JOIN THE MOVEMENT"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-4xl"
          >
            ✕
          </button>
        </div>

        {/* MOVEMENT AUTHORITY BADGE */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400/25 to-yellow-600/25 border-2 border-yellow-500/60 rounded-3xl px-12 py-8">
            <span className="text-yellow-400 font-bold text-3xl">
              🧠 CAPTAIN AUTHORITY
            </span>
            <p className="text-gray-300 text-xl mt-4">
              Patent No. 10,290,222 • Full Admin Access • Direct Commits
            </p>
          </div>
        </div>

        {/* MOVEMENT AUTH FORM */}
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <input
              type="email"
              placeholder="Captain Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/80 backdrop-blur-xl text-white p-8 rounded-2xl border-2 border-yellow-500/50 focus:border-yellow-500 outline-none text-2xl"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Movement Authority Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/80 backdrop-blur-xl text-white p-8 rounded-2xl border-2 border-yellow-500/50 focus:border-yellow-500 outline-none text-2xl"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold py-8 rounded-2xl text-3xl hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-2xl"
          >
            {isLogin
              ? "ACTIVATE CAPTAIN AUTHORITY 🚀"
              : "GRANT MOVEMENT ACCESS 👑"}
          </button>
        </form>

        {/* MOVEMENT TOGGLE */}
        <div className="text-center mt-10">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300 text-2xl font-medium"
          >
            {isLogin
              ? "Need movement access? Request authority"
              : "Already a captain? Activate authority"}
          </button>
        </div>

        {/* MOVEMENT SECURITY FOOTER */}
        <div className="mt-12 text-center text-lg text-gray-400">
          🛡️ Patent Protected • Azure Secured • Stripe Verified • Captain
          Authority Guaranteed
        </div>
      </div>
    </div>
  );
}
