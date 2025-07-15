"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CircuitBG from "../components/saintsal/CircuitBG";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#10161C] text-white overflow-x-hidden">
      {/* Single Continuous Section with Parallax Background */}
      <div className="relative min-h-screen">
        {/* Circuit Animation Layer */}
        <CircuitBG intensity="high" animated={true} color="gold" />

        {/* Fixed Parallax Background */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Overlay for readability */}
        <div className="fixed inset-0 z-10 bg-gradient-to-br from-[#10161C]/70 via-[#10161C]/80 to-[#10161C]/85" />

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
                style={{ boxShadow: "inset 0 0 30px rgba(255, 215, 0, 0.1)" }}
              >
                <p className="text-[#FFD700] text-lg font-medium leading-relaxed">
                  "SaintSal" AI doesn't just answer.
                  <br />
                  It adapts. It empowers. It becomes your...
                  <br />
                  <span
                    className="text-2xl font-black tracking-wider"
                    style={{
                      fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                    }}
                  >
                    GOTTA GUY™!
                  </span>
                </p>
              </motion.div>

              {/* SaintSal Brain Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#FFD700]/30 rounded-full blur-3xl animate-pulse" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0d63ecf25b7f45398d50df5cd4f332bf"
                    alt="SaintSal™ Circuit Brain"
                    className="relative w-24 h-24 md:w-32 md:h-32 object-contain"
                  />
                </div>
                <div className="mt-3">
                  <div
                    className="text-xs text-[#FFD700]/80 font-medium tracking-widest"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    SAINTSAL™
                  </div>
                  <div className="text-xs text-white/60">Cookin' Knowledge</div>
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
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  SaintVisionAI™
                </h1>

                {/* Main CTA Button */}
                <Link href="/signup">
                  <button
                    className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-black uppercase rounded-lg px-8 py-4 mb-6 transition-all duration-200 text-lg tracking-wide"
                    style={{
                      fontFamily: '"Sora", system-ui, sans-serif',
                      boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                    }}
                  >
                    🔥 Start Cooking
                  </button>
                </Link>

                {/* Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Link href="/chat">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-6 py-3 transition-all duration-200 flex items-center gap-2"
                      style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                    >
                      ⚡ AI Chat
                    </button>
                  </Link>
                  <Link href="/login">
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-3 transition-all duration-200 flex items-center gap-2"
                      style={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
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
                      className="text-orange-400 hover:text-orange-300"
                    >
                      ⚠️ Pricing
                    </Link>
                    <Link
                      href="/setup"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      🛠️ Setup
                    </Link>
                    <Link
                      href="/help"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      ❓ Help
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* What's Inside These Walls - Compact Cards */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-[#FFD700]">🗲</span>
                  <h3
                    className="text-xl font-bold text-[#FFD700] tracking-wide"
                    style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                  >
                    What's Inside These Walls
                  </h3>
                </div>

                {/* Compact Feature Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  {[
                    {
                      title: "Lead Discovery",
                      desc: "AI-powered lookup",
                      color: "bg-blue-600",
                      icon: "🔍",
                    },
                    {
                      title: "Referral Network",
                      desc: "Partner tracking",
                      color: "bg-green-600",
                      icon: "🤝",
                    },
                    {
                      title: "AI Deal Analysis",
                      desc: "GPT-4 insights",
                      color: "bg-purple-600",
                      icon: "📊",
                    },
                    {
                      title: "Mobile Export",
                      desc: "iOS/Android apps",
                      color: "bg-red-600",
                      icon: "📱",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className={`${feature.color} rounded-lg p-4 text-center text-white`}
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div className="font-bold text-sm mb-1">
                        {feature.title}
                      </div>
                      <div className="text-xs opacity-80">{feature.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Elite AI Sanctuary Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-[#FFD700]">✨</span>
                  <span
                    className="text-[#FFD700] font-bold text-sm tracking-wide"
                    style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                  >
                    Elite AI Sanctuary • Ready for Saints
                  </span>
                </div>
                <div className="text-xs text-white/60 max-w-md mx-auto">
                  Azure Cognitive Services + OpenAI GPT-4o + Premium
                  Infrastructure
                </div>
              </motion.div>
            </div>
          </div>

          {/* Compact Pricing Section */}
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
                  textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                }}
              >
                PartnerTech AI Execution Tiers
              </h2>
            </motion.div>

            {/* Compact Pricing Cards - Vertical Stack */}
            <div className="max-w-sm mx-auto space-y-3">
              {[
                {
                  name: "Starter Summit",
                  price: "$97",
                  period: "/mo",
                  color: "bg-gradient-to-r from-purple-600 to-purple-700",
                  features: ["GPT-4 Access", "Basic CRM", "Email Support"],
                },
                {
                  name: "Summit Elite",
                  price: "$297",
                  period: "/mo",
                  color: "bg-gradient-to-r from-blue-600 to-blue-700",
                  features: ["Dual AI Engines", "Full CRM", "Priority Support"],
                  popular: true,
                },
                {
                  name: "Azure Enterprise",
                  price: "$597",
                  period: "/mo",
                  color: "bg-gradient-to-r from-yellow-500 to-yellow-600",
                  features: ["White Label", "API Access", "Custom Training"],
                },
                {
                  name: "Patent Protected",
                  price: "$997",
                  period: "/mo",
                  color: "bg-gradient-to-r from-pink-600 to-pink-700",
                  features: ["Everything", "Patent License", "1-on-1 Training"],
                },
                {
                  name: "Lead Generation",
                  price: "$197",
                  period: "/mo",
                  color: "bg-gradient-to-r from-green-600 to-green-700",
                  features: ["AI Prospecting", "Lead Export", "CRM Sync"],
                },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${tier.color} rounded-lg p-4 text-white relative`}
                  style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
                >
                  {tier.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-bold text-lg"
                        style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
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

            {/* Get Started Button */}
            <div className="text-center mt-8">
              <Link href="/pricing">
                <button
                  className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-black uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                  style={{
                    fontFamily: '"Sora", system-ui, sans-serif',
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                  }}
                >
                  🚀 Choose Your Tier
                </button>
              </Link>
            </div>
          </div>

          {/* Operations Dashboard Preview */}
          <div className="py-16 max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl md:text-5xl font-black text-white mb-6 tracking-wider"
                style={{
                  fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                }}
              >
                SaintSal™ Operations Dash
              </h2>
              <p className="text-lg text-white/80">
                Real-time metrics and AI-powered insights
              </p>
            </motion.div>

            {/* Operations Metrics - Compact Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                {
                  label: "Active Leads",
                  value: "2,847",
                  color: "bg-pink-600",
                  change: "+12%",
                },
                {
                  label: "Conversions",
                  value: "347",
                  color: "bg-green-600",
                  change: "+23%",
                },
                {
                  label: "Revenue",
                  value: "$127K",
                  color: "bg-purple-600",
                  change: "+45%",
                },
                {
                  label: "AI Queries",
                  value: "15,629",
                  color: "bg-blue-600",
                  change: "+67%",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${metric.color} rounded-lg p-4 text-white text-center`}
                  style={{
                    boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div className="text-2xl font-black mb-1">{metric.value}</div>
                  <div className="text-xs opacity-80 mb-1">{metric.label}</div>
                  <div className="text-xs text-green-300">{metric.change}</div>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <Link href="/dashboard">
                <button
                  className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-black uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                  style={{
                    fontFamily: '"Sora", system-ui, sans-serif',
                    boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                  }}
                >
                  🎯 Access Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
