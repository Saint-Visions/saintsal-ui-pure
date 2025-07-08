// ui/builder/BuilderPage.tsx
import React, { useState, useEffect } from "react";
import { BuilderComponent } from "@builder.io/react";
import Image from "next/image";

// TypeScript interfaces
interface LandingPageProps {
  onStartCooking?: () => void;
  onAIChat?: () => void;
  onSignIn?: () => void;
  onMenuToggle?: () => void;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  user: any;
}

interface DashboardProps {
  user: any;
  onMenuToggle: () => void;
  onNavigate: (page: string) => void;
}

interface ChatInterfaceProps {
  user: any;
  onMenuToggle: () => void;
  onNavigate?: (page: string) => void;
}

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (userData: any) => void;
}

// Core SaintVisionAI Application
export function BuilderPage({
  model = "page",
  content,
}: {
  model?: string;
  content: any;
}) {
  const [currentView, setCurrentView] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  // If Builder.io content exists, render it
  if (content) {
    return <BuilderComponent model={model} content={content} />;
  }

  // Otherwise render our SaintVisionAI app
  return <SaintVisionAIApp />;
}

// Main SaintVisionAI Application Component
function SaintVisionAIApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Landing Page */}
      {currentPage === "landing" && (
        <LandingPage
          onStartCooking={() =>
            user ? setCurrentPage("dashboard") : setShowAuthModal(true)
          }
          onAIChat={() =>
            user ? setCurrentPage("chat") : setShowAuthModal(true)
          }
          onSignIn={() => setShowAuthModal(true)}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* Dashboard */}
      {currentPage === "dashboard" && user && (
        <Dashboard
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* Chat Interface */}
      {currentPage === "chat" && user && (
        <ChatInterface
          user={user}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={setCurrentPage}
        />
      )}

      {/* Sidebar for authenticated users */}
      {user && (
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          user={user}
        />
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={(userData: any) => {
            setUser(userData);
            setShowAuthModal(false);
            setCurrentPage("dashboard");
          }}
        />
      )}
    </div>
  );
}

