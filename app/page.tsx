"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className="min-h-screen bg-[#0a0f14] text-white overflow-x-hidden relative">
      {/* Sidebar Navigation */}
      <SidebarNav />

      {/* Floating Gold Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-80 transition-all duration-300">
        <div className="relative min-h-screen">
          {/* Sophisticated Background System */}
          <div className="fixed inset-0 z-0">
            {/* Base Professional Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fbefa6adf688e4c3a912515e059b38e96?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.4) contrast(1.1) sepia(5%)",
              }}
            />

            {/* SAINTSAL Circuit Brain Logo */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0894db8532664c4eab068c93b2d098dd?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "20%",
                backgroundAttachment: "fixed",
                mixBlendMode: "luminosity",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(200%) brightness(0.6)",
              }}
            />

            {/* Elegant Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(10, 15, 20, 0.8) 0%, 
                  rgba(10, 15, 20, 0.9) 50%, 
                  rgba(10, 15, 20, 0.85) 100%)`,
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 py-20 px-6">
            {/* GOTTA GUY™ Quote Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-center mb-16 max-w-5xl mx-auto"
            >
              <div
                className="bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 backdrop-blur-lg rounded-2xl p-8 border border-[#FFD700]/30 mb-16"
                style={{
                  boxShadow:
                    "inset 0 0 40px rgba(255, 215, 0, 0.1), 0 16px 64px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="flex justify-center mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F1058c6bc3c2c44829d2b5c1680ff6d39?format=webp&width=800"
                    alt="SAINTSAL Logo"
                    className="w-20 h-20 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
                    }}
                  />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4"
                  style={{ fontFamily: '"Bebas Neue", system-ui, sans-serif' }}
                >
                  "GOTTA GUY™"
                </h2>
                <p
                  className="text-xl text-white/90 leading-relaxed font-light"
                  style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                >
                  The only AI companion built for serious business execution.
                  Not just conversation – complete strategic operations.
                </p>
              </div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-12"
              >
                <h1
                  className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight leading-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  AI that actually
                  <br />
                  <span className="text-[#FFD700] font-medium">
                    gets things done
                  </span>
                </h1>
                <p
                  className="text-2xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed"
                  style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                >
                  Professional workspace for dual AI engines, integrated CRM,
                  and strategic execution. The quiet confidence of enterprise
                  capability.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <Link href="/dashboard">
                  <button
                    className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-bold rounded-xl px-12 py-5 transition-all duration-200 text-xl"
                    style={{
                      fontFamily: '"Bebas Neue", system-ui, sans-serif',
                      boxShadow: "0 8px 32px rgba(255, 215, 0, 0.4)",
                    }}
                  >
                    Enter the Warroom →
                  </button>
                </Link>
                <Link href="/pricing">
                  <button
                    className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-[#FFD700]/50 font-medium rounded-xl px-12 py-5 transition-all duration-200 text-xl"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Professional Tiers
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Compact Feature Grid - 2x2 Layout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20"
            >
              {[
                {
                  icon: "🧠",
                  title: "Dual AI Command",
                  desc: "GPT-4o + Azure working in parallel for comprehensive analysis and execution",
                  color: "from-purple-600/20 to-purple-700/20",
                  border: "border-purple-500/30",
                },
                {
                  icon: "💼",
                  title: "Integrated CRM Suite",
                  desc: "GoHighLevel integration with automated workflows and client management",
                  color: "from-blue-600/20 to-blue-700/20",
                  border: "border-blue-500/30",
                },
                {
                  icon: "📊",
                  title: "Strategic Analytics",
                  desc: "Real-time performance insights with predictive business intelligence",
                  color: "from-emerald-600/20 to-emerald-700/20",
                  border: "border-emerald-500/30",
                },
                {
                  icon: "⚡",
                  title: "Enterprise Execution",
                  desc: "Professional deployment with white-label options and SLA guarantees",
                  color: "from-[#FFD700]/20 to-[#FFA500]/20",
                  border: "border-[#FFD700]/50",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} backdrop-blur-lg rounded-2xl p-8 border ${feature.border} transition-all duration-300 hover:scale-105`}
                  style={{
                    boxShadow:
                      "inset 0 0 30px rgba(255, 255, 255, 0.05), 0 12px 48px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3
                    className="text-2xl font-medium text-white mb-4"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Vertical Pricing Stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <div className="text-center mb-12">
                <h2
                  className="text-4xl font-light text-white mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Professional Investment Tiers
                </h2>
                <p className="text-xl text-white/70 font-light">
                  Choose the professional-grade solution that scales with your
                  objectives
                </p>
              </div>

              {[
                {
                  name: "Professional",
                  price: "$97",
                  desc: "Individual professionals and consultants",
                  features: ["GPT-4o Access", "Basic CRM", "5 AI Agents"],
                  color: "from-blue-600/20 to-blue-700/20",
                  border: "border-blue-500/30",
                },
                {
                  name: "Executive",
                  price: "$297",
                  desc: "Growing businesses and teams",
                  features: [
                    "Dual AI Engines",
                    "Full CRM Suite",
                    "15 AI Agents",
                    "Advanced Analytics",
                  ],
                  color: "from-[#FFD700]/20 to-[#FFA500]/20",
                  border: "border-[#FFD700]/50",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$997",
                  desc: "Large organizations and deployment",
                  features: [
                    "Complete AI Command Center",
                    "Unlimited Agents",
                    "Custom Training",
                    "SLA Guarantees",
                  ],
                  color: "from-purple-600/20 to-purple-700/20",
                  border: "border-purple-500/30",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${plan.color} backdrop-blur-lg rounded-2xl p-8 border ${plan.border} transition-all duration-300 hover:scale-102 ${
                    plan.popular ? "ring-2 ring-[#FFD700]/50" : ""
                  }`}
                  style={{
                    boxShadow: plan.popular
                      ? "inset 0 0 40px rgba(255, 215, 0, 0.1), 0 16px 64px rgba(0, 0, 0, 0.3)"
                      : "inset 0 0 30px rgba(255, 255, 255, 0.05), 0 12px 48px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className="text-2xl font-medium text-white"
                          style={{
                            fontFamily: '"Inter", system-ui, sans-serif',
                          }}
                        >
                          {plan.name}
                        </h3>
                        {plan.popular && (
                          <span className="bg-[#FFD700] text-black text-sm font-bold px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 mb-4">{plan.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {plan.features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-8 text-right">
                      <div className="text-4xl font-light text-white mb-2">
                        {plan.price}
                      </div>
                      <div className="text-white/60 text-sm">per month</div>
                      <Link href="/pricing">
                        <button
                          className={`mt-4 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                            plan.popular
                              ? "bg-[#FFD700] hover:bg-[#FFA500] text-black"
                              : "border-2 border-white/30 text-white hover:bg-white/10"
                          }`}
                        >
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
