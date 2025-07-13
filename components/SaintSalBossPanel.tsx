"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mood Detection Types
type MoodState =
  | "calm"
  | "frustrated"
  | "overwhelmed"
  | "confused"
  | "urgent"
  | "excited";
type IntentGuess =
  | "funding"
  | "crm"
  | "ai-assistant"
  | "demo"
  | "support"
  | "learning";

interface EmotionalState {
  mood: MoodState;
  confidence: number;
  suggestion: string;
  emoji: string;
}

interface IntentDrawerItem {
  id: IntentGuess;
  label: string;
  icon: string;
  confidence: number;
}

interface SaintSalBossPanelProps {
  isVisible?: boolean;
  onToggle?: () => void;
  currentInput?: string;
  messages?: any[];
}

export function SaintSalBossPanel({
  isVisible = false,
  onToggle,
  currentInput = "",
  messages = [],
}: SaintSalBossPanelProps) {
  const [emotionalState, setEmotionalState] = useState<EmotionalState>({
    mood: "calm",
    confidence: 85,
    suggestion: "I'm here and ready to help",
    emoji: "😐",
  });

  const [intentGuesses, setIntentGuesses] = useState<IntentDrawerItem[]>([]);
  const [showIntentDrawer, setShowIntentDrawer] = useState(false);
  const [escalationLevel, setEscalationLevel] = useState(0); // 0-3
  const [isProcessing, setIsProcessing] = useState(false);

  // Analyze mood from text input
  const analyzeMood = (text: string): EmotionalState => {
    const frustrationWords = [
      "wtf",
      "bs",
      "this is",
      "doesn't work",
      "frustrated",
      "angry",
      "stupid",
    ];
    const overwhelmedWords = [
      "too much",
      "confused",
      "don't understand",
      "help me",
      "lost",
    ];
    const urgentWords = ["asap", "urgent", "now", "immediately", "emergency"];
    const calmWords = ["thank", "please", "can you", "would you", "appreciate"];

    const lowerText = text.toLowerCase();

    let frustrationScore = 0;
    let overwhelmedScore = 0;
    let urgentScore = 0;
    let calmScore = 0;

    frustrationWords.forEach((word) => {
      if (lowerText.includes(word)) frustrationScore++;
    });

    overwhelmedWords.forEach((word) => {
      if (lowerText.includes(word)) overwhelmedScore++;
    });

    urgentWords.forEach((word) => {
      if (lowerText.includes(word)) urgentScore++;
    });

    calmWords.forEach((word) => {
      if (lowerText.includes(word)) calmScore++;
    });

    // Determine dominant mood
    if (frustrationScore > 1) {
      return {
        mood: "frustrated",
        confidence: Math.min(95, 60 + frustrationScore * 15),
        suggestion: "Frustrated — Let me simplify this",
        emoji: "😤",
      };
    }

    if (overwhelmedScore > 1) {
      return {
        mood: "overwhelmed",
        confidence: Math.min(90, 65 + overwhelmedScore * 12),
        suggestion: "Overwhelmed — Let me walk you through this",
        emoji: "🤯",
      };
    }

    if (urgentScore > 0) {
      return {
        mood: "urgent",
        confidence: Math.min(88, 70 + urgentScore * 18),
        suggestion: "Urgent — I'll prioritize this",
        emoji: "🚨",
      };
    }

    return {
      mood: "calm",
      confidence: 85,
      suggestion: "Calm & Focused",
      emoji: "😐",
    };
  };

  // Analyze intent from text
  const analyzeIntent = (text: string): IntentDrawerItem[] => {
    const intents: IntentDrawerItem[] = [];
    const lowerText = text.toLowerCase();

    // Funding keywords
    if (
      lowerText.includes("funding") ||
      lowerText.includes("money") ||
      lowerText.includes("investment")
    ) {
      intents.push({
        id: "funding",
        label: "Qualify for funding",
        icon: "💰",
        confidence: 85,
      });
    }

    // CRM keywords
    if (
      lowerText.includes("crm") ||
      lowerText.includes("customer") ||
      lowerText.includes("client")
    ) {
      intents.push({
        id: "crm",
        label: "Understand your CRM",
        icon: "📊",
        confidence: 80,
      });
    }

    // AI Assistant keywords
    if (
      lowerText.includes("ai") ||
      lowerText.includes("assistant") ||
      lowerText.includes("bot")
    ) {
      intents.push({
        id: "ai-assistant",
        label: "Build an AI assistant",
        icon: "🤖",
        confidence: 90,
      });
    }

    // Demo keywords
    if (
      lowerText.includes("demo") ||
      lowerText.includes("show me") ||
      lowerText.includes("example")
    ) {
      intents.push({
        id: "demo",
        label: "See a demo",
        icon: "🎯",
        confidence: 75,
      });
    }

    return intents.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
  };

  // Real-time analysis
  useEffect(() => {
    if (currentInput.length > 5) {
      setIsProcessing(true);

      setTimeout(() => {
        const newMood = analyzeMood(currentInput);
        const newIntents = analyzeIntent(currentInput);

        setEmotionalState(newMood);
        setIntentGuesses(newIntents);
        setShowIntentDrawer(newIntents.length > 0);
        setIsProcessing(false);

        // Auto-escalation logic
        if (newMood.mood === "frustrated" && newMood.confidence > 80) {
          setEscalationLevel(2);
        } else if (newMood.mood === "overwhelmed" && newMood.confidence > 75) {
          setEscalationLevel(1);
        }
      }, 500);
    }
  }, [currentInput]);

  const getMoodGradient = (mood: MoodState) => {
    switch (mood) {
      case "frustrated":
        return "from-red-500 to-orange-500";
      case "overwhelmed":
        return "from-purple-500 to-pink-500";
      case "urgent":
        return "from-yellow-500 to-red-500";
      case "excited":
        return "from-green-400 to-blue-500";
      case "confused":
        return "from-gray-400 to-blue-400";
      default:
        return "from-blue-500 to-indigo-600";
    }
  };

  const getEscalationMessage = () => {
    switch (escalationLevel) {
      case 1:
        return "Let me take a different angle.";
      case 2:
        return "Sal's stepping in to handle this personally.";
      case 3:
        return "Escalating to divine-level support.";
      default:
        return "I'm here and adapting to help you.";
    }
  };

  return (
    <>
      {/* Boss Panel Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onToggle}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
          title="SAINTSAL Command Center"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
            alt="SaintSal Boss"
            className="w-10 h-10 object-cover rounded-full"
          />
        </button>
      </motion.div>

      {/* Boss Panel Interface */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
          >
            <motion.div
              className="fixed bottom-24 right-6 w-96 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0, x: 100 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0, x: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">
                        S
                      </span>
                    </div>
                    <div>
                      <h3 className="text-black font-bold text-lg">
                        SaintSal™ Boss
                      </h3>
                      <p className="text-black/70 text-xs">
                        Divine Intelligence Online
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onToggle}
                    className="text-black hover:text-black/70 text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Emotional Sync Display */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {emotionalState.emoji}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">
                        Emotional Sync
                      </span>
                      <span className="text-yellow-400 text-xs">
                        {emotionalState.confidence}%
                      </span>
                    </div>
                    <div
                      className={`h-2 bg-gradient-to-r ${getMoodGradient(emotionalState.mood)} rounded-full`}
                    >
                      <motion.div
                        className="h-full bg-white/30 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${emotionalState.confidence}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  {emotionalState.suggestion}
                </p>
              </div>

              {/* Intent Drawer */}
              <AnimatePresence>
                {showIntentDrawer && intentGuesses.length > 0 && (
                  <motion.div
                    className="p-4 border-b border-gray-700"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <h4 className="text-white font-medium mb-3 text-sm">
                      I think you're trying to:
                    </h4>
                    <div className="space-y-2">
                      {intentGuesses.map((intent) => (
                        <button
                          key={intent.id}
                          className="w-full flex items-center space-x-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <span className="text-lg">{intent.icon}</span>
                          <span className="text-white text-sm flex-1 text-left">
                            {intent.label}
                          </span>
                          <span className="text-yellow-400 text-xs">
                            {intent.confidence}%
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Escalation Status */}
              {escalationLevel > 0 && (
                <motion.div
                  className="p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border-b border-gray-700"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">🚨</span>
                    <span className="text-white text-sm font-medium">
                      Escalation Level {escalationLevel}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mt-1">
                    {getEscalationMessage()}
                  </p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="p-4 space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all">
                  🧭 Walk Me Through This
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition-colors">
                    📞 Get Boss
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg text-sm transition-colors">
                    💾 Save Session
                  </button>
                </div>

                {isProcessing && (
                  <div className="flex items-center justify-center py-2">
                    <motion.div
                      className="w-4 h-4 bg-yellow-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-gray-400 text-xs ml-2">
                      Analyzing...
                    </span>
                  </div>
                )}
              </div>

              {/* HACP Status */}
              <div className="bg-black/50 p-3 text-center">
                <p className="text-yellow-400 text-xs">
                  ⚡ HACP™ Protocol Active • US Patent 10,290,222
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SaintSalBossPanel;