// Landing Page Component
function LandingPage({
  onStartCooking,
  onAIChat,
  onSignIn,
  onMenuToggle,
}: LandingPageProps) {
  const features = [
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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Quote Section */}
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

        {/* Main Interface */}
        <div className="bg-black/90 rounded-2xl p-8 mb-8 border border-yellow-500/30 max-w-md w-full">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <div className="text-black font-bold text-xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-xs mb-1">SAINTSAL™</div>
              <div className="text-yellow-400 text-xs mb-2">
                Cooking Knowledge
              </div>
              <h1 className="text-white text-2xl font-bold">SaintVisionAI™</h1>
            </div>
          </div>

          {/* Start Cooking Button */}
          <button
            onClick={onStartCooking}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-xl mb-4 flex items-center justify-center transition-all shadow-lg"
          >
            🔥 Start Cooking
            <span className="ml-2">→</span>
          </button>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={onAIChat}
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors"
            >
              💬 AI Chat
            </button>
            <button
              onClick={onSignIn}
              className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors"
            >
              🔐 Sign In
            </button>
          </div>

          {/* Quick Access */}
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

        {/* Features Grid */}
        <div className="w-full max-w-4xl">
          <h2 className="text-yellow-400 text-xl font-bold text-center mb-6 flex items-center justify-center">
            🔧 What's Inside These Walls
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform text-white`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">{feature.icon}</span>
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                </div>
                <p className="text-xs opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Elite Sanctuary */}
          <div className="text-center">
            <h3 className="text-yellow-400 text-lg font-semibold mb-2">
              ✨ Elite AI Sanctuary • Ready for Saints
            </h3>
            <p className="text-white/70 text-sm">
              Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar Component
function Sidebar({
  isOpen,
  onToggle,
  currentPage,
  onNavigate,
  user,
}: SidebarProps) {
  const menuItems = [
    { name: "Main Dashboard", icon: "🏠", page: "dashboard" },
    { name: "My Companion", icon: "👤", page: "chat", emoji: "🧠" },
    { name: "My Business", icon: "💼", page: "business", emoji: "📊" },
    { name: "Sticky Notes", icon: "📝", page: "notes", emoji: "📌" },
    { name: "AI Tools", icon: "⚡", page: "ai-tools", emoji: "🔧" },
    { name: "Image Generator", icon: "🎨", page: "image-gen", emoji: "🖼️" },
    { name: "SVG Launchpad", icon: "🚀", page: "svg-tools", emoji: "🎯" },
    { name: "Feedback & Help", icon: "⚙️", page: "help", emoji: "💡" },
    { name: "PartnerTech.ai CRM", icon: "💳", page: "partnertech", pro: true },
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
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
        border-r border-yellow-500/20 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Header */}
        <div className="p-4 border-b border-yellow-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <div className="text-black font-bold text-sm">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-xs font-medium">
                SAINTSAL™
              </div>
              <div className="text-white text-sm font-semibold">
                SaintVisionAI
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => {
              const isActive = currentPage === item.page;

              return (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.page)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-sm
                    transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium flex-1">{item.name}</span>
                  {item.emoji && (
                    <span className="text-sm opacity-70 group-hover:opacity-100">
                      {item.emoji}
                    </span>
                  )}
                  {item.pro && (
                    <span className="text-xs bg-yellow-500 text-black px-1 rounded">
                      PRO
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-yellow-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {user?.email || "User"}
              </p>
              <p className="text-gray-400 text-xs">Pro User</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Dashboard Component
function Dashboard({ user, onMenuToggle, onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400"
            >
              ☰
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">Main Dashboard</h1>
              <p className="text-gray-400">Welcome back, Saint</p>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <div className="text-black font-bold">SV</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => onNavigate("chat")}
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl text-left hover:scale-105 transition-transform"
          >
            <div className="text-2xl mb-2">💬</div>
            <h3 className="text-white font-bold text-lg mb-1">Start Chat</h3>
            <p className="text-blue-200 text-sm">Talk to your AI companion</p>
          </button>

          <button
            onClick={() => onNavigate("partnertech")}
            className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl text-left hover:scale-105 transition-transform"
          >
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="text-white font-bold text-lg mb-1">PartnerTech</h3>
            <p className="text-purple-200 text-sm">Access pro tools</p>
          </button>

          <button
            onClick={() => onNavigate("ai-tools")}
            className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-left hover:scale-105 transition-transform"
          >
            <div className="text-2xl mb-2">🔧</div>
            <h3 className="text-white font-bold text-lg mb-1">AI Tools</h3>
            <p className="text-green-200 text-sm">Explore utilities</p>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
            <div className="text-yellow-400 text-sm font-medium">
              Active Chats
            </div>
            <div className="text-white text-2xl font-bold">12</div>
          </div>
          <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
            <div className="text-yellow-400 text-sm font-medium">
              Leads Generated
            </div>
            <div className="text-white text-2xl font-bold">48</div>
          </div>
          <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
            <div className="text-yellow-400 text-sm font-medium">
              Deals Closed
            </div>
            <div className="text-white text-2xl font-bold">7</div>
          </div>
          <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
            <div className="text-yellow-400 text-sm font-medium">Revenue</div>
            <div className="text-white text-2xl font-bold">$23.5K</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chat Interface Component
function ChatInterface({ user, onMenuToggle, onNavigate }: ChatInterfaceProps) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey there, Saint! What are we cooking up today?",
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
        content: "I understand! Let me help you with that...",
      },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              className="md:hidden text-yellow-400"
            >
              ☰
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">AI Companion</h1>
              <p className="text-gray-400 text-sm">SaintSal is ready to help</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <div className="text-black font-bold text-sm">SV</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-sm p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex space-x-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask SaintSal anything..."
            className="flex-1 bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// Auth Modal Component
function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth - replace with real auth
    onSuccess({ email, plan: "pro" });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-yellow-500/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Join SaintSal"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 hover:text-yellow-300 text-sm"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
