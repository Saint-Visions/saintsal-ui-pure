"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CircuitBG from "../components/saintsal/CircuitBG";
import NeonButton from "../components/saintsal/NeonButton";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#10161C] text-white font-jetbrains overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <CircuitBG intensity="medium" animated={true} color="gold" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#10161C]/80 via-[#10161C]/85 to-[#10161C]/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
              alt="SaintSal™"
              className="w-16 h-16 mx-auto mb-4 glow-gold"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-saintsal-gold tracking-wider">
              SAINTSAL™
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-light text-saintsal-ivory mb-4">
              — Cookin' Knowledge.
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The only intent-triggered SaaS platform that simplifies actions,
              not just collects data.
            </p>
          </motion.div>

          {/* Status Badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Patent #10,290,222 Protected
            </div>
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              🏢 HACP - Patent Pending
            </div>
          </motion.div>

          {/* Main Offer */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
              Ready to Transform Your Lead Generation?
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Join other patent-protected platform that truly understand how to
              execute and turn their visitors into customers.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/signup">
              <NeonButton
                variant="divine"
                size="md"
                className="w-full sm:w-auto"
              >
                Get Premium Access
              </NeonButton>
            </Link>
            <Link href="/crm">
              <NeonButton
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                SaintSal Multi-Channel Selling
              </NeonButton>
            </Link>
            <Link href="/pricing">
              <NeonButton
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Find Partners
              </NeonButton>
            </Link>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8 text-center"
          >
            <div className="text-2xl font-bold text-saintsal-gold mb-2">
              $27-$497
            </div>
            <div className="text-sm text-gray-400">
              Monthly pricing • NO setup fees • $0 credit check required •
              Cancel anytime
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#0a0f14] to-[#10161C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Azure Enterprise",
                subtitle: "Infrastructure Ready",
                description: "Enterprise-grade platform that scales",
                color: "bg-blue-600",
              },
              {
                title: "Patent Protected",
                subtitle: "Innovation Secured",
                description: "Proprietary technology and methods",
                color: "bg-yellow-500",
              },
              {
                title: "CRM Integration",
                subtitle: "Business Intelligence",
                description: "Seamless workflow automation",
                color: "bg-purple-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="console-terminal rounded-lg p-6 text-center"
              >
                <div
                  className={`${item.color} w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-saintsal-gold mb-2">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0a0f14] border-t border-[#FFD700]/20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                  alt="SaintVisionAI"
                  className="w-10 h-10 object-contain glow-gold"
                />
                <div>
                  <h3 className="text-lg font-bold text-saintsal-gold tracking-wider">
                    SaintVisionAI™
                  </h3>
                  <p className="text-gray-400 text-sm">Elite AI Sanctuary</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Patent-protected AI movement for kingdom builders. Where divine
                intelligence meets strategic execution.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-bold text-saintsal-gold mb-3">
                Platform
              </h4>
              <ul className="space-y-2">
                {["Home", "Dashboard", "Console", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-saintsal-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-bold text-saintsal-gold mb-3">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Licensing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-saintsal-gold transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#FFD700]/10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">
              © 2024 SAINTSAL™ Movement. U.S. Patent No. 10,290,222. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800"
                alt="Cookin Knowledge"
                className="w-20 opacity-70"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
