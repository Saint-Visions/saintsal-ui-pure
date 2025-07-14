"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CircuitBG from "../../components/saintsal/CircuitBG";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";

export default function SaintSalPremiumConsole() {
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInitializing(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-[#10161C] text-white font-mono overflow-hidden relative">
      {/* Premium Background Layer */}
      <div className="absolute inset-0">
        <CircuitBG intensity="high" animated={true} color="gold" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91?format=webp&width=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#10161C]/90 via-[#10161C]/95 to-[#10161C]/90" />
      </div>

      {/* Executive Header */}
      <div className="relative z-20 bg-[#10161C]/95 backdrop-blur-2xl border-b border-[#FFD700]/30">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Brand Identity */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#FFD700]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#FFD700] via-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#FFD700]/30">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                    alt="SaintSal™"
                    className="w-9 h-9 object-contain"
                  />
                </div>
              </div>

              <div>
                <h1 className="text-4xl font-black text-white tracking-wider mb-1">
                  SAINTSAL™
                </h1>
                <p className="text-sm text-gray-400 tracking-[0.2em] font-light">
                  ENTERPRISE AI OPERATING SYSTEM
                </p>
              </div>
            </div>

            {/* System Status & Actions */}
            <div className="flex items-center space-x-8">
              {/* Live Status */}
              <div className="flex items-center space-x-3 bg-black/40 backdrop-blur-sm rounded-2xl px-6 py-3 border border-emerald-500/30">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-emerald-400 font-bold tracking-wide text-sm">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Executive Access */}
              <motion.button
                onClick={() => setShowBossPanel(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FFA500] text-[#10161C] px-8 py-4 rounded-2xl font-black tracking-wide shadow-2xl shadow-[#FFD700]/40 hover:shadow-[#FFD700]/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">👑</span>
                  <span>EXECUTIVE</span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Console */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 space-y-12">
        {isInitializing ? (
          <motion.div
            className="flex flex-col items-center justify-center py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="relative mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="absolute inset-0 bg-[#FFD700]/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-2xl shadow-[#FFD700]/50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                  alt="SaintSal™"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>

            <h2 className="text-4xl font-black text-white mb-6 tracking-[0.1em]">
              INITIALIZING CONSOLE
            </h2>
            <p className="text-[#FFD700] text-xl tracking-wide mb-8">
              Connecting to divine intelligence systems...
            </p>

            <motion.div
              className="w-96 h-1 bg-black/50 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Executive Metrics */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 tracking-[0.1em]">
                OPERATIONAL OVERVIEW
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    label: "OPERATIONS",
                    value: "127",
                    delta: "+12%",
                    status: "optimal",
                  },
                  {
                    label: "CONVERSIONS",
                    value: "32",
                    delta: "+23%",
                    status: "growing",
                  },
                  {
                    label: "REVENUE",
                    value: "$47K",
                    delta: "+8%",
                    status: "strong",
                  },
                  {
                    label: "EFFICIENCY",
                    value: "94%",
                    delta: "Peak",
                    status: "divine",
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-[#10161C]/60 backdrop-blur-xl border border-[#FFD700]/20 rounded-3xl p-8 hover:border-[#FFD700]/40 hover:bg-[#10161C]/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#FFD700]/10">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-gray-400 text-sm tracking-[0.15em] font-medium">
                          {metric.label}
                        </span>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                            metric.status === "optimal"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : metric.status === "growing"
                                ? "bg-blue-500/20 text-blue-400"
                                : metric.status === "strong"
                                  ? "bg-[#FFD700]/20 text-[#FFD700]"
                                  : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {metric.delta}
                        </div>
                      </div>

                      <div className="text-4xl font-black text-white mb-2 tracking-wide">
                        {metric.value}
                      </div>

                      <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Command Interface */}
            <section>
              <h2 className="text-2xl font-black text-white mb-8 tracking-[0.1em]">
                COMMAND INTERFACE
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Primary Commands */}
                <div className="bg-[#10161C]/60 backdrop-blur-xl border border-[#FFD700]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#FFD700]/5">
                  <div className="bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-[#FFD700]/10 border-b border-[#FFD700]/20 px-8 py-6">
                    <h3 className="text-xl font-black text-white tracking-[0.1em]">
                      EXECUTIVE CONTROLS
                    </h3>
                    <p className="text-sm text-gray-400 tracking-wide">
                      Primary operations management
                    </p>
                  </div>

                  <div className="p-8 grid grid-cols-2 gap-6">
                    {[
                      {
                        title: "INTELLIGENCE",
                        subtitle: "Lead Management",
                        icon: "🧠",
                        accent: "emerald",
                      },
                      {
                        title: "COMMUNICATIONS",
                        subtitle: "Message Systems",
                        icon: "📡",
                        accent: "blue",
                      },
                      {
                        title: "ANALYTICS",
                        subtitle: "Business Intelligence",
                        icon: "📊",
                        accent: "purple",
                      },
                      {
                        title: "AUTOMATION",
                        subtitle: "System Workflows",
                        icon: "⚙️",
                        accent: "gold",
                      },
                    ].map((cmd, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group bg-gradient-to-br ${
                          cmd.accent === "emerald"
                            ? "from-emerald-500/10 to-emerald-600/10 border-emerald-500/30 hover:border-emerald-400/50"
                            : cmd.accent === "blue"
                              ? "from-blue-500/10 to-blue-600/10 border-blue-500/30 hover:border-blue-400/50"
                              : cmd.accent === "purple"
                                ? "from-purple-500/10 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50"
                                : "from-[#FFD700]/10 to-[#FFA500]/10 border-[#FFD700]/30 hover:border-[#FFD700]/50"
                        } border rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:shadow-${cmd.accent}-500/10`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {cmd.icon}
                          </span>
                          <div
                            className={`w-2 h-2 ${
                              cmd.accent === "emerald"
                                ? "bg-emerald-400"
                                : cmd.accent === "blue"
                                  ? "bg-blue-400"
                                  : cmd.accent === "purple"
                                    ? "bg-purple-400"
                                    : "bg-[#FFD700]"
                            } rounded-full animate-pulse group-hover:animate-none group-hover:bg-white transition-all duration-300`}
                          />
                        </div>

                        <h4 className="font-black text-white text-base mb-2 tracking-wide">
                          {cmd.title}
                        </h4>
                        <p className="text-sm text-gray-400 tracking-wide">
                          {cmd.subtitle}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* System Integration */}
                <div className="bg-[#10161C]/60 backdrop-blur-xl border border-[#FFD700]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#FFD700]/5">
                  <div className="bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-[#FFD700]/10 border-b border-[#FFD700]/20 px-8 py-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-black text-white tracking-[0.1em]">
                          SYSTEM INTEGRATION
                        </h3>
                        <p className="text-sm text-gray-400 tracking-wide">
                          Enterprise connections active
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 text-sm font-bold tracking-wide">
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 h-96 flex items-center justify-center bg-gradient-to-br from-[#10161C]/40 to-[#0a0f14]/40">
                    <div className="text-center">
                      <div className="text-6xl mb-8 animate-pulse">🌐</div>
                      <h4 className="text-2xl font-black text-white mb-4 tracking-[0.1em]">
                        INTEGRATION READY
                      </h4>
                      <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                        Your enterprise systems will integrate seamlessly here
                        with divine precision and unwavering reliability.
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#10161C] px-8 py-4 rounded-2xl font-black tracking-wide shadow-lg shadow-[#FFD700]/30 hover:shadow-[#FFD700]/50 transition-all duration-300"
                      >
                        CONFIGURE SYSTEMS
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </div>

      {/* Executive Panel */}
      <SaintSalBossPanel
        isVisible={showBossPanel}
        onToggle={() => setShowBossPanel(!showBossPanel)}
        currentInput=""
        messages={[]}
      />
    </div>
  );
}
