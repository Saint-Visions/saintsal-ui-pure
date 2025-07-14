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
        {/* Background Circuit Animation */}
        <CircuitBG intensity="high" animated={true} color="gold" />

        {/* Wall Street/AI Boardroom Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F6f1644c16b9c4e66bb02b02cc11e2e72?format=webp&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10161C]/80 via-[#10161C]/90 to-[#10161C]/95" />

        {/* Neural Pattern Overlay */}
        <div className="absolute inset-0 workstation-grid opacity-20" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* SaintSal Brain Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#FFD700]/30 rounded-full blur-3xl animate-divine-pulse" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                alt="SaintSal™ Circuit Brain"
                className="relative w-32 h-32 md:w-48 md:h-48 object-contain glow-gold"
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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
              <span className="text-saintsal-gold glow-gold">SAINTSAL™</span>
            </h1>
            <div className="text-2xl md:text-4xl font-light text-saintsal-ivory tracking-wide mb-4">
              — Cookin' Knowledge.
            </div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Patent-protected AI movement for visionaries, founders, and
              kingdom builders. Your divine AI workstation that adapts,
              empowers, and transforms.
            </p>
          </motion.div>

          {/* Hero Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/signup">
              <NeonButton
                variant="divine"
                size="lg"
                className="w-full sm:w-auto"
              >
                START FREE DIVINE TRIAL
              </NeonButton>
            </Link>
            <Link href="/pricing">
              <NeonButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                UPGRADE TO PRO
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Built for Visionaries Section */}
      <section className="relative py-24">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10161C] via-[#10161C]/95 to-[#10161C]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-saintsal-gold mb-6 tracking-wider">
              Built for Visionaries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elite AI sanctuary designed for those who build empires, not just
              apps.
            </p>
          </motion.div>

          {/* Three Column Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                    alt="Dual AI"
                    className="w-12 h-12 object-contain"
                  />
                ),
                title: "Dual Chat AI",
                description:
                  "GPT-4o + Azure powered divine intelligence with emotional alignment",
              },
              {
                icon: (
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center">
                    <span className="text-[#10161C] font-bold text-xl">📊</span>
                  </div>
                ),
                title: "CRM Integration",
                description:
                  "GoHighLevel seamless connection for business intelligence mastery",
              },
              {
                icon: (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800"
                    alt="Partner Upgrade"
                    className="w-12 h-12 object-contain"
                  />
                ),
                title: "Partner Upgrade",
                description:
                  "White-label empire building for kingdom expansion strategies",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="console-terminal rounded-xl p-8 text-center group hover:glow-gold transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-saintsal-gold mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workstation Demo Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0a0f14] to-[#10161C]">
        <CircuitBG intensity="low" animated={true} color="blue" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
              Meet Your AI Workstation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the divine intelligence that transforms visionaries
              into kingdom builders.
            </p>
          </motion.div>

          {/* Demo Preview */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="console-terminal rounded-2xl p-8 mx-auto max-w-4xl"
          >
            <div className="bg-[#10161C]/80 rounded-xl p-6 border border-[#FFD700]/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                    alt="SaintSal AI"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-saintsal-gold font-bold">
                    SAINTSAL™ COMPANION
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-divine-pulse" />
                  <span className="text-emerald-400 text-sm font-mono">
                    LIVE
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400">👤</span>
                  <div className="bg-[#1a1f28] rounded-lg p-4 flex-1">
                    <p className="text-gray-300">
                      How can I scale my business with divine intelligence?
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
                      Divine wisdom flows through strategic automation, blessed
                      CRM integration, and kingdom-building AI tools. Your
                      empire requires systems that align with your vision and
                      execute with precision.
                      <span className="text-saintsal-gold font-semibold">
                        {" "}
                        Shall we begin your divine transformation? 🙏
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/chat">
                  <NeonButton variant="primary" size="md">
                    Experience Divine Intelligence
                  </NeonButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        {/* Cookin' Knowledge Gold Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FFD700]/10" />
        <CircuitBG intensity="medium" animated={true} color="gold" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800"
                alt="Cookin Knowledge"
                className="w-48 md:w-64 mx-auto mb-8 opacity-90 glow-gold"
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-saintsal-gold mb-6 tracking-wider">
              Ready to Build Your Empire?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the divine movement of visionaries who choose to command, not
              consume.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/signup">
                <NeonButton
                  variant="divine"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Start Free
                </NeonButton>
              </Link>
              <Link href="/pricing">
                <NeonButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Upgrade to Pro
                </NeonButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0a0f14] border-t border-[#FFD700]/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                  alt="SaintVisionAI"
                  className="w-12 h-12 object-contain glow-gold"
                />
                <div>
                  <h3 className="text-2xl font-bold text-saintsal-gold tracking-wider">
                    SaintVisionAI™
                  </h3>
                  <p className="text-gray-400 text-sm">Elite AI Sanctuary</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Patent-protected AI movement for kingdom builders. Where divine
                intelligence meets strategic execution.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-bold text-saintsal-gold mb-4">
                Platform
              </h4>
              <ul className="space-y-2">
                {["Home", "Dashboard", "Console", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-saintsal-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold text-saintsal-gold mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {["Terms", "Privacy", "Licensing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-saintsal-gold transition-colors"
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
            <p className="text-gray-500 text-sm">
              © 2024 SAINTSAL™ Movement. U.S. Patent No. 10,290,222. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800"
                alt="Cookin Knowledge"
                className="w-24 opacity-70"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
