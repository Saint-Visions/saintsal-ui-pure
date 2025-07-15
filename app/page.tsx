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
          <div className="flex items-center justify-center min-h-screen text-center px-6 max-w-6xl mx-auto">
            <div className="w-full">
              {/* SaintSal Brain Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#FFD700]/30 rounded-full blur-3xl animate-pulse" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0d63ecf25b7f45398d50df5cd4f332bf"
                    alt="SaintSal™ Circuit Brain"
                    className="relative w-32 h-32 md:w-48 md:h-48 object-contain"
                  />
                </div>
              </motion.div>

              {/* Hero Text */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                {/* SAINTSAL™ Headline - Bebas Neue/Sora Style */}
                <h1
                  className="text-6xl md:text-8xl font-black pt-10 pb-4 tracking-[0.2em] text-[#FFD700] mb-6 uppercase"
                  style={{
                    fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
                    letterSpacing: "0.15em",
                  }}
                >
                  SAINTSAL™
                </h1>

                {/* Performance-Focused Tagline */}
                <div
                  className="text-2xl md:text-3xl text-[#FFD700] opacity-90 mb-8 font-bold tracking-wide"
                  style={{
                    fontFamily: '"Sora", system-ui, sans-serif',
                    textShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
                  }}
                >
                  Elite AI Execution Platform
                </div>

                {/* OpenAI-Style Clear Value Prop */}
                <p
                  className="text-xl md:text-2xl text-white/90 max-w-[700px] mx-auto leading-relaxed mb-12 font-medium"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Dual AI engines. CRM integration. Kingdom-level automation.
                  <br />
                  <span className="text-[#FFD700]/80">
                    Get in. Execute. Dominate.
                  </span>
                </p>

                {/* Performance-Focused Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                  {[
                    {
                      icon: "⚡",
                      title: "Instant AI",
                      desc: "GPT-4o + Azure dual power",
                    },
                    {
                      icon: "🎯",
                      title: "Direct CRM",
                      desc: "GoHighLevel integration",
                    },
                    {
                      icon: "👑",
                      title: "Elite Only",
                      desc: "Patent-protected platform",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="bg-[#10161C]/50 backdrop-blur-sm rounded-lg p-4 border border-[#FFD700]/20"
                      style={{
                        boxShadow: "inset 0 0 20px rgba(255, 215, 0, 0.1)",
                      }}
                    >
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div
                        className="text-[#FFD700] font-bold text-sm mb-1 tracking-wide"
                        style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                      >
                        {feature.title}
                      </div>
                      <div className="text-white/70 text-xs">
                        {feature.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons - Neon Yellow Style */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <Link href="/signup">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-black uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg tracking-wide"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                        border: "2px solid #FFD700",
                      }}
                    >
                      🚀 START EXECUTION
                    </button>
                  </Link>
                  <Link href="/pricing">
                    <button
                      className="border-2 border-[#FFD700]/60 text-[#FFD700] hover:bg-[#FFD700]/10 font-bold uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg tracking-wide"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        boxShadow: "inset 0 0 20px rgba(255, 215, 0, 0.1)",
                      }}
                    >
                      ⚡ VIEW TIERS
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Quick Demo Section - OpenAI Style */}
          <div className="py-24 max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider"
                style={{
                  fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                }}
              >
                AI Workstation Demo
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See the divine intelligence in action.
              </p>
            </motion.div>

            {/* Demo Preview */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#10161C]/70 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-4xl border border-[#FFD700]/20"
              style={{ boxShadow: "inset 0 0 30px rgba(255, 215, 0, 0.1)" }}
            >
              <div className="bg-[#10161C]/80 rounded-xl p-6 border border-[#FFD700]/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                      alt="SaintSal AI"
                      className="w-8 h-8 object-contain"
                    />
                    <span
                      className="text-[#FFD700] font-bold tracking-wide"
                      style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                    >
                      SAINTSAL™ COMPANION
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-sm font-mono">
                      LIVE
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">👤</span>
                    <div className="bg-[#1a1f28] rounded-lg p-4 flex-1">
                      <p className="text-white/80">
                        Execute market analysis for Q1 strategic positioning
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                      alt="SaintSal AI"
                      className="w-6 h-6 object-contain mt-1"
                    />
                    <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 rounded-lg p-4 flex-1">
                      <p className="text-white">
                        ⚡ Analysis complete. Market positioning identified. CRM
                        updated with 847 qualified leads.
                        <span className="text-[#FFD700] font-semibold">
                          {" "}
                          Strategic recommendations ready for execution.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/chat">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold rounded-lg px-6 py-3 transition-all duration-200"
                      style={{ boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" }}
                    >
                      Execute Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <div className="py-24 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl md:text-5xl font-black text-[#FFD700] mb-6 tracking-wider"
                style={{
                  fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                  textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                }}
              >
                Ready to Execute?
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Join elite builders who choose execution over consumption.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/signup">
                  <button
                    className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-black uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                    style={{
                      fontFamily: '"Sora", system-ui, sans-serif',
                      boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)",
                    }}
                  >
                    🚀 START EXECUTION
                  </button>
                </Link>
                <Link href="/pricing">
                  <button
                    className="border-2 border-[#FFD700]/60 text-[#FFD700] hover:bg-[#FFD700]/10 font-bold uppercase rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                    style={{
                      fontFamily: '"Sora", system-ui, sans-serif',
                      boxShadow: "inset 0 0 20px rgba(255, 215, 0, 0.1)",
                    }}
                  >
                    ⚡ VIEW TIERS
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-[#0a0f14]/90 border-t border-[#FFD700]/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                  alt="SaintVisionAI"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3
                    className="text-2xl font-bold text-[#FFD700] tracking-wider"
                    style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                  >
                    SaintVisionAI™
                  </h3>
                  <p className="text-white/60 text-sm">
                    Elite AI Execution Platform
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Patent-protected AI movement for kingdom builders. Where divine
                intelligence meets strategic execution.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-bold text-[#FFD700] mb-4">
                Platform
              </h4>
              <ul className="space-y-2">
                {["Home", "Dashboard", "Console", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-white/60 hover:text-[#FFD700] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold text-[#FFD700] mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Licensing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-white/60 hover:text-[#FFD700] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#FFD700]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © 2024 SAINTSAL™ Movement. U.S. Patent No. 10,290,222. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-white/50 text-sm">Elite AI Execution</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
