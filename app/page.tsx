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
          <CircuitBG intensity="medium" animated={true} color="gold" />

          {/* Multi-Layer Sophisticated Background System */}
          <div className="fixed inset-0 z-0">
            {/* Base Layer - Professional Business Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcf84ed9938f847c3bc2c3849e966fb91')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.6) contrast(1.1)",
              }}
            />

            {/* Layer 2 - Elite Business Meeting Atmosphere */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F5f5e9068c27f4cd7a63b1ffe245a0466?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center right",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                mixBlendMode: "soft-light",
                filter: "sepia(20%) brightness(0.9)",
              }}
            />

            {/* Layer 3 - Cookin Knowledge Watermark */}
            <div
              className="absolute inset-0 opacity-6"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "30%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(150%) brightness(0.5)",
              }}
            />

            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, 
                  rgba(16, 22, 28, 0.7) 0%, 
                  rgba(16, 22, 28, 0.85) 60%, 
                  rgba(16, 22, 28, 0.95) 100%)`,
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-20">
            {/* Hero Section - Clean and Professional */}
            <div className="flex items-center justify-center min-h-screen text-center px-6 max-w-6xl mx-auto">
              <div className="w-full">
                {/* SaintVisionAI Logo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1703961c02a45f92cc4a097e52a8a7502f3f2633?width=2048"
                    alt="SaintVisionAI"
                    className="w-16 h-16 mx-auto mb-6 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))",
                    }}
                  />
                </motion.div>

                {/* Main Headline - Anthropic Style */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-12"
                >
                  <h1
                    className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight leading-tight"
                    style={{
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontWeight: "300",
                    }}
                  >
                    AI that actually
                    <br />
                    <span
                      className="font-medium text-[#FFD700]"
                      style={{ fontWeight: "500" }}
                    >
                      gets things done
                    </span>
                  </h1>

                  <p
                    className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 font-light"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Dual AI engines, integrated CRM, and white-label
                    capabilities.
                    <br />
                    Built for professionals who need results, not just
                    conversations.
                  </p>
                </motion.div>

                {/* CTA Buttons - Clean Design */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                  <Link href="/signup">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-medium rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      Start building
                    </button>
                  </Link>
                  <Link href="/demo">
                    <button
                      className="border border-white/30 text-white hover:bg-white/5 font-medium rounded-lg px-8 py-4 transition-all duration-200 text-lg backdrop-blur-sm"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                      }}
                    >
                      View demo
                    </button>
                  </Link>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center text-white/60 text-sm"
                >
                  <p>Powered by Azure Cognitive Services + OpenAI GPT-4o</p>
                </motion.div>
              </div>
            </div>

            {/* Features Section - Professional Grid */}
            <div className="py-24 max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2
                  className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Built for scale
                </h2>
                <p
                  className="text-xl text-white/70 max-w-3xl mx-auto font-light"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Enterprise-grade AI tools that integrate seamlessly with your
                  workflow
                </p>
              </motion.div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🧠",
                    title: "Dual AI Engines",
                    description:
                      "GPT-4o and Azure AI working in tandem for superior results",
                    features: [
                      "Advanced reasoning",
                      "Real-time processing",
                      "Context awareness",
                    ],
                  },
                  {
                    icon: "📊",
                    title: "Integrated CRM",
                    description:
                      "GoHighLevel integration with white-label capabilities",
                    features: [
                      "Lead management",
                      "Automated workflows",
                      "Client tracking",
                    ],
                  },
                  {
                    icon: "⚡",
                    title: "Enterprise Ready",
                    description:
                      "Patent-protected platform built for serious businesses",
                    features: [
                      "Custom deployment",
                      "API access",
                      "Priority support",
                    ],
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3
                      className="text-xl font-medium text-white mb-4"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-white/60"
                        >
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Capabilities Section */}
            <div className="py-24 bg-white/2 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2
                    className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    What you can build
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "🔍",
                      title: "Lead Discovery",
                      desc: "AI-powered prospect identification",
                    },
                    {
                      icon: "🤖",
                      title: "AI Assistants",
                      desc: "Custom AI agents for your business",
                    },
                    {
                      icon: "📱",
                      title: "Mobile Apps",
                      desc: "iOS and Android deployment",
                    },
                    {
                      icon: "🎨",
                      title: "Content Generation",
                      desc: "Images, text, and media creation",
                    },
                    {
                      icon: "📧",
                      title: "Email Automation",
                      desc: "Intelligent campaign management",
                    },
                    {
                      icon: "📊",
                      title: "Analytics Dashboard",
                      desc: "Real-time insights and reporting",
                    },
                    {
                      icon: "🔗",
                      title: "API Integration",
                      desc: "Connect with existing tools",
                    },
                    {
                      icon: "👥",
                      title: "Client Portals",
                      desc: "White-label customer access",
                    },
                  ].map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-2xl mb-3">{capability.icon}</div>
                      <h3 className="font-medium text-white mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-sm text-white/60">{capability.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Section - Clean and Professional */}
            <div className="py-24 max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2
                  className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Simple, transparent pricing
                </h2>
                <p
                  className="text-xl text-white/70 max-w-3xl mx-auto font-light"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Choose the plan that scales with your business
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Starter",
                    price: "$97",
                    period: "/month",
                    description: "Perfect for small teams getting started",
                    features: [
                      "GPT-4 access",
                      "Basic CRM integration",
                      "Email support",
                      "Standard templates",
                    ],
                    cta: "Start free trial",
                  },
                  {
                    name: "Professional",
                    price: "$297",
                    period: "/month",
                    description: "Advanced features for growing businesses",
                    features: [
                      "Dual AI engines",
                      "Full CRM integration",
                      "Priority support",
                      "Custom workflows",
                      "API access",
                    ],
                    cta: "Start free trial",
                    popular: true,
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    period: "",
                    description: "Tailored solutions for large organizations",
                    features: [
                      "White-label deployment",
                      "Custom AI training",
                      "Dedicated support",
                      "SLA guarantees",
                      "On-premise options",
                    ],
                    cta: "Contact sales",
                  },
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 relative ${
                      plan.popular
                        ? "border-[#FFD700]/50 ring-1 ring-[#FFD700]/20"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black text-xs font-medium px-3 py-1 rounded-full">
                        Most popular
                      </div>
                    )}

                    <div className="mb-6">
                      <h3
                        className="text-xl font-medium text-white mb-2"
                        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline mb-3">
                        <span className="text-4xl font-light text-white">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-white/60 ml-1">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-white/70">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                        plan.popular
                          ? "bg-[#FFD700] hover:bg-[#FFA500] text-black"
                          : "border border-white/30 text-white hover:bg-white/5"
                      }`}
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      {plan.cta}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="py-24 text-center max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Ready to get started?
                </h2>
                <p
                  className="text-xl text-white/70 mb-8 font-light"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Join thousands of professionals already building with
                  SaintVisionAI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <button
                      className="bg-[#FFD700] hover:bg-[#FFA500] text-black font-medium rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
                      }}
                    >
                      Start building today
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button
                      className="border border-white/30 text-white hover:bg-white/5 font-medium rounded-lg px-8 py-4 transition-all duration-200 text-lg"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      Talk to sales
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white/3 backdrop-blur-sm border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Logo Section */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                    alt="SaintVisionAI"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3
                      className="text-lg font-medium text-white"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      SaintVisionAI™
                    </h3>
                    <p className="text-white/60 text-sm">Elite AI Platform</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed max-w-md">
                  Patent-protected AI platform for businesses that need results,
                  not just conversations.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-medium text-white mb-4">Platform</h4>
                <ul className="space-y-2">
                  {["Dashboard", "Console", "API", "Documentation"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-medium text-white mb-4">Support</h4>
                <ul className="space-y-2">
                  {["Help Center", "Contact", "Status", "Privacy"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href={`/${item.toLowerCase()}`}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm">
                © 2024 SAINTSAL™ Movement. U.S. Patent No. 10,290,222. All
                rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-white/50 text-sm">
                  Built with purpose
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
