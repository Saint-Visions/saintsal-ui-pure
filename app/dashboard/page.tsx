"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircuitBG from "../../components/saintsal/CircuitBG";
import NeonButton from "../../components/saintsal/NeonButton";

export default function SaintSalDashboard() {
  const [activeTab, setActiveTab] = useState("files");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "system",
      content:
        "SaintSal™ divine intelligence online. How may I empower your kingdom today?",
      timestamp: Date.now(),
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [activeProject, setActiveProject] = useState("SaintVisionAI");
  const [userTier, setUserTier] = useState("Pro");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      type: "user",
      content: currentMessage,
      timestamp: Date.now(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai",
        content:
          "Divine wisdom processing your request. Your empire's strategic direction is being calculated with precision and faith. 🙏",
        timestamp: Date.now(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const sidebarTabs = [
    { id: "files", label: "Files", icon: "📁" },
    { id: "tools", label: "Tools", icon: "🛠️" },
    { id: "projects", label: "Projects", icon: "🚀" },
  ];

  const projects = [
    { name: "SaintVisionAI", status: "active", color: "#FFD700" },
    { name: "PartnerTech", status: "sync", color: "#60A5FA" },
    { name: "Athena.ai", status: "dev", color: "#10B981" },
    { name: "SVG Ops", status: "ready", color: "#F59E0B" },
  ];

  const tools = [
    { name: "CRM Sync", icon: "📊", status: "connected" },
    { name: "Stripe Portal", icon: "💳", status: "active" },
    { name: "Email Sender", icon: "📧", status: "ready" },
    { name: "Webhook Test", icon: "🔗", status: "idle" },
    { name: "Twilio SMS", icon: "📱", status: "connected" },
  ];

  return (
    <div className="h-screen bg-[#10161C] text-white font-jetbrains flex overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <CircuitBG intensity="medium" animated={true} color="gold" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fe4c69c537822414682bb42c1aeda11b3?format=webp&width=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 workstation-grid opacity-20" />
      </div>

      {/* Top Command Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-[#10161C]/90 backdrop-blur-sm border-b border-[#FFD700]/20 p-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Project */}
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
              alt="SaintSal™"
              className="w-8 h-8 object-contain logo-glow"
            />
            <div className="text-saintsal-gold font-bold text-lg tracking-wider">
              WAR ROOM
            </div>
            <div className="text-gray-500">•</div>
            <select
              value={activeProject}
              onChange={(e) => setActiveProject(e.target.value)}
              className="bg-[#1a1f28] border border-[#FFD700]/30 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-[#FFD700]/60"
            >
              {projects.map((project) => (
                <option key={project.name} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>

          {/* Right: Tier + Sync Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-divine-pulse" />
              <span className="text-emerald-400 text-sm font-mono">
                SYNC LIVE
              </span>
            </div>
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#10161C] px-3 py-1 rounded-lg font-bold text-sm">
              {userTier}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-[#1a1f28] border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all"
            >
              <span className="text-[#FFD700]">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 w-80 bg-[#10161C]/95 backdrop-blur-sm border-r border-[#FFD700]/20 pt-20"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-[#FFD700]/10">
              {sidebarTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#FFD700]/10 text-[#FFD700] border-b-2 border-[#FFD700]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeTab === "files" && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-[#FFD700]/30 rounded-lg p-8 text-center hover:border-[#FFD700]/60 transition-all cursor-pointer">
                    <div className="text-3xl mb-2">📁</div>
                    <p className="text-gray-400 text-sm">
                      Drag & drop files here
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      or click to browse
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-[#FFD700] mb-2">
                      Recent Files
                    </h4>
                    {[
                      "brand-assets.zip",
                      "proposal-draft.pdf",
                      "ai-training-data.json",
                    ].map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-[#1a1f28] rounded-lg hover:bg-[#2a2f38] transition-all cursor-pointer"
                      >
                        <span className="text-blue-400">📄</span>
                        <span className="text-sm text-white flex-1">
                          {file}
                        </span>
                        <span className="text-xs text-gray-400">2MB</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "tools" && (
                <div className="space-y-3">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-[#1a1f28] rounded-lg hover:bg-[#2a2f38] transition-all cursor-pointer box-accent-glow"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{tool.icon}</span>
                        <span className="text-sm font-medium text-white">
                          {tool.name}
                        </span>
                      </div>
                      <div
                        className={`text-xs px-2 py-1 rounded-full ${
                          tool.status === "connected"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : tool.status === "active"
                              ? "bg-[#FFD700]/20 text-[#FFD700]"
                              : tool.status === "ready"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {tool.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-3">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-[#1a1f28] rounded-lg hover:bg-[#2a2f38] transition-all cursor-pointer border-l-2"
                      style={{ borderLeftColor: project.color }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">
                          {project.name}
                        </span>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1 capitalize">
                        {project.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col pt-20 relative z-10">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start space-x-3 ${
                message.type === "user"
                  ? "flex-row-reverse space-x-reverse"
                  : ""
              }`}
            >
              {/* Avatar */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  message.type === "ai"
                    ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500]"
                    : message.type === "user"
                      ? "bg-blue-600"
                      : "bg-gray-600"
                }`}
              >
                {message.type === "ai" ? (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                    alt="SaintSal"
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-white text-sm">
                    {message.type === "user" ? "👤" : "⚙️"}
                  </span>
                )}
              </div>

              {/* Message */}
              <div
                className={`flex-1 max-w-2xl ${
                  message.type === "user" ? "text-right" : ""
                }`}
              >
                <div
                  className={`inline-block p-4 rounded-xl ${
                    message.type === "ai"
                      ? "bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20"
                      : message.type === "user"
                        ? "bg-blue-600/20 border border-blue-500/30"
                        : "bg-gray-600/20 border border-gray-500/30"
                  }`}
                >
                  <p className="text-white leading-relaxed">
                    {message.content}
                  </p>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </div>
              </div>
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-[#FFD700]/20 p-6 bg-[#10161C]/90 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                ref={messageInputRef}
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Speak your divine command..."
                className="w-full bg-[#1a1f28] border border-[#FFD700]/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700]/60 pr-12"
              />
              <button
                onClick={() => setIsVoiceMode(!isVoiceMode)}
                className={`absolute right-3 top-3 p-1 rounded-lg transition-all ${
                  isVoiceMode
                    ? "bg-[#FFD700] text-[#10161C]"
                    : "text-[#FFD700] hover:bg-[#FFD700]/10"
                }`}
              >
                🎙️
              </button>
            </div>

            <NeonButton
              variant="divine"
              onClick={sendMessage}
              disabled={!currentMessage.trim()}
            >
              Execute
            </NeonButton>
          </div>

          <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
            <span>
              Voice Mode: {isVoiceMode ? "ON" : "OFF"} • Tier: {userTier}
            </span>
            <span>⚡ Divine Intelligence Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
