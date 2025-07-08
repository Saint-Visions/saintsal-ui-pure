// 🚗 SAINTVISIONAL AI - ROLLS ROYCE EXPERIENCE 🚗
import React, { useState, useEffect } from "react";

export default function MyComponent(props) {
  const [currentPage, setCurrentPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 🔥 Your environment variables are LIVE and ready!
  const isDualAIEnabled = process.env.VITE_ENABLE_DUAL_AI === "true";
  const isBossModeEnabled = process.env.VITE_ENABLE_BOSS_MODE === "true";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 🏠 Landing Page - Rolls Royce Entry */}
      {currentPage === "landing" && (
        <LandingPage
          onStartCooking={() =>
            user ? setCurrentPage("dashboard") : setShowAuthModal(true)
          }
          onAIChat={() =>
            user ? setCurrentPage("chat") : setShowAuthModal(true)
          }
          onSignIn={() => setShowAuthModal(true)}
        />
      )}

      {/* 📊 Dashboard - Command Center */}
      {currentPage === "dashboard" && user && (
        <Dashboard
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 💬 Chat Interface - AI Companion */}
      {currentPage === "chat" && user && (
        <ChatInterface
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* 🚀 PartnerTech Pro - Business Suite */}
      {currentPage === "partnertech" && user && (
        <PartnerTechPro
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* 📱 Sidebar Navigation - Luxury Menu */}
      {user && (
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          user={user}
        />
      )}

      {/* 🔐 Auth Modal - VIP Entry */}
      {showAuthModal && (
        <AuthModal
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

// 🏠 Landing Page - The Rolls Royce Welcome
function LandingPage({ onStartCooking, onAIChat, onSignIn }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/80" />
      </div>

      {/* Luxury Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Premium Quote Section */}
        <div className="text-center mb-8 max-w-3xl">
          <div className="bg-black/90 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-yellow-500/50 shadow-2xl">
            <p className="text-yellow-400 text-2xl font-medium mb-3 tracking-wide">
              "SaintSal" AI doesn't just answer.
            </p>
            <p className="text-white text-xl mb-4 font-light">
              It adapts. It empowers. It becomes your...
            </p>
            <p className="text-yellow-400 text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              GOTTA GUY™!
            </p>
          </div>
        </div>

        {/* Premium Interface Card - Rolls Royce Design */}
        <div className="bg-black/95 backdrop-blur-xl rounded-3xl p-10 mb-10 border-2 border-yellow-500/40 shadow-2xl max-w-lg w-full">
          {/* Luxury Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-black font-bold text-2xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-sm font-medium mb-1 tracking-widest">
                SAINTSAL™
              </div>
              <div className="text-yellow-400 text-xs opacity-80 mb-3 tracking-wide">
                Cooking Knowledge
              </div>
              <h1 className="text-white text-3xl font-bold tracking-tight">
                SaintVisionAI™
              </h1>
            </div>
          </div>

          {/* Premium Start Cooking Button */}
          <button
            onClick={onStartCooking}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 shadow-xl transform hover:scale-105"
          >
            <span className="text-2xl mr-2">🔥</span>
            <span className="text-lg">Start Cooking</span>
            <span className="ml-3 text-xl">→</span>
          </button>

          {/* Premium Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={onAIChat}
              className="bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-3 px-6 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 shadow-lg border border-blue-500/30"
            >
              <span className="mr-2">💬</span>
              AI Chat
            </button>
            <button
              onClick={onSignIn}
              className="bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white py-3 px-6 rounded-xl text-sm font-medium flex items-center justify-center transition-all duration-200 shadow-lg border border-green-500/30"
            >
              <span className="mr-2">🔐</span>
              Sign In
            </button>
          </div>

          {/* Premium Quick Access */}
          <div className="text-center">
            <p className="text-yellow-400 text-sm font-medium mb-4 tracking-wide">
              Quick Access:
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform">
                  ⚠️
                </span>
                <span>Pricing</span>
              </button>
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform">
                  🤖
                </span>
                <span>Setup</span>
              </button>
              <button className="text-white/70 hover:text-yellow-400 transition-colors flex items-center space-x-2 group">
                <span className="group-hover:scale-110 transition-transform">
                  ❓
                </span>
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>

        {/* Premium Features Section - What's Inside These Walls */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-yellow-400 text-3xl font-bold flex items-center justify-center mb-4">
              <span className="mr-3 text-4xl">🔧</span>
              What's Inside These Walls
            </h2>
            <p className="text-white/70 text-xl">
              Premium AI tools for the modern entrepreneur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-xl border border-blue-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🔍</span>
                <h3 className="font-bold text-lg">Lead Discovery</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                AI-powered lookup and intelligence gathering
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-xl border border-green-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">🤝</span>
                <h3 className="font-bold text-lg">Referral Network</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Partner tracking and commission management
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-xl border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="font-bold text-lg">AI Deal Analysis</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                GPT-4 insights and market intelligence
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-xl border border-red-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">📱</span>
                <h3 className="font-bold text-lg">Mobile Export</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                iOS/Android apps with full sync
              </p>
            </div>
          </div>

          {/* Elite Sanctuary Badge */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-2 border-yellow-500/40 rounded-3xl p-8 backdrop-blur-lg shadow-2xl">
              <h3 className="text-yellow-400 text-2xl font-bold mb-3 flex items-center justify-center">
                <span className="mr-3 text-3xl">✨</span>
                Elite AI Sanctuary • Ready for Saints
              </h3>
              <p className="text-white/80 text-lg">
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

// 📱 Sidebar - Premium Navigation Menu
function Sidebar({ isOpen, onToggle, currentPage, onNavigate, user }) {
  const menuItems = [
    { name: "Main Dashboard", icon: "🏠", page: "dashboard" },
    { name: "My Companion", icon: "👤", page: "chat", emoji: "🧠" },
    { name: "My Business", icon: "💼", page: "business", emoji: "📊" },
    { name: "Sticky Notes", icon: "📝", page: "notes", emoji: "📌" },
    { name: "AI Tools", icon: "⚡", page: "ai-tools", emoji: "🔧" },
    { name: "Image Generator", icon: "🎨", page: "image-gen", emoji: "🖼️" },
    { name: "SVG Launchpad", icon: "🚀", page: "svg-tools", emoji: "🎯" },
    { name: "Feedback & Help", icon: "⚙️", page: "help", emoji: "💡" },
    { name: "PartnerTech.ai CRM", icon: "💳", page: "partnertech" },
    { name: "Client Portal", icon: "🏛️", page: "client-portal", emoji: "🌟" },
    {
      name: "SVT Institute of AI (R + D)",
      icon: "🏛️",
      page: "institute",
      emoji: "🔬",
    },
    { name: "Upgrade Tier", icon: "⚡", page: "upgrade", emoji: "⭐" },
    { name: "My Account", icon: "👤", page: "settings", emoji: "⚙️" },
    { name: "Logout", icon: "🚪", page: "logout", emoji: "👋" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Premium Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-800 via-gray-900 to-black 
        z-50 transform transition-all duration-300 border-r-2 border-yellow-500/30 shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Premium Header */}
        <div className="p-6 border-b-2 border-yellow-500/30 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-xl">
              <div className="text-black font-bold text-lg">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-sm font-bold tracking-widest">
                SAINTSAL™
              </div>
              <div className="text-white text-lg font-bold">SaintVisionAI</div>
            </div>
          </div>
        </div>

        {/* Premium Menu Items */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-2 px-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.page;

              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className={`
                    w-full flex items-center space-x-4 px-5 py-4 rounded-2xl text-left
                    transition-all duration-200 group bg-gradient-to-r hover:shadow-lg
                    ${
                      isActive
                        ? "from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/50 text-yellow-400 shadow-lg"
                        : "from-gray-700/30 to-gray-800/30 hover:from-gray-600/40 hover:to-gray-700/40 text-gray-200 hover:text-white"
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium flex-1">{item.name}</span>
                  {item.emoji && (
                    <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                      {item.emoji}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Premium User Profile */}
        <div className="p-6 border-t-2 border-yellow-500/30 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black text-lg font-bold">
                {user?.email?.charAt(0).toUpperCase() || "S"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-lg font-bold truncate">
                {user?.email || "Saint User"}
              </p>
              <p className="text-yellow-400 text-sm font-medium">
                Ready to Cook 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// 📊 Dashboard - Command Center
function Dashboard({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-6">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-2xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Main Dashboard
              </h1>
              <p className="text-gray-400 text-lg">
                Welcome back, Saint • All systems active 🚀
              </p>
            </div>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-black font-bold text-2xl">SV</div>
          </div>
        </div>

        {/* Environment Status - Rolls Royce Ready */}
        <div className="bg-gradient-to-r from-green-600/10 to-green-800/10 border-2 border-green-500/40 rounded-2xl p-6 mb-10 backdrop-blur-lg">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">✅</span>
            <div>
              <span className="text-green-400 font-bold text-xl">
                Rolls Royce Status: ACTIVE
              </span>
              <p className="text-gray-300">
                Azure OpenAI • Stripe Payments • Slack Alerts • All Premium
                Features Online
              </p>
            </div>
          </div>
        </div>

        {/* Premium Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <button
            onClick={() => onNavigate("chat")}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-xl border border-blue-500/30"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-white font-bold text-2xl mb-2">Start Chat</h3>
            <p className="text-blue-200 text-lg">Talk to your AI companion</p>
          </button>

          <button
            onClick={() => onNavigate("partnertech")}
            className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-xl border border-purple-500/30"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-white font-bold text-2xl mb-2">
              PartnerTech Pro
            </h3>
            <p className="text-purple-200 text-lg">Access premium CRM tools</p>
          </button>

          <button
            onClick={() => onNavigate("ai-tools")}
            className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300 shadow-xl border border-green-500/30"
          >
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-white font-bold text-2xl mb-2">AI Tools</h3>
            <p className="text-green-200 text-lg">Explore premium utilities</p>
          </button>
        </div>

        {/* Premium Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/30 shadow-xl">
            <div className="text-yellow-400 text-lg font-bold mb-2">
              Active Chats
            </div>
            <div className="text-white text-4xl font-bold mb-2">12</div>
            <div className="text-green-400 text-sm font-medium">
              +3 today 🔥
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/30 shadow-xl">
            <div className="text-yellow-400 text-lg font-bold mb-2">
              Leads Generated
            </div>
            <div className="text-white text-4xl font-bold mb-2">48</div>
            <div className="text-green-400 text-sm font-medium">
              +8 this week ⚡
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/30 shadow-xl">
            <div className="text-yellow-400 text-lg font-bold mb-2">
              Deals Closed
            </div>
            <div className="text-white text-4xl font-bold mb-2">7</div>
            <div className="text-green-400 text-sm font-medium">
              +2 this month 💎
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-yellow-500/30 shadow-xl">
            <div className="text-yellow-400 text-lg font-bold mb-2">
              Revenue
            </div>
            <div className="text-white text-4xl font-bold mb-2">$23.5K</div>
            <div className="text-green-400 text-sm font-medium">
              +$4.2K this month 🚗
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 💬 Chat Interface - AI Companion
function ChatInterface({ user, onMenuToggle }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey there, Saint! Welcome to the Rolls Royce experience. What are we cooking up today? 🔥🚗",
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
          "Perfect! Let me handle that with premium AI precision. Your Rolls Royce service is active! 🚗💎",
      },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      {/* Premium Header */}
      <div className="border-b-2 border-yellow-500/30 p-6 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400 text-2xl"
            >
              ☰
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">AI Companion</h1>
              <p className="text-yellow-400 text-sm font-medium">
                SaintSal • Rolls Royce Experience Active 🚗
              </p>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-black font-bold text-lg">SV</div>
          </div>
        </div>
      </div>

      {/* Premium Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-md p-4 rounded-2xl shadow-lg ${
                message.role === "user"
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white border border-blue-500/30"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-2 border-yellow-500/30"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Premium Input */}
      <div className="border-t-2 border-yellow-500/30 p-6 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="flex space-x-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask SaintSal anything... Rolls Royce service ready 🚗"
            className="flex-1 bg-black/60 backdrop-blur-lg text-white p-4 rounded-2xl border-2 border-yellow-500/30 focus:border-yellow-500 outline-none text-lg"
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-xl"
          >
            Send 🚀
          </button>
        </div>
      </div>
    </div>
  );
}

// 🚀 PartnerTech Pro - Business Suite
function PartnerTechPro({ user, onMenuToggle, onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Premium PartnerTech Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={onMenuToggle}
                className="md:hidden text-yellow-400 text-2xl"
              >
                ☰
              </button>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  PartnerTech.ai
                </h1>
                <p className="text-gray-400 text-xl">
                  Powered by SAINTSAL™ • Rolls Royce Business Suite 🚗
                </p>
              </div>
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-bold text-2xl">PT</span>
            </div>
          </div>
        </div>

        {/* Premium Ready Section */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-2 border-yellow-500/40 rounded-3xl p-10 text-center mb-10 backdrop-blur-lg shadow-2xl">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            🚗 Rolls Royce Business Suite Ready!
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            All your premium environment variables are connected and active.
            Azure OpenAI, Stripe payments, and Slack alerts are ready for the
            ultimate business experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-5 px-10 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-xl">
              🔥 Launch Full Suite
            </button>
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-5 px-10 rounded-2xl text-xl transition-all"
            >
              ← Back to Command Center
            </button>
          </div>
        </div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Lead Discovery",
              icon: "🔍",
              desc: "AI-powered intelligence",
              value: "24 Active",
              color: "from-blue-600 to-blue-800",
            },
            {
              title: "Referral Network",
              icon: "🤝",
              desc: "Partner commissions",
              value: "$2,497",
              color: "from-green-600 to-green-800",
            },
            {
              title: "AI Deal Analysis",
              icon: "📊",
              desc: "GPT-4 predictions",
              value: "87% Close",
              color: "from-purple-600 to-purple-800",
            },
            {
              title: "CRM Integration",
              icon: "🔗",
              desc: "Full sync active",
              value: "Connected",
              color: "from-yellow-600 to-yellow-800",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-2xl border border-white/20`}
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
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

// 🔐 Auth Modal - VIP Entry
function AuthModal({ onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ email, plan: "rolls-royce", id: Date.now() });
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 max-w-lg w-full border-2 border-yellow-500/40 shadow-2xl">
        {/* Premium Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">
            {isLogin ? "Welcome Back, Saint" : "Join the Elite Saints"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* VIP Badge */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-500/40 rounded-2xl px-6 py-3">
            <span className="text-yellow-400 font-bold text-lg">
              🚗 Rolls Royce Access
            </span>
          </div>
        </div>

        {/* Premium Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/60 backdrop-blur-lg text-white p-4 rounded-2xl border-2 border-yellow-500/30 focus:border-yellow-500 outline-none text-lg"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/60 backdrop-blur-lg text-white p-4 rounded-2xl border-2 border-yellow-500/30 focus:border-yellow-500 outline-none text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold py-4 rounded-2xl text-xl hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-xl"
          >
            {isLogin ? "Enter the Sanctuary 🔥" : "Join the Saints 👑"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300 text-lg font-medium"
          >
            {isLogin
              ? "Don't have an account? Join the elite"
              : "Already a Saint? Sign in"}
          </button>
        </div>

        {/* Premium Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          🔒 Secured by Stripe • Protected by Azure • Powered by OpenAI GPT-4
        </div>
      </div>
    </div>
  );
}
