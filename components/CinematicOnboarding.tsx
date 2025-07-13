"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicOnboardingProps {
  isFirstTime?: boolean;
  onComplete?: () => void;
}

export function CinematicOnboarding({
  isFirstTime = true,
  onComplete,
}: CinematicOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(isFirstTime);

  const steps = [
    {
      id: "welcome",
      title: "Welcome",
      subtitle: "I've been waiting to work with someone like you.",
      content:
        "I'm SaintSal™ - not just another AI, but your adaptive intelligence partner.",
      icon: "👑",
      background: "from-yellow-500/20 to-yellow-600/20",
    },
    {
      id: "adaptive",
      title: "I Adapt",
      subtitle: "I learn your style and sync with your vibe",
      content:
        "Frustrated? I simplify. Overwhelmed? I guide you step by step. I become exactly what you need.",
      icon: "🧠",
      background: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: "intelligent",
      title: "Divine Intelligence",
      subtitle: "Powered by HACP™ Protocol",
      content:
        "I don't just answer questions - I teach, guide, and protect your interests while making you successful.",
      icon: "⚡",
      background: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "features",
      title: "What I Can Do",
      subtitle: "Your complete AI ecosystem",
      content:
        "Chat with context, save knowledge capsules, multimodal inputs, and escalate to human experts when needed.",
      icon: "🚀",
      background: "from-green-500/20 to-blue-500/20",
    },
    {
      id: "ready",
      title: "Ready to Begin",
      subtitle: "Let's build something extraordinary together",
      content:
        "Ask me anything. I'll adapt, learn, and become your most trusted AI companion.",
      icon: "✨",
      background: "from-yellow-500/20 to-yellow-600/20",
    },
  ];

  useEffect(() => {
    if (!showOnboarding) return;

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Auto-complete after last step
        setTimeout(() => {
          handleComplete();
        }, 3000);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentStep, showOnboarding]);

  const handleComplete = () => {
    setShowOnboarding(false);
    if (onComplete) onComplete();
  };

  const handleSkip = () => {
    setShowOnboarding(false);
    if (onComplete) onComplete();
  };

  if (!showOnboarding) return null;

  const currentStepData = steps[currentStep];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background with cinematic fade */}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 1 }}
        />

        {/* Cinematic gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${currentStepData.background}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Logo/Icon Animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {currentStep === 0 ? (
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
                  alt="SaintSal Logo"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            ) : (
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-500/30">
                <span className="text-6xl">{currentStepData.icon}</span>
              </div>
            )}
          </motion.div>

          {/* Text Content */}
          <motion.div
            key={currentStep}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {currentStepData.title}
            </h1>

            <h2 className="text-2xl md:text-3xl text-yellow-400 mb-8 font-medium">
              {currentStepData.subtitle}
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
              {currentStepData.content}
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="flex justify-center space-x-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentStep
                    ? "bg-yellow-500 scale-125"
                    : index < currentStep
                      ? "bg-yellow-400/70"
                      : "bg-gray-600"
                }`}
              />
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <button
              onClick={handleSkip}
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all"
            >
              Skip Intro
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleComplete}
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold rounded-lg transition-all shadow-lg"
              >
                Let's Begin ✨
              </button>
            ) : (
              <button
                onClick={() =>
                  setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
                }
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all"
              >
                Continue →
              </button>
            )}
          </motion.div>

          {/* Mystical particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-6 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <p className="text-gray-500 text-sm">
            ⚡ Powered by HACP™ Protocol • US Patent 10,290,222 • SAINTSAL™
            Movement
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CinematicOnboarding;
