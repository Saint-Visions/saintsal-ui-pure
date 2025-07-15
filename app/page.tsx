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
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.4) contrast(1.2) sepia(10%)",
              }}
            />

            {/* Subtle Circuit Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Cpath d='M3 8h54v2H3zM3 18h54v2H3zM3 28h54v2H3zM3 38h54v2H3zM3 48h54v2H3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundAttachment: "fixed",
              }}
            />

            {/* Cookin Knowledge Watermark */}
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4bd0a5e2c3064329987dec9cf3eba462?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "25%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(150%) brightness(0.3)",
              }}
            />

            {/* Elegant Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, 
                  rgba(10, 15, 20, 0.6) 0%, 
                  rgba(10, 15, 20, 0.85) 60%, 
                  rgba(10, 15, 20, 0.95) 100%)`,
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-20">
            {/* Hero Section */}
            <div className="flex items-center justify-center min-h-screen text-center px-6 max-w-7xl mx-auto">
              <div className="w-full">
                {/* Primary SAINTSAL Circuit Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="mb-12"
                >
                  <div className="relative inline-block">
                    {/* Subtle glow effects */}
                    <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-3xl animate-pulse" />
                    <div
                      className="absolute inset-0 bg-[#FFA500]/10 rounded-full blur-2xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />

                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F1058c6bc3c2c44829d2b5c1680ff6d39?format=webp&width=800"
                      alt="SAINTSAL Circuit Brain"
                      className="relative w-24 h-24 md:w-32 md:h-32 object-contain transform hover:scale-105 transition-all duration-500"
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))",
                      }}
                    />
                  </div>

                  {/* Elegant branding text */}
                  <div className="mt-6">
                    <div
                      className="text-sm text-[#FFD700]/90 font-medium tracking-[0.3em] mb-1"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        textShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      SAINTSAL™
                    </div>
                    <div className="text-xs text-white/60 tracking-wider">
                      Cookin' Knowledge
                    </div>
                  </div>
                </motion.div>

                {/* Professional Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mb-16"
                >
                  <h1
                    className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight"
                    style={{
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontWeight: "200",
                    }}
                  >
                    Professional AI
                    <br />
                    <span
                      className="font-medium text-[#FFD700]"
                      style={{
                        fontWeight: "400",
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      Warroom
                    </span>
                  </h1>

                  <p
                    className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Dual AI engines, integrated CRM, and enterprise workspace.
                    <br />
                    Where strategic execution meets divine intelligence.
                  </p>
                </motion.div>

                {/* Professional Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                  <Link href="/dashboard">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-medium rounded-xl px-12 py-4 transition-all duration-300 text-lg tracking-wide relative overflow-hidden group"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow:
                          "0 8px 32px rgba(255, 215, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">Enter Warroom</span>
                    </button>
                  </Link>
                  <Link href="/demo">
                    <button
                      className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-[#FFD700]/50 font-medium rounded-xl px-12 py-4 transition-all duration-300 text-lg backdrop-blur-sm"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      View Capabilities
                    </button>
                  </Link>
                </motion.div>

                {/* Trust Indicators with Sv. Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex items-center justify-center gap-4 text-white/60 text-sm"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                    alt="Sv."
                    className="w-6 h-6 object-contain opacity-70"
                  />
                  <span>Azure Cognitive Services + OpenAI GPT-4o</span>
                  <div className="w-1 h-1 bg-[#FFD700] rounded-full animate-pulse" />
                  <span>Patent Protected</span>
                </motion.div>
              </div>
            </div>

            {/* Professional Capabilities Grid */}
            <div className="py-24 max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2
                  className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Enterprise Workspace
                </h2>
                <p
                  className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Professional-grade AI tools that integrate seamlessly with
                  your business operations
                </p>
              </motion.div>

              {/* Elegant Feature Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0894db8532664c4eab068c93b2d098dd?format=webp&width=800",
                    title: "Dual AI Command Center",
                    description:
                      "GPT-4o and Azure AI working in perfect harmony for strategic execution",
                    features: [
                      "Advanced reasoning",
                      "Real-time processing",
                      "Context intelligence",
                    ],
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F9b1ffa67700343cbaedfa55c2f38fa32?format=webp&width=800",
                    title: "Integrated CRM Suite",
                    description:
                      "GoHighLevel integration with white-label deployment capabilities",
                    features: [
                      "Lead management",
                      "Automated workflows",
                      "Client intelligence",
                    ],
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F41ad8a81ff624ed0bfc7fafd019e1f22?format=webp&width=800",
                    title: "Enterprise Command",
                    description:
                      "Patent-protected platform built for serious professional operations",
                    features: [
                      "Custom deployment",
                      "API mastery",
                      "Priority command",
                    ],
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white/3 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/5 hover:border-[#FFD700]/20 transition-all duration-500 group"
                    style={{
                      boxShadow:
                        "inset 0 0 30px rgba(255, 215, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="mb-6">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        style={{
                          filter:
                            "drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))",
                        }}
                      />
                    </div>
                    <h3
                      className="text-2xl font-medium text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-white/70">
                          <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-4 flex-shrink-0 group-hover:animate-pulse"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Workspace Preview */}
            <div className="py-24 bg-gradient-to-b from-white/2 to-transparent backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2
                    className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Your Command Center
                  </h2>
                  <p
                    className="text-xl text-white/70 max-w-4xl mx-auto font-light"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Professional workspace designed for strategic execution
                  </p>
                </motion.div>

                {/* Professional Workspace Demo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 max-w-5xl mx-auto"
                  style={{
                    boxShadow:
                      "inset 0 0 40px rgba(255, 215, 0, 0.1), 0 16px 64px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="bg-[#0a0f14]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/20">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                          alt="SAINTSAL Command"
                          className="w-10 h-10 object-contain"
                        />
                        <div>
                          <span
                            className="text-[#FFD700] font-medium text-lg tracking-wide"
                            style={{
                              fontFamily: '"Inter", system-ui, sans-serif',
                            }}
                          >
                            SAINTSAL™ Command Center
                          </span>
                          <div className="text-white/60 text-sm">
                            Professional Workspace
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-emerald-400 text-sm font-mono">
                          ACTIVE
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                          U
                        </div>
                        <div className="bg-white/5 rounded-xl p-6 flex-1 border border-white/10">
                          <p className="text-white/90 leading-relaxed">
                            Analyze Q1 performance metrics and generate
                            strategic recommendations for market expansion
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                          alt="SAINTSAL AI"
                          className="w-8 h-8 object-contain mt-1"
                        />
                        <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 border border-[#FFD700]/20 rounded-xl p-6 flex-1">
                          <p className="text-white leading-relaxed">
                            ⚡ <strong>Analysis Complete</strong>
                            <br />
                            Q1 shows 127% growth trajectory. Identified 3 key
                            expansion opportunities:
                            <br />• Strategic partnerships (+47% potential)
                            <br />• Market diversification (+23% potential)
                            <br />• Technology integration (+31% potential)
                            <br />
                            <br />
                            <span className="text-[#FFD700] font-medium">
                              CRM updated with 247 qualified leads. Ready for
                              execution.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <Link href="/dashboard">
                        <button
                          className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-medium rounded-xl px-8 py-3 transition-all duration-200"
                          style={{
                            boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                            fontFamily: '"Inter", system-ui, sans-serif',
                          }}
                        >
                          Access Command Center
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Professional CTA Section */}
            <div className="py-24 text-center max-w-5xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4bd0a5e2c3064329987dec9cf3eba462?format=webp&width=800"
                    alt="Cookin Knowledge"
                    className="w-32 md:w-40 mx-auto mb-8 opacity-80"
                  />
                </div>

                <h2
                  className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Ready for Professional
                  <br />
                  <span className="text-[#FFD700] font-medium">Command?</span>
                </h2>
                <p
                  className="text-xl text-white/70 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Join the elite professionals who choose strategic execution
                  over simple conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/signup">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-medium rounded-xl px-12 py-4 transition-all duration-200 text-lg"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow: "0 8px 32px rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      Begin Command Training
                    </button>
                  </Link>
                  <Link href="/enterprise">
                    <button
                      className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-[#FFD700]/50 font-medium rounded-xl px-12 py-4 transition-all duration-200 text-lg"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      Enterprise Solutions
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <footer className="bg-white/2 backdrop-blur-lg border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Logo Section with your favorite branding */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                    alt="SaintVisionAI"
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3
                      className="text-xl font-medium text-white"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      SaintVisionAI™
                    </h3>
                    <p className="text-white/60 text-sm">
                      Professional AI Command
                    </p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed max-w-md">
                  Patent-protected AI movement for professionals who demand
                  strategic execution, not just conversation.
                </p>
              </div>

              {/* Professional Navigation */}
              <div>
                <h4 className="font-medium text-white mb-4">Command Center</h4>
                <ul className="space-y-2">
                  {["Dashboard", "Warroom", "Analytics", "Command API"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase().replace(" ", "-")}`}
                          className="text-white/60 hover:text-[#FFD700] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Professional Support */}
              <div>
                <h4 className="font-medium text-white mb-4">Professional</h4>
                <ul className="space-y-2">
                  {["Command Training", "Enterprise", "Support", "Legal"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase().replace(" ", "-")}`}
                          className="text-white/60 hover:text-[#FFD700] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Bottom Bar with Cookin Knowledge */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm">
                © 2024 SAINTSAL™ Movement. U.S. Patent No. 10,290,222. All
                rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4bd0a5e2c3064329987dec9cf3eba462?format=webp&width=800"
                  alt="Cookin Knowledge"
                  className="w-20 opacity-60"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
