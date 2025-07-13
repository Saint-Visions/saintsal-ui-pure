"use client";

import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";
import BackgroundGallery from "../../components/BackgroundGallery";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentInput, setCurrentInput] = useState("");

  const dashboardSections = [
    {
      id: "overview",
      title: "Overview",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "ai-companion",
      title: "AI Companion",
      icon: "🤖",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "knowledge",
      title: "Knowledge Base",
      icon: "📚",
      color: "from-green-500 to-green-600",
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: "📈",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: "settings",
      title: "Settings",
      icon: "⚙️",
      color: "from-gray-500 to-gray-600",
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
                    alt="SaintSal Logo"
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Welcome to SaintSal™ Command Center
                  </h1>
                  <p className="text-gray-300">
                    Your divine intelligence dashboard is ready
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-4">
                  <div className="text-2xl mb-2">🧠</div>
                  <h3 className="font-bold text-white mb-1">Emotional Sync</h3>
                  <p className="text-gray-400 text-sm">
                    AI adapts to your mood and style
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-4">
                  <div className="text-2xl mb-2">📑</div>
                  <h3 className="font-bold text-white mb-1">
                    Knowledge Capsules
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Save and share AI interactions
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-4">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-bold text-white mb-1">Boss Mode</h3>
                  <p className="text-gray-400 text-sm">
                    Escalate to divine-level support
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.a
                href="/chat"
                className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl p-6 text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold mb-2">Start Chat</h3>
                <p className="text-sm opacity-90">Begin AI conversation</p>
              </motion.a>

              <motion.div
                onClick={() => setActiveSection("knowledge")}
                className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl p-6 text-white transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold mb-2">Knowledge Base</h3>
                <p className="text-sm opacity-90">Access saved capsules</p>
              </motion.div>

              <motion.div
                onClick={() => setActiveSection("analytics")}
                className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl p-6 text-white transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-bold mb-2">Analytics</h3>
                <p className="text-sm opacity-90">Usage insights</p>
              </motion.div>

              <motion.div
                onClick={() => setShowBossPanel(true)}
                className="bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-xl p-6 text-black transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">👑</div>
                <h3 className="font-bold mb-2">Boss Mode</h3>
                <p className="text-sm opacity-90">Divine intelligence</p>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-blue-400">💬</span>
                  <div className="flex-1">
                    <p className="text-white text-sm">Chat session completed</p>
                    <p className="text-gray-400 text-xs">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-purple-400">📑</span>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      Knowledge capsule saved
                    </p>
                    <p className="text-gray-400 text-xs">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                  <span className="text-yellow-400">🚀</span>
                  <div className="flex-1">
                    <p className="text-white text-sm">Boss mode activated</p>
                    <p className="text-gray-400 text-xs">3 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "knowledge":
        return (
          <div className="min-h-screen">
            <BackgroundGallery />
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Analytics Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-xl font-bold text-white mb-2">128</h3>
                <p className="text-blue-400">AI Interactions</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">📑</div>
                <h3 className="text-xl font-bold text-white mb-2">24</h3>
                <p className="text-purple-400">Knowledge Capsules</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">96%</h3>
                <p className="text-yellow-400">Satisfaction Score</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                HACP™ Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">
                      Emotional Sync Accuracy
                    </span>
                    <span className="text-green-400">94%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-green-400 rounded-full w-[94%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Intent Recognition</span>
                    <span className="text-blue-400">87%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-blue-400 rounded-full w-[87%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Response Quality</span>
                    <span className="text-purple-400">92%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div className="h-2 bg-purple-400 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400">
              This section is being enhanced with divine intelligence
            </p>
          </div>
        );
    }
  };

  return (
    <MainLayout showSidebar={true}>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative">
        {/* Subtle Workspace Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full opacity-15"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F93507a0b9c5f453da841403952668682?format=webp&width=800)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />
        </div>
        {/* Dashboard Header */}
        <div className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                SaintSal™ Dashboard
              </h1>
              <p className="text-gray-400">
                Divine Intelligence Command Center
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-1">
                <span className="text-green-400 text-sm">🟢 HACP™ Online</span>
              </div>

              <button
                onClick={() => setShowBossPanel(true)}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-lg transition-all"
              >
                👑 Boss Mode
              </button>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {dashboardSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? `bg-gradient-to-r ${section.color} text-white`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">{renderSection()}</div>

        {/* SaintSal Boss Panel */}
        <SaintSalBossPanel
          isVisible={showBossPanel}
          onToggle={() => setShowBossPanel(!showBossPanel)}
          currentInput={currentInput}
          messages={[]}
        />
      </div>
    </MainLayout>
  );
}
