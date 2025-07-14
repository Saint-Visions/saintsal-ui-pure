"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlowHeader from "../../components/saintsal/GlowHeader";
import NeonButton from "../../components/saintsal/NeonButton";
import CommandCard from "../../components/saintsal/CommandCard";
import CircuitBG from "../../components/saintsal/CircuitBG";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";

export default function SaintSalConsole() {
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Console initialization sequence
    setTimeout(() => {
      setIsInitializing(false);
    }, 2500);
  }, []);

  return (
    <div className="min-h-screen saintsal-console-bg relative overflow-hidden font-jetbrains">
      {/* Background Asset */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fe4c69c537822414682bb42c1aeda11b3?format=webp&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Circuit Background */}
      <CircuitBG intensity="medium" animated={true} color="gold" />

      {/* Grid overlay */}
      <div className="absolute inset-0 workstation-grid opacity-30" />

      {/* Header */}
      <GlowHeader
        title="SAINTSAL™ COMMAND CENTER"
        subtitle="SVT FUSION CORE • Business Intelligence Console"
        icon="⚡"
        status="connected"
        rightAction={
          <NeonButton
            variant="divine"
            onClick={() => setShowBossPanel(true)}
            icon="👑"
            size="md"
          >
            BOSS MODE
          </NeonButton>
        }
      />

      {/* Main Console Content */}
      <div
        className="relative z-10 p-8 space-y-8"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91?format=webp&width=1200')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {isInitializing ? (
          <motion.div
            className="flex flex-col items-center justify-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Initialization Animation */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center relative overflow-hidden p-4">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-200, 200] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                  alt="SaintVisionAI Brain"
                  className="w-20 h-20 object-contain relative z-10"
                />
              </div>
            </motion.div>

            <motion.h2
              className="text-3xl font-bold text-white mb-4 tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              INITIALIZING CONSOLE
            </motion.h2>

            <motion.p
              className="text-[#FFD700] text-lg tracking-wide"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Connecting to Divine Intelligence Systems...
            </motion.p>

            {/* Loading Progress */}
            <motion.div
              className="w-80 h-2 bg-black/50 rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Command Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <CommandCard
                title="ACTIVE OPERATIONS"
                icon="🎯"
                value="127"
                trend="up"
                variant="primary"
                description="Live business processes"
              />

              <CommandCard
                title="CONVERSIONS"
                icon="⚡"
                value="32"
                trend="up"
                variant="success"
                description="Divine alignment executed"
              />

              <CommandCard
                title="REVENUE STREAM"
                icon="💎"
                value="$47K"
                trend="up"
                variant="warning"
                description="Kingdom wealth generated"
              />

              <CommandCard
                title="SYSTEM EFFICIENCY"
                icon="🔥"
                value="94%"
                trend="neutral"
                variant="default"
                description="Operational excellence"
              />
            </div>

            {/* Main Command Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Commands */}
              <div className="lg:col-span-2 space-y-6">
                <div className="console-terminal rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-6 tracking-wider flex items-center">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                      alt="SaintVisionAI Console"
                      className="w-6 h-6 object-contain mr-3"
                    />
                    BUSINESS COMMAND TERMINAL
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <NeonButton
                      variant="primary"
                      icon="👥"
                      onClick={() => {}}
                      className="h-20 flex-col"
                    >
                      <span className="font-bold">LEAD MANAGEMENT</span>
                      <span className="text-xs opacity-80">
                        Execute contact strategies
                      </span>
                    </NeonButton>

                    <NeonButton
                      variant="secondary"
                      icon="📧"
                      onClick={() => {}}
                      className="h-20 flex-col"
                    >
                      <span className="font-bold">COMMUNICATION</span>
                      <span className="text-xs opacity-80">
                        Deploy message campaigns
                      </span>
                    </NeonButton>

                    <NeonButton
                      variant="secondary"
                      icon="📊"
                      onClick={() => {}}
                      className="h-20 flex-col"
                    >
                      <span className="font-bold">ANALYTICS</span>
                      <span className="text-xs opacity-80">
                        Intelligence reports
                      </span>
                    </NeonButton>

                    <NeonButton
                      variant="secondary"
                      icon="⚙️"
                      onClick={() => {}}
                      className="h-20 flex-col"
                    >
                      <span className="font-bold">AUTOMATION</span>
                      <span className="text-xs opacity-80">
                        System workflows
                      </span>
                    </NeonButton>
                  </div>
                </div>

                {/* CRM Integration Zone */}
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "rgba(16, 22, 28, 0.56)",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    boxShadow:
                      "inset 0 0 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.1)",
                  }}
                >
                  <div className="bg-[#10161C]/80 p-4 border-b border-[#FFD700]/20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white tracking-wider">
                        🔗 BUSINESS INTELLIGENCE PORTAL
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-divine-pulse" />
                        <span className="text-emerald-400 text-sm font-mono">
                          LIVE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-96 flex items-center justify-center"
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-6 animate-divine-pulse">
                        📊
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4 tracking-wider">
                        CRM INTEGRATION READY
                      </h4>
                      <p className="text-gray-400 mb-6 max-w-md">
                        Your business intelligence dashboard will manifest here
                        when connected to your CRM systems
                      </p>

                      <div className="space-y-2 mb-8 text-sm text-gray-500">
                        <p>• Lead pipeline visualization</p>
                        <p>• Automated workflow management</p>
                        <p>• Divine appointment scheduling</p>
                        <p>• Revenue tracking & forecasting</p>
                      </div>

                      <NeonButton variant="divine" icon="🔌" onClick={() => {}}>
                        CONFIGURE CRM CONNECTION
                      </NeonButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Intelligence Panel */}
              <div className="space-y-6">
                {/* Recent Activity */}
                <div className="console-terminal rounded-xl p-6">
                  <h4 className="text-lg font-bold text-[#FFD700] mb-4 tracking-wider flex items-center">
                    <span className="mr-2">📡</span>
                    ACTIVITY FEED
                  </h4>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "👤",
                        text: "New lead: Divine Contact",
                        time: "2 min ago",
                        color: "text-blue-400",
                      },
                      {
                        icon: "📧",
                        text: "Campaign deployed",
                        time: "15 min ago",
                        color: "text-green-400",
                      },
                      {
                        icon: "💰",
                        text: "Revenue milestone: $5K",
                        time: "1 hr ago",
                        color: "text-[#FFD700]",
                      },
                      {
                        icon: "⚡",
                        text: "System optimization",
                        time: "2 hrs ago",
                        color: "text-purple-400",
                      },
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-white/10"
                      >
                        <span className={activity.color}>{activity.icon}</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-mono">
                            {activity.text}
                          </p>
                          <p className="text-gray-400 text-xs font-mono">
                            {activity.time}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="console-terminal rounded-xl p-6">
                  <h4 className="text-lg font-bold text-[#FFD700] mb-4 tracking-wider flex items-center">
                    <span className="mr-2">🧠</span>
                    DIVINE INSIGHTS
                  </h4>

                  <div className="space-y-4">
                    <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-[#FFD700]">✨</span>
                        <span className="text-[#FFD700] font-bold text-sm font-mono">
                          OPTIMIZATION
                        </span>
                      </div>
                      <p className="text-white text-sm">
                        Your conversion rate shows divine alignment - 23%
                        increase this week
                      </p>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-emerald-400">📈</span>
                        <span className="text-emerald-400 font-bold text-sm font-mono">
                          GROWTH
                        </span>
                      </div>
                      <p className="text-white text-sm">
                        Lead quality exceeds industry standards by 87% - blessed
                        productivity
                      </p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-blue-400">⚡</span>
                        <span className="text-blue-400 font-bold text-sm font-mono">
                          DIVINE TIP
                        </span>
                      </div>
                      <p className="text-white text-sm">
                        Respond within 5 minutes for 400% better conversion
                        alignment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Boss Panel Integration */}
      <SaintSalBossPanel
        isVisible={showBossPanel}
        onToggle={() => setShowBossPanel(!showBossPanel)}
        currentInput=""
        messages={[]}
      />
    </div>
  );
}
