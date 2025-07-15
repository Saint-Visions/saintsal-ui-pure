"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CircuitBG from "../components/saintsal/CircuitBG";
import SidebarNav from "../components/saintsal/SidebarNav";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

          {/* Multi-Layer Sophisticated Background System */}
          <div className="fixed inset-0 z-0">
            {/* Base Layer - Primary Wall Street/Business Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.7) contrast(1.2)",
              }}
            />

            {/* Layer 2 - Professional Meeting/Conference Atmosphere */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets/TEMP/e8aa6abef9c997e84baf52c38bc8f8072a33723b?width=3746')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                mixBlendMode: "soft-light",
                filter:
                  "sepia(30%) hue-rotate(20deg) brightness(0.9) contrast(1.1)",
              }}
            />

            {/* Layer 3 - Elite Business Boardroom Vibes */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F5f5e9068c27f4cd7a63b1ffe245a0466?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                mixBlendMode: "multiply",
                filter:
                  "sepia(40%) hue-rotate(30deg) brightness(0.8) saturate(1.3)",
              }}
            />

            {/* Layer 4 - SaintVisionAI Branding Overlay */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fbd827413de6a4a48b27f95a88a41b4f3?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                backgroundSize: "contain",
                backgroundAttachment: "fixed",
                mixBlendMode: "overlay",
                filter: "sepia(50%) hue-rotate(40deg) brightness(1.1)",
              }}
            />

            {/* Layer 5 - Cookin Knowledge Logo - Rotating Watermark */}
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "35%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(200%) brightness(0.6)",
                transform: `rotate(${scrollY * 0.05}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            />

            {/* Layer 6 - Dynamic Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, 
                  rgba(255, 215, 0, 0.1) 0%, 
                  rgba(16, 22, 28, 0.8) 40%, 
                  rgba(16, 22, 28, 0.95) 100%)`,
              }}
            />
          </div>

          {/* Enhanced Dark Overlay with Breathing Effect */}
          <div
            className="fixed inset-0 z-10"
            style={{
              background: `linear-gradient(135deg, 
                rgba(16, 22, 28, 0.75) 0%, 
                rgba(26, 31, 40, 0.85) 50%, 
                rgba(16, 22, 28, 0.90) 100%)`,
              animation: "breathe 6s ease-in-out infinite",
            }}
          />

          {/* Custom breathing animation */}
          <style jsx>{`
            @keyframes breathe {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.95;
              }
            }
            @keyframes divine-pulse {
              0%,
              100% {
                box-shadow:
                  0 0 30px rgba(255, 215, 0, 0.6),
                  0 0 60px rgba(255, 215, 0, 0.4),
                  0 0 90px rgba(255, 215, 0, 0.2);
              }
              50% {
                box-shadow:
                  0 0 40px rgba(255, 215, 0, 0.8),
                  0 0 80px rgba(255, 215, 0, 0.6),
                  0 0 120px rgba(255, 215, 0, 0.3);
              }
            }
          `}</style>

          {/* All Content in One Flowing Container */}
          <div className="relative z-20">
            {/* Hero Content */}
            <div className="flex items-center justify-center min-h-screen text-center px-6 max-w-5xl mx-auto">
              <div className="w-full">
                {/* GOTTA GUY Quote Box - ENHANCED */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-gradient-to-br from-[#1a1f28]/95 to-[#0f1419]/95 backdrop-blur-md rounded-2xl p-8 mb-10 border-2 border-[#FFD700]/40 max-w-lg mx-auto relative overflow-hidden"
                  style={{
                    boxShadow: `
                      inset 0 0 40px rgba(255, 215, 0, 0.15), 
                      0 8px 32px rgba(0, 0, 0, 0.4),
                      0 0 50px rgba(255, 215, 0, 0.3)
                    `,
                    backdropFilter: "blur(20px)",
                    animation: "divine-pulse 4s ease-in-out infinite",
                  }}
                >
                  {/* Sparkle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent animate-pulse" />

                  <div className="relative z-10">
                    <p className="text-[#FFD700] text-lg font-medium leading-relaxed mb-4">
                      "SaintSal" AI doesn't just answer.
                      <br />
                      It adapts. It empowers. It becomes your...
                      <br />
                      <span
                        className="text-3xl font-black tracking-wider block mt-2"
                        style={{
                          fontFamily:
                            '"Bebas Neue", "Sora", system-ui, sans-serif',
                          textShadow:
                            "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)",
                          background:
                            "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        GOTTA GUY™!
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* SaintSal Brain Logo - ULTRA ENHANCED */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="mb-10"
                >
                  <div className="relative inline-block">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-[#FFD700]/40 rounded-full blur-3xl animate-pulse" />
                    <div
                      className="absolute inset-0 bg-[#FFA500]/30 rounded-full blur-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute inset-0 bg-[#FF8C00]/20 rounded-full blur-xl animate-pulse"
                      style={{ animationDelay: "2s" }}
                    />

                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1703961c02a45f92cc4a097e52a8a7502f3f2633?width=2048"
                      alt="SaintSal™ Circuit Brain"
                      className="relative w-28 h-28 md:w-40 md:h-40 object-contain transform hover:scale-110 transition-all duration-500"
                      style={{
                        filter: `
                          drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))
                          drop-shadow(0 0 60px rgba(255, 215, 0, 0.4))
                          drop-shadow(0 0 90px rgba(255, 215, 0, 0.2))
                        `,
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <div
                      className="text-sm text-[#FFD700]/90 font-bold tracking-[0.3em]"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        textShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
                      }}
                    >
                      SAINTSAL™
                    </div>
                    <div className="text-xs text-white/70 tracking-wider">
                      Cookin' Knowledge
                    </div>
                  </div>
                </motion.div>

                {/* SaintVisionAI™ Title - ULTRA ENHANCED */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="mb-10"
                >
                  <h1
                    className="text-5xl md:text-7xl font-black tracking-[0.25em] mb-8 uppercase relative"
                    style={{
                      fontFamily: '"Bebas Neue", "Sora", system-ui, sans-serif',
                      background:
                        "linear-gradient(45deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FF8C00 75%, #FFD700 100%)",
                      backgroundSize: "200% 200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "gradient-shift 3s ease-in-out infinite",
                      textShadow: "0 0 50px rgba(255, 215, 0, 0.8)",
                    }}
                  >
                    SaintVisionAI™
                    {/* Floating particles */}
                    <span className="absolute -top-2 -right-2 text-[#FFD700] text-xl animate-bounce">
                      ✨
                    </span>
                    <span
                      className="absolute -bottom-2 -left-2 text-[#FFA500] text-lg animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      ⚡
                    </span>
                  </h1>

                  <style jsx>{`
                    @keyframes gradient-shift {
                      0%,
                      100% {
                        background-position: 0% 50%;
                      }
                      50% {
                        background-position: 100% 50%;
                      }
                    }
                  `}</style>

                  {/* MEGA Enhanced CTA Button */}
                  <Link href="/signup">
                    <button
                      className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] hover:from-[#FFA500] hover:via-[#FF8C00] hover:to-[#FFA500] text-black font-black uppercase rounded-xl px-10 py-5 mb-8 transition-all duration-300 text-xl tracking-wide transform hover:scale-110 relative overflow-hidden group"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        boxShadow: `
                          0 0 50px rgba(255, 215, 0, 0.9),
                          0 0 100px rgba(255, 215, 0, 0.5),
                          inset 0 1px 0 rgba(255, 255, 255, 0.4),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                        `,
                        backgroundSize: "200% 200%",
                        animation: "gradient-shift 2s ease-in-out infinite",
                      }}
                    >
                      {/* Button shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">🔥 Start Cooking</span>
                    </button>
                  </Link>

                  {/* ENHANCED Secondary Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                    <Link href="/chat">
                      <button
                        className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center gap-3 transform hover:scale-105 relative overflow-hidden group"
                        style={{
                          boxShadow: `
                            0 0 30px rgba(59, 130, 246, 0.6),
                            0 0 60px rgba(59, 130, 246, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.2)
                          `,
                          backdropFilter: "blur(10px)",
                          backgroundSize: "200% 200%",
                          animation: "gradient-shift 3s ease-in-out infinite",
                        }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 text-2xl">⚡</span>
                        <span className="relative z-10">AI Chat</span>
                      </button>
                    </Link>
                    <Link href="/login">
                      <button
                        className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 flex items-center gap-3 transform hover:scale-105 relative overflow-hidden group"
                        style={{
                          boxShadow: `
                            0 0 30px rgba(34, 197, 94, 0.6),
                            0 0 60px rgba(34, 197, 94, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.2)
                          `,
                          backdropFilter: "blur(10px)",
                          backgroundSize: "200% 200%",
                          animation:
                            "gradient-shift 3s ease-in-out infinite reverse",
                        }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10 text-2xl">🔐</span>
                        <span className="relative z-10">Sign In</span>
                      </button>
                    </Link>
                  </div>

                  {/* Enhanced Quick Access */}
                  <div className="text-center mb-10">
                    <div className="text-sm text-white/70 mb-3 font-medium">
                      Quick Access:
                    </div>
                    <div className="flex justify-center gap-6 text-sm">
                      <Link
                        href="/pricing"
                        className="text-orange-400 hover:text-orange-300 transition-all duration-300 hover:drop-shadow-lg hover:scale-110 font-medium"
                      >
                        <span className="text-lg mr-1">⚠️</span> Pricing
                      </Link>
                      <Link
                        href="/setup"
                        className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:drop-shadow-lg hover:scale-110 font-medium"
                      >
                        <span className="text-lg mr-1">🛠️</span> Setup
                      </Link>
                      <Link
                        href="/help"
                        className="text-purple-400 hover:text-purple-300 transition-all duration-300 hover:drop-shadow-lg hover:scale-110 font-medium"
                      >
                        <span className="text-lg mr-1">❓</span> Help
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* What's Inside These Walls - MEGA ENHANCED */}
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="text-[#FFD700] text-2xl animate-pulse">
                      🗲
                    </span>
                    <h3
                      className="text-2xl font-black text-[#FFD700] tracking-wide relative"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        textShadow: "0 0 20px rgba(255, 215, 0, 0.7)",
                      }}
                    >
                      What's Inside These Walls
                      <span className="absolute -top-1 -right-6 text-yellow-300 text-sm animate-bounce">
                        ✨
                      </span>
                    </h3>
                    <span
                      className="text-[#FFD700] text-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      🗲
                    </span>
                  </div>

                  {/* ULTRA Enhanced Feature Grid - 2x2 */}
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    {[
                      {
                        title: "Lead Discovery",
                        desc: "AI-powered lookup",
                        color:
                          "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800",
                        icon: "🔍",
                        glow: "rgba(59, 130, 246, 0.5)",
                        particles: ["💫", "⭐", "✨"],
                      },
                      {
                        title: "Referral Network",
                        desc: "Partner tracking",
                        color:
                          "bg-gradient-to-br from-green-600 via-green-700 to-green-800",
                        icon: "🤝",
                        glow: "rgba(34, 197, 94, 0.5)",
                        particles: ["🌟", "💚", "✨"],
                      },
                      {
                        title: "AI Deal Analysis",
                        desc: "GPT-4 insights",
                        color:
                          "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800",
                        icon: "📊",
                        glow: "rgba(147, 51, 234, 0.5)",
                        particles: ["🔮", "💜", "⚡"],
                      },
                      {
                        title: "Mobile Export",
                        desc: "iOS/Android apps",
                        color:
                          "bg-gradient-to-br from-red-600 via-red-700 to-red-800",
                        icon: "📱",
                        glow: "rgba(239, 68, 68, 0.5)",
                        particles: ["🚀", "❤️", "✨"],
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        className={`${feature.color} rounded-xl p-6 text-center text-white transform hover:scale-110 transition-all duration-500 cursor-pointer relative overflow-hidden group`}
                        style={{
                          boxShadow: `
                            inset 0 0 30px rgba(255, 255, 255, 0.15), 
                            0 0 30px ${feature.glow},
                            0 8px 32px rgba(0, 0, 0, 0.3)
                          `,
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {/* Animated background particles */}
                        {feature.particles.map((particle, pIndex) => (
                          <span
                            key={pIndex}
                            className="absolute text-xs opacity-50 animate-bounce"
                            style={{
                              top: `${20 + pIndex * 20}%`,
                              left: `${10 + pIndex * 30}%`,
                              animationDelay: `${pIndex * 0.5}s`,
                              animationDuration: "2s",
                            }}
                          >
                            {particle}
                          </span>
                        ))}

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        <div className="relative z-10">
                          <div className="text-3xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <div className="font-bold text-sm mb-2">
                            {feature.title}
                          </div>
                          <div className="text-xs opacity-90">
                            {feature.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Elite AI Sanctuary Badge - ULTRA ENHANCED */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
                    <span className="text-[#FFD700] animate-pulse text-xl">
                      ✨
                    </span>
                    <span
                      className="text-[#FFA500] animate-pulse text-lg"
                      style={{ animationDelay: "0.5s" }}
                    >
                      ⭐
                    </span>
                    <span
                      className="text-[#FFD700] font-black text-lg tracking-wide px-4 py-2 rounded-full border border-[#FFD700]/30"
                      style={{
                        fontFamily: '"Sora", system-ui, sans-serif',
                        textShadow: "0 0 20px rgba(255, 215, 0, 0.7)",
                        background:
                          "linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      Elite AI Sanctuary • Ready for Saints
                    </span>
                    <span
                      className="text-[#FFA500] animate-pulse text-lg"
                      style={{ animationDelay: "1s" }}
                    >
                      ⭐
                    </span>
                    <span
                      className="text-[#FFD700] animate-pulse text-xl"
                      style={{ animationDelay: "1.5s" }}
                    >
                      ✨
                    </span>
                  </div>
                  <div className="text-sm text-white/70 max-w-md mx-auto font-medium">
                    Azure Cognitive Services + OpenAI GPT-4o + Premium
                    Infrastructure
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Content sections continue with the same ultra-enhanced styling... */}
            {/* [The pricing and other sections would follow the same enhanced pattern] */}
          </div>
        </div>
      </div>
    </div>
  );
}
