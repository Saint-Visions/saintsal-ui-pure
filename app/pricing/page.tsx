"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SidebarNav from "../../components/saintsal/SidebarNav";

export default function PricingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // monthly, yearly

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const plans = [
    {
      name: "Professional",
      description: "Perfect for individual professionals and consultants",
      price: { monthly: 97, yearly: 970 },
      features: [
        "GPT-4o AI Access",
        "Basic CRM Integration",
        "5 AI Agents",
        "Standard Templates",
        "Email Support",
        "Monthly Strategy Session",
      ],
      cta: "Start Professional Trial",
      popular: false,
      color: "from-blue-600/20 to-blue-700/20",
      border: "border-blue-500/30",
    },
    {
      name: "Executive",
      description: "Advanced capabilities for growing businesses",
      price: { monthly: 297, yearly: 2970 },
      features: [
        "Dual AI Engines (GPT-4o + Azure)",
        "Full CRM Suite Integration",
        "15 AI Agents",
        "Custom Workflows",
        "Priority Support",
        "Advanced Analytics",
        "White-label Options",
        "Weekly Strategy Sessions",
      ],
      cta: "Start Executive Trial",
      popular: true,
      color: "from-[#FFD700]/20 to-[#FFA500]/20",
      border: "border-[#FFD700]/50",
    },
    {
      name: "Enterprise",
      description: "Full-scale deployment for large organizations",
      price: { monthly: 997, yearly: 9970 },
      features: [
        "Complete AI Command Center",
        "Enterprise CRM Deployment",
        "Unlimited AI Agents",
        "Custom AI Training",
        "Dedicated Success Manager",
        "SLA Guarantees",
        "On-premise Options",
        "Patent License Access",
        "Daily Strategic Consultation",
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
      color: "from-purple-600/20 to-purple-700/20",
      border: "border-purple-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f14] text-white overflow-x-hidden relative">
      {/* Sidebar Navigation */}
      <SidebarNav />

      {/* Floating Gold Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#FFD700] rounded-full opacity-25 animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-0 md:ml-80 transition-all duration-300">
        <div className="relative min-h-screen">
          {/* Professional Pricing Background */}
          <div className="fixed inset-0 z-0">
            {/* Base Corporate/Financial Atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F9b1ffa67700343cbaedfa55c2f38fa32?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                filter: "brightness(0.3) contrast(1.2) sepia(10%)",
              }}
            />

            {/* Elegant Grid Pattern */}
            <div
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundAttachment: "fixed",
              }}
            />

            {/* SAINTSAL Logo Watermark */}
            <div
              className="absolute inset-0 opacity-4"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0894db8532664c4eab068c93b2d098dd?format=webp&width=800')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "18%",
                backgroundAttachment: "fixed",
                mixBlendMode: "color-dodge",
                filter:
                  "sepia(100%) hue-rotate(40deg) saturate(150%) brightness(0.3)",
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

          {/* Content */}
          <div className="relative z-20 py-16 px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb5cec8804f8f4e7a980ec8f3d48dae87?format=webp&width=800"
                  alt="SAINTSAL Pricing"
                  className="w-16 h-16 object-contain"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))",
                  }}
                />
              </div>

              <h1
                className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Professional
                <br />
                <span className="text-[#FFD700] font-medium">
                  Investment Tiers
                </span>
              </h1>
              <p
                className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Choose the professional-grade AI solution that scales with your
                strategic objectives
              </p>
            </motion.div>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-16"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                <div className="flex">
                  <button
                    onClick={() => setBillingPeriod("monthly")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      billingPeriod === "monthly"
                        ? "bg-[#FFD700] text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingPeriod("yearly")}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 relative ${
                      billingPeriod === "yearly"
                        ? "bg-[#FFD700] text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    Yearly
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-black text-xs px-2 py-1 rounded-full">
                      Save 20%
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`bg-gradient-to-br ${plan.color} backdrop-blur-lg rounded-2xl p-8 border ${plan.border} relative transition-all duration-300 hover:scale-105 ${
                    plan.popular ? "ring-2 ring-[#FFD700]/50" : ""
                  }`}
                  style={{
                    boxShadow: plan.popular
                      ? "inset 0 0 40px rgba(255, 215, 0, 0.1), 0 16px 64px rgba(0, 0, 0, 0.3)"
                      : "inset 0 0 30px rgba(255, 255, 255, 0.05), 0 12px 48px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFD700] text-black text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3
                      className="text-2xl font-medium text-white mb-3"
                      style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-light text-white">
                        ${plan.price[billingPeriod]}
                      </span>
                      <span className="text-white/60 ml-2">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingPeriod === "yearly" && (
                      <div className="text-emerald-400 text-sm mt-2">
                        Save ${plan.price.monthly * 12 - plan.price.yearly}{" "}
                        annually
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-200 ${
                      plan.popular
                        ? "bg-[#FFD700] hover:bg-[#FFA500] text-black"
                        : "border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#FFD700]/50"
                    }`}
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Enterprise Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2
                  className="text-4xl font-light text-white mb-6 tracking-tight"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  Enterprise Capabilities
                </h2>
                <p className="text-xl text-white/70 font-light">
                  Advanced features available across all professional tiers
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: "🧠",
                    title: "Dual AI Engines",
                    desc: "GPT-4o + Azure Intelligence",
                  },
                  {
                    icon: "📊",
                    title: "CRM Integration",
                    desc: "GoHighLevel + Custom APIs",
                  },
                  {
                    icon: "🎯",
                    title: "Strategic Analytics",
                    desc: "Real-time Performance Insights",
                  },
                  {
                    icon: "🔒",
                    title: "Enterprise Security",
                    desc: "SOC 2 Type II Compliance",
                  },
                  {
                    icon: "⚡",
                    title: "Custom Deployment",
                    desc: "On-premise + Cloud Options",
                  },
                  {
                    icon: "👥",
                    title: "Dedicated Support",
                    desc: "24/7 Professional Assistance",
                  },
                  {
                    icon: "📈",
                    title: "Scalable Architecture",
                    desc: "Auto-scaling Infrastructure",
                  },
                  {
                    icon: "🏛️",
                    title: "Patent Protection",
                    desc: "Proprietary Technology Access",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="font-medium text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-20 max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4bd0a5e2c3064329987dec9cf3eba462?format=webp&width=800"
                  alt="Cookin Knowledge"
                  className="w-32 mx-auto mb-8 opacity-70"
                />
              </div>

              <h2
                className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Ready to Scale Your
                <br />
                <span className="text-[#FFD700] font-medium">
                  Professional Operations?
                </span>
              </h2>
              <p
                className="text-xl text-white/70 mb-12 font-light max-w-3xl mx-auto"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                Join elite professionals who choose strategic AI execution over
                simple conversation tools
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
                    Start Professional Trial
                  </button>
                </Link>
                <Link href="/enterprise">
                  <button
                    className="border-2 border-white/30 text-white hover:bg-white/5 hover:border-[#FFD700]/50 font-medium rounded-xl px-12 py-4 transition-all duration-200 text-lg"
                    style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                  >
                    Contact Enterprise
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
