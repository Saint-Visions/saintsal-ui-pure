"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarNav from "../../components/saintsal/SidebarNav";

export default function ChatPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("");
  const [activeAI, setActiveAI] = useState("dual"); // dual, gpt4, azure

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const conversations = [
    {
      type: "user",
      message:
        "Analyze our Q4 performance and recommend strategic adjustments for market expansion",
      time: "14:35",
    },
    {
      type: "ai",
      message:
        "⚡ **Dual AI Analysis Complete**\n\nQ4 Performance Overview:\n• Revenue: +127% YoY growth\n• Market share: Expanded 23% in target demographics\n• Customer acquisition: 2,847 new clients\n\n**Strategic Recommendations:**\n\n1. **Geographic Expansion** (+34% potential)\n   - Southeast markets showing 67% demand increase\n   - Recommend Q1 pilot program\n\n2. **Product Diversification** (+28% potential)\n   - AI consulting services high-demand\n   - White-label solutions opportunity\n\n3. **Partnership Strategy** (+41% potential)\n   - 15 potential strategic alliances identified\n   - GoHighLevel integration expansion\n\n**Next Actions:**\n✅ CRM updated with 247 qualified expansion leads\n✅ Market research data compiled\n✅ ROI projections generated\n\nReady to execute any of these strategies. Which would you like to prioritize?",
      time: "14:36",
      engines: ["GPT-4o", "Azure AI"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f14] text-white overflow-x-hidden relative">
      {/* Sidebar Navigation */}
      <SidebarNav />

      {/* Floating Gold Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#FFD700] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-80 transition-all duration-300">
        <div className="relative h-screen flex flex-col">
          {/* Professional AI Background */}
          <div className="fixed inset-0 z-0">
            {/* Base Neural Network/AI Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F1058c6bc3c2c44829d2b5c1680ff6d39?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.25) contrast(1.4) sepia(20%)",
              }}
            />

            {/* Subtle AI Circuit Pattern */}
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 10v10M30 40v10M10 30h10M40 30h10M20 20l7 7M33 33l7 7M40 20l-7 7M27 33l-7 7'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundAttachment: "fixed",
              }}
            />

            {/* Cookin Knowledge AI Watermark */}
            <div
              className="absolute inset-0 opacity-4"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4bd0a5e2c3064329987dec9cf3eba462?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "15%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(200%) brightness(0.3)",
              }}
            />

            {/* AI Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(145deg, 
                  rgba(10, 15, 20, 0.9) 0%, 
                  rgba(10, 15, 20, 0.95) 100%)`,
              }}
            />
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 p-6 border-b border-white/10 bg-white/3 backdrop-blur-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                  alt="SAINTSAL AI"
                  className="w-10 h-10 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.4))",
                  }}
                />
                <div>
                  <h1
                    className="text-2xl font-light text-white tracking-wide"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    AI Companion
                  </h1>
                  <p className="text-white/60 text-sm">
                    Dual Intelligence • Strategic Execution
                  </p>
                </div>
              </div>

              {/* AI Engine Selector */}
              <div className="flex items-center space-x-2">
                {[
                  { key: "dual", label: "Dual AI", color: "bg-[#FFD700]" },
                  { key: "gpt4", label: "GPT-4o", color: "bg-blue-500" },
                  { key: "azure", label: "Azure", color: "bg-purple-500" },
                ].map((engine) => (
                  <button
                    key={engine.key}
                    onClick={() => setActiveAI(engine.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeAI === engine.key
                        ? `${engine.color} text-black`
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {engine.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat Area */}
          <div className="relative z-20 flex-1 overflow-hidden flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {conversations.map((conv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex ${conv.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {conv.type === "user" ? (
                    <div className="max-w-2xl">
                      <div className="bg-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            U
                          </div>
                          <div className="flex-1">
                            <p className="text-white leading-relaxed">
                              {conv.message}
                            </p>
                            <div className="text-white/50 text-xs mt-2">
                              {conv.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-4xl">
                      <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 backdrop-blur-sm rounded-xl p-6 border border-[#FFD700]/20">
                        <div className="flex items-start space-x-4">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                            alt="SAINTSAL AI"
                            className="w-8 h-8 object-contain mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-[#FFD700] font-medium">
                                SAINTSAL™ AI
                              </span>
                              {conv.engines && (
                                <div className="flex space-x-1">
                                  {conv.engines.map((engine, i) => (
                                    <span
                                      key={i}
                                      className="text-xs bg-white/10 px-2 py-1 rounded text-white/70"
                                    >
                                      {engine}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="text-white leading-relaxed whitespace-pre-line">
                              {conv.message}
                            </div>
                            <div className="text-[#FFD700]/70 text-xs mt-3">
                              {conv.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 border-t border-white/10 bg-white/3 backdrop-blur-lg"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-end space-x-4">
                  <div className="flex-1">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your strategic command or question..."
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-[#FFD700]/50 transition-all duration-200"
                      rows={3}
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    />
                  </div>
                  <button className="bg-[#FFD700] hover:bg-[#FFA500] text-black px-6 py-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
                    <span>Execute</span>
                    <span className="text-lg">⚡</span>
                  </button>
                </div>

                {/* Quick Commands */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Analyze market trends",
                    "Generate CRM report",
                    "Strategic recommendations",
                    "Content creation brief",
                    "Performance metrics",
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setMessage(suggestion)}
                      className="bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white/80 transition-all duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Features Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-4 top-24 w-64 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hidden xl:block z-30"
          >
            <h3 className="text-lg font-medium text-white mb-4">
              AI Capabilities
            </h3>
            <div className="space-y-3">
              {[
                { icon: "🧠", title: "Strategic Analysis", active: true },
                { icon: "📊", title: "Data Processing", active: true },
                { icon: "🎯", title: "CRM Integration", active: true },
                { icon: "📝", title: "Content Generation", active: false },
                { icon: "📈", title: "Performance Tracking", active: true },
              ].map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-lg">{capability.icon}</span>
                  <span className="text-white/80 text-sm flex-1">
                    {capability.title}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      capability.active ? "bg-emerald-400" : "bg-white/30"
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
