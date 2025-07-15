"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarNav from "../../components/saintsal/SidebarNav";

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePanel, setActivePanel] = useState("overview");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f14] text-white overflow-x-hidden relative">
      {/* Sidebar Navigation */}
      <SidebarNav />

      {/* Floating Gold Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#FFD700] rounded-full opacity-40 animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-80 transition-all duration-300">
        <div className="relative min-h-screen">
          {/* Professional Warroom Background */}
          <div className="fixed inset-0 z-0">
            {/* Base Professional Command Center Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fbefa6adf688e4c3a912515e059b38e96?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.3) contrast(1.3) sepia(15%)",
              }}
            />

            {/* Subtle Circuit Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M20 20l-8-8h16l-8 8zm0 0l8 8H12l8-8z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundAttachment: "fixed",
              }}
            />

            {/* Saint Logo Watermark */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0894db8532664c4eab068c93b2d098dd?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "20%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(200%) brightness(0.4)",
              }}
            />

            {/* Professional Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(10, 15, 20, 0.85) 0%, 
                  rgba(10, 15, 20, 0.95) 100%)`,
              }}
            />
          </div>

          {/* Dashboard Content */}
          <div className="relative z-20 p-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                  alt="SAINTSAL Command"
                  className="w-12 h-12 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.4))",
                  }}
                />
                <div>
                  <h1
                    className="text-3xl font-light text-white tracking-wide"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Command Center
                  </h1>
                  <p className="text-white/60 text-sm">
                    Professional Warroom • Active Session
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-sm font-mono">
                    LIVE
                  </span>
                </div>
                <div className="text-white/60 text-sm">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-4 mb-8"
            >
              {[
                {
                  icon: "🧠",
                  title: "AI Companion",
                  desc: "Dual AI Chat",
                  href: "/chat",
                  color: "from-blue-600/20 to-blue-700/20",
                  border: "border-blue-500/30",
                },
                {
                  icon: "📊",
                  title: "CRM Suite",
                  desc: "GoHighLevel",
                  href: "/crm",
                  color: "from-green-600/20 to-green-700/20",
                  border: "border-green-500/30",
                },
                {
                  icon: "🎨",
                  title: "Content Lab",
                  desc: "AI Creation",
                  href: "/create",
                  color: "from-purple-600/20 to-purple-700/20",
                  border: "border-purple-500/30",
                },
                {
                  icon: "📈",
                  title: "Analytics",
                  desc: "Performance",
                  href: "/analytics",
                  color: "from-yellow-600/20 to-yellow-700/20",
                  border: "border-yellow-500/30",
                },
              ].map((action, index) => (
                <Link key={index} href={action.href}>
                  <div
                    className={`bg-gradient-to-br ${action.color} backdrop-blur-lg rounded-xl p-6 border ${action.border} hover:bg-white/10 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    <h3 className="font-medium text-white mb-1">
                      {action.title}
                    </h3>
                    <p className="text-white/60 text-sm">{action.desc}</p>
                  </div>
                </Link>
              ))}
            </motion.div>

            {/* Main Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* AI Status Panel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium text-white">
                    AI Command Status
                  </h3>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F1058c6bc3c2c44829d2b5c1680ff6d39?format=webp&width=800"
                    alt="SAINTSAL Brain"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-300 font-medium">
                        GPT-4o Engine
                      </span>
                      <span className="text-emerald-400 text-sm">ACTIVE</span>
                    </div>
                    <div className="text-2xl font-light text-white mb-1">
                      97.3%
                    </div>
                    <div className="text-white/60 text-sm">
                      Performance Optimal
                    </div>
                  </div>

                  <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-medium">
                        Azure AI
                      </span>
                      <span className="text-emerald-400 text-sm">ACTIVE</span>
                    </div>
                    <div className="text-2xl font-light text-white mb-1">
                      99.1%
                    </div>
                    <div className="text-white/60 text-sm">
                      Cognitive Services
                    </div>
                  </div>
                </div>

                <div className="bg-[#0a0f14]/50 rounded-lg p-4 border border-[#FFD700]/20">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#FFD700]/20 rounded-lg flex items-center justify-center text-[#FFD700] text-sm font-bold mt-1">
                      AI
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 mb-2">
                        <strong>Latest Command Execution:</strong>
                      </div>
                      <div className="text-white/70 text-sm leading-relaxed">
                        Processed 247 CRM leads, generated 15 strategic
                        insights, and updated client portfolios. All systems
                        operating at peak efficiency.
                      </div>
                      <div className="text-[#FFD700]/80 text-xs mt-2">
                        Completed 2 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Performance Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Today's Performance
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        label: "AI Queries",
                        value: "1,247",
                        change: "+23%",
                        color: "text-blue-400",
                      },
                      {
                        label: "CRM Updates",
                        value: "89",
                        change: "+15%",
                        color: "text-green-400",
                      },
                      {
                        label: "Content Generated",
                        value: "34",
                        change: "+41%",
                        color: "text-purple-400",
                      },
                      {
                        label: "Efficiency Score",
                        value: "94.7%",
                        change: "+2.1%",
                        color: "text-[#FFD700]",
                      },
                    ].map((metric, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <div className="text-white/80 text-sm">
                            {metric.label}
                          </div>
                          <div className="text-white font-medium">
                            {metric.value}
                          </div>
                        </div>
                        <div className={`${metric.color} text-sm font-medium`}>
                          {metric.change}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Quick Commands
                  </h3>
                  <div className="space-y-2">
                    {[
                      { cmd: "Generate Report", icon: "📊" },
                      { cmd: "Sync CRM Data", icon: "🔄" },
                      { cmd: "AI Analysis", icon: "🧠" },
                      { cmd: "Export Results", icon: "📤" },
                    ].map((command, index) => (
                      <button
                        key={index}
                        className="w-full text-left bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-all duration-200 border border-white/10 hover:border-[#FFD700]/30"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{command.icon}</span>
                          <span className="text-white/80 text-sm">
                            {command.cmd}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-medium text-white mb-6">
                Command History
              </h3>
              <div className="space-y-4">
                {[
                  {
                    time: "14:32",
                    action: "CRM Lead Analysis Completed",
                    details:
                      "Processed 127 new leads, 23 high-priority identified",
                    type: "success",
                  },
                  {
                    time: "14:18",
                    action: "AI Content Generation",
                    details: "Created 5 marketing pieces, 3 client proposals",
                    type: "info",
                  },
                  {
                    time: "13:45",
                    action: "Strategic Intelligence Report",
                    details: "Market analysis complete, insights delivered",
                    type: "success",
                  },
                  {
                    time: "13:22",
                    action: "Dual AI Sync Operation",
                    details: "GPT-4o + Azure coordination successful",
                    type: "info",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/3 rounded-lg border border-white/5"
                  >
                    <div className="text-white/60 text-sm font-mono min-w-0 flex-shrink-0">
                      {activity.time}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium mb-1">
                        {activity.action}
                      </div>
                      <div className="text-white/70 text-sm">
                        {activity.details}
                      </div>
                    </div>
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                        activity.type === "success"
                          ? "bg-emerald-400"
                          : "bg-blue-400"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
