"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CircuitBG from "../components/saintsal/CircuitBG";
import SidebarNav from "../components/saintsal/SidebarNav";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#10161C] text-white overflow-x-hidden">
      {/* Sidebar Navigation */}
      <SidebarNav />

      {/* Main Content Area - offset for sidebar */}
      <div className="ml-0 md:ml-80 transition-all duration-300">
        <div className="relative min-h-screen">
          {/* Circuit Animation Layer */}
          <CircuitBG intensity="high" animated={true} color="gold" />

          {/* Multiple Blended Background Layers */}
          <div className="fixed inset-0 z-0">
            {/* Primary Wall Street Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}
            />

            {/* Elite Business Atmosphere Overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F5f5e9068c27f4cd7a63b1ffe245a0466?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                mixBlendMode: "overlay",
                filter: "sepia(20%) hue-rotate(40deg) brightness(0.8)",
              }}
            />

            {/* Cookin Knowledge Logo - Static Watermark */}
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "40%",
                backgroundAttachment: "fixed",
                mixBlendMode: "soft-light",
                filter: "sepia(100%) hue-rotate(40deg) saturate(150%)",
              }}
            />
          </div>

          {/* Dark Overlay for readability */}
          <div className="fixed inset-0 z-10 bg-gradient-to-br from-[#10161C]/75 via-[#10161C]/85 to-[#10161C]/90" />

          {/* All Content in One Flowing Container */}
          <div className="relative z-20">
            {/* Hero Content */}
            <div className="flex items-center justify-center min-h-screen text-center px-6 max-w-5xl mx-auto">
              <div className="w-full">
                {/* GOTTA GUY Quote Box */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-[#1a1f28]/90 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#FFD700]/30 max-w-lg mx-auto"
                  style={{
                    boxShadow:
                      "inset 0 0 30px rgba(255, 215, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <p className="text-[#FFD700] text-lg font-medium leading-relaxed">
                    "SaintSal" AI doesn't just answer.
                    <br />
                    It adapts. It empowers. It becomes your...
                    <br />
                    <span
                      className="text-2xl font-black tracking-wider"
                      style={{
                        fontFamily:
                          '"Bebas Neue", "Sora", system-ui, sans-serif',
                        textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      GOTTA GUY™!
                    </span>
                  </p>
                </motion.div>

                {/* SaintSal Brain Logo - Updated with new assets */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#FFD700]/30 rounded-full blur-3xl animate-pulse" />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1703961c02a45f92cc4a097e52a8a7502f3f2633?width=2048"
                      alt="SaintSal™ Circuit Brain"
                      className="relative w-24 h-24 md:w-32 md:h-32 object-contain"
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))",
                      }}
                    />
                  </div>
                  <div className="mt-3">
                    <div
                      className="text-xs text-[#FFD700]/80 font-medium tracking-widest"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      SAINTSAL™
                    </div>
                    <div className="text-xs text-white/60">
                      Cookin' Knowledge
                    </div>
                  </div>
                </motion.div>

                {/* SaintVisionAI™ Title */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="mb-8"
                >
                  <h1
                    className="text-4xl md:text-6xl font-black tracking-[0.2em] text-[#FFD700] mb-6 uppercase"
                    style={{
                      fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                      textShadow:
                        "0 0 30px rgba(255, 215, 0, 0.7), 0 0 60px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    SaintVisionAI™
                  </h1>

                  {/* Main CTA Button */}
                  <Link href="/signup">
                    <button
                      className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-black font-black uppercase rounded-lg px-8 py-4 mb-6 transition-all duration-200 text-lg tracking-wide transform hover:scale-105"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        boxShadow:
                          "0 0 40px rgba(255, 215, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      🔥 Start Cooking
                    </button>
                  </Link>

                  {/* Secondary Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <Link href="/chat">
                      <button
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg px-6 py-3 transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                        style={{
                          boxShadow:
                            "0 0 25px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        ⚡ AI Chat
                      </button>
                    </Link>
                    <Link href="/login">
                      <button
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-lg px-6 py-3 transition-all duration-200 flex items-center gap-2 transform hover:scale-105"
                        style={{
                          boxShadow:
                            "0 0 25px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        🔐 Sign In
                      </button>
                    </Link>
                  </div>

                  {/* Quick Access */}
                  <div className="text-center mb-8">
                    <div className="text-sm text-white/60 mb-2">
                      Quick Access:
                    </div>
                    <div className="flex justify-center gap-4 text-xs">
                      <Link
                        href="/pricing"
                        className="text-orange-400 hover:text-orange-300 transition-colors hover:drop-shadow-lg"
                      >
                        ⚠️ Pricing
                      </Link>
                      <Link
                        href="/setup"
                        className="text-blue-400 hover:text-blue-300 transition-colors hover:drop-shadow-lg"
                      >
                        🛠️ Setup
                      </Link>
                      <Link
                        href="/help"
                        className="text-purple-400 hover:text-purple-300 transition-colors hover:drop-shadow-lg"
                      >
                        ❓ Help
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* What's Inside These Walls - Enhanced Cards */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-12"
                >
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-[#FFD700] text-xl animate-pulse">
                      🗲
                    </span>
                    <h3
                      className="text-xl font-bold text-[#FFD700] tracking-wide"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      What's Inside These Walls
                    </h3>
                  </div>

                  {/* Enhanced Feature Grid - 2x2 */}
                  <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                    {[
                      {
                        title: "Lead Discovery",
                        desc: "AI-powered lookup",
                        color: "bg-gradient-to-br from-blue-600 to-blue-700",
                        icon: "🔍",
                        glow: "rgba(59, 130, 246, 0.4)",
                      },
                      {
                        title: "Referral Network",
                        desc: "Partner tracking",
                        color: "bg-gradient-to-br from-green-600 to-green-700",
                        icon: "🤝",
                        glow: "rgba(34, 197, 94, 0.4)",
                      },
                      {
                        title: "AI Deal Analysis",
                        desc: "GPT-4 insights",
                        color:
                          "bg-gradient-to-br from-purple-600 to-purple-700",
                        icon: "📊",
                        glow: "rgba(147, 51, 234, 0.4)",
                      },
                      {
                        title: "Mobile Export",
                        desc: "iOS/Android apps",
                        color: "bg-gradient-to-br from-red-600 to-red-700",
                        icon: "📱",
                        glow: "rgba(239, 68, 68, 0.4)",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className={`${feature.color} rounded-lg p-4 text-center text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                        style={{
                          boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 20px ${feature.glow}`,
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <div className="text-2xl mb-2 animate-bounce">
                          {feature.icon}
                        </div>
                        <div className="font-bold text-sm mb-1">
                          {feature.title}
                        </div>
                        <div className="text-xs opacity-80">{feature.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Elite AI Sanctuary Badge - Enhanced */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-[#FFD700] animate-pulse">✨</span>
                    <span
                      className="text-[#FFD700] font-bold text-sm tracking-wide"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      Elite AI Sanctuary • Ready for Saints
                    </span>
                    <span className="text-[#FFD700] animate-pulse">✨</span>
                  </div>
                  <div className="text-xs text-white/60 max-w-md mx-auto">
                    Azure Cognitive Services + OpenAI GPT-4o + Premium
                    Infrastructure
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Compact Pricing Section - Enhanced */}
            <div className="py-16 max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2
                  className="text-3xl md:text-5xl font-black text-[#FFD700] mb-6 tracking-wider"
                  style={{
                    fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                    textShadow: "0 0 25px rgba(255, 215, 0, 0.7)",
                  }}
                >
                  PartnerTech AI Execution Tiers
                </h2>
              </motion.div>

              {/* Enhanced Pricing Cards - Vertical Stack */}
              <div className="max-w-sm mx-auto space-y-3">
                {[
                  {
                    name: "Starter Summit",
                    price: "$97",
                    period: "/mo",
                    color: "bg-gradient-to-r from-purple-600 to-purple-700",
                    features: ["GPT-4 Access", "Basic CRM", "Email Support"],
                    glow: "rgba(147, 51, 234, 0.4)",
                  },
                  {
                    name: "Summit Elite",
                    price: "$297",
                    period: "/mo",
                    color: "bg-gradient-to-r from-blue-600 to-blue-700",
                    features: [
                      "Dual AI Engines",
                      "Full CRM",
                      "Priority Support",
                    ],
                    popular: true,
                    glow: "rgba(59, 130, 246, 0.4)",
                  },
                  {
                    name: "Azure Enterprise",
                    price: "$597",
                    period: "/mo",
                    color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
                    features: ["White Label", "API Access", "Custom Training"],
                    glow: "rgba(255, 215, 0, 0.4)",
                  },
                  {
                    name: "Patent Protected",
                    price: "$997",
                    period: "/mo",
                    color: "bg-gradient-to-r from-pink-600 to-pink-700",
                    features: [
                      "Everything",
                      "Patent License",
                      "1-on-1 Training",
                    ],
                    glow: "rgba(236, 72, 153, 0.4)",
                  },
                  {
                    name: "Lead Generation",
                    price: "$197",
                    period: "/mo",
                    color: "bg-gradient-to-r from-green-600 to-green-700",
                    features: ["AI Prospecting", "Lead Export", "CRM Sync"],
                    glow: "rgba(34, 197, 94, 0.4)",
                  },
                ].map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${tier.color} rounded-lg p-4 text-white relative transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                    style={{
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${tier.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <div
                          className="font-bold text-lg"
                          style={{
                            fontFamily: '"Sora", system-ui, sans-serif',
                          }}
                        >
                          {tier.name}
                        </div>
                        <div className="text-xs opacity-80">
                          {tier.features.join(" • ")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black">{tier.price}</div>
                        <div className="text-sm opacity-80">{tier.period}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Get Started Button */}
              <div className="text-center mt-8">
                <Link href="/pricing">
                  <button
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-black font-black uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg transform hover:scale-105"
                    style={{
                      fontFamily: '"Sora", system-ui, sans-serif',
                      boxShadow:
                        "0 0 40px rgba(255, 215, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    🚀 Choose Your Tier
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
