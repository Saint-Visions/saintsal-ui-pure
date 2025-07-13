"use client";

import React, { useState, useRef, useEffect } from "react";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";
import CinematicOnboarding from "../../components/CinematicOnboarding";
import KnowledgeCapsules from "../../components/KnowledgeCapsules";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: string;
  content: string;
  timestamp?: Date;
  mood?: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [walkThroughMode, setWalkThroughMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with cinematic welcome
  useEffect(() => {
    setTimeout(() => {
      const welcomeMessage: Message = {
        role: "assistant",
        content:
          "Welcome. I've been waiting to work with someone like you. I'm SaintSal™ - your adaptive AI companion. I adapt to your vibe, teach as I guide, and become smarter with every interaction. What can I help you achieve today?",
        timestamp: new Date(),
        mood: "excited",
      };
      setMessages([welcomeMessage]);
    }, 1000);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Simulate intelligent response with HACP logic
      setTimeout(() => {
        let response = "";
        let mood = "calm";

        // Check for escalation triggers
        const input = inputMessage.toLowerCase();
        if (
          input.includes("frustrated") ||
          input.includes("wtf") ||
          input.includes("bs")
        ) {
          mood = "frustrated";
          response =
            "I can sense your frustration. Let me take a different angle and simplify this for you. What specific challenge are you facing?";
        } else if (
          input.includes("confused") ||
          input.includes("don't understand") ||
          input.includes("help")
        ) {
          mood = "overwhelmed";
          response =
            "No worries - I'm here to walk you through this step by step. Let me break this down in a way that makes perfect sense.";
        } else if (walkThroughMode) {
          // Step-by-step explanation mode
          const steps = [
            "Step 1: Let's define exactly what you need",
            "Step 2: I'll simplify the approach for you",
            "Step 3: Here's what you can do right now",
            "Step 4: Want me to handle this for you?",
          ];
          response = `${steps[currentStep - 1]} - ${getStepContent(currentStep, inputMessage)}`;
          setCurrentStep((prev) => (prev < 4 ? prev + 1 : 1));
        } else {
          // Adaptive responses based on context
          if (input.includes("funding") || input.includes("money")) {
            response =
              "I can help you navigate funding opportunities. Based on your needs, I'm thinking you might want to qualify for grants, understand investor requirements, or explore alternative funding. Which direction feels right?";
          } else if (input.includes("ai") || input.includes("assistant")) {
            response =
              "Perfect! Building AI assistants is my specialty. I can guide you through everything from concept to deployment. Are you looking to create a customer service bot, internal tool, or something more advanced?";
          } else if (input.includes("crm") || input.includes("customer")) {
            response =
              "CRM optimization is crucial for growth. I can help you streamline your customer management, automate workflows, or integrate AI-powered insights. What's your biggest CRM challenge right now?";
          } else {
            response =
              "I understand what you're looking for. Let me provide you with a solution that actually works. Here's how we can approach this...";
          }
        }

        const aiMessage: Message = {
          role: "assistant",
          content: response,
          timestamp: new Date(),
          mood,
        };
        setMessages([...newMessages, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content:
          "I'm experiencing a momentary sync issue. Let me escalate this to ensure you get the help you need.",
        timestamp: new Date(),
        mood: "urgent",
      };
      setMessages([...newMessages, errorMessage]);
      setIsLoading(false);
    }
  };

  const getStepContent = (step: number, input: string) => {
    switch (step) {
      case 1:
        return "Based on your message, I'm identifying the core need.";
      case 2:
        return "Here's the simplified approach that works.";
      case 3:
        return "These are your immediate next steps.";
      case 4:
        return "I can take this over completely if you'd prefer.";
      default:
        return "Let's continue working together.";
    }
  };

  const getMoodEmoji = (mood?: string) => {
    switch (mood) {
      case "frustrated":
        return "😤";
      case "overwhelmed":
        return "🤯";
      case "urgent":
        return "🚨";
      case "excited":
        return "✨";
      default:
        return "🤖";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex">
      {/* Chat Sidebar */}
      <div className="w-80 bg-gradient-to-b from-gray-900/50 to-black/80 border-r border-yellow-500/20 p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
              alt="SaintSal Logo"
              className="w-8 h-8 object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-yellow-400 font-bold text-lg">SaintSal™ AI</h2>
            <p className="text-gray-400 text-sm">Divine Intelligence</p>
          </div>
        </div>

        {/* Mode Controls */}
        <div className="space-y-4 mb-8">
          <button
            onClick={() => setWalkThroughMode(!walkThroughMode)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
              walkThroughMode
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <span>🧭</span>
            <span className="text-sm font-medium">Walk Me Through This</span>
          </button>

          <button
            onClick={() => setShowBossPanel(true)}
            className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-lg transition-all"
          >
            <span>👑</span>
            <span className="text-sm font-medium text-black">Boss Mode</span>
          </button>
        </div>

        {/* Status Indicators */}
        <div className="space-y-3">
          <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">HACP™ Status</span>
              <span className="text-xs text-green-400">Active</span>
            </div>
            <div className="h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-green-400 rounded-full w-3/4"></div>
            </div>
          </div>

          <div className="text-xs text-gray-500 text-center">
            <p>⚡ Adaptive Intelligence Online</p>
            <p>US Patent 10,290,222</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-black/50 border-b border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">
                SaintSal™ Command Center
              </h1>
              <p className="text-gray-400 text-sm">
                Your adaptive AI that learns and evolves
              </p>
            </div>
            {walkThroughMode && (
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-1">
                <span className="text-blue-400 text-sm">
                  Step {currentStep}/4 Mode
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-black font-bold text-3xl">S</span>
              </div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-3">
                SaintSal™ AI Ready
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                I'm your adaptive companion that learns your style, anticipates
                your needs, and becomes smarter with every interaction.
              </p>
            </motion.div>
          ) : (
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-2xl rounded-2xl p-4 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-black ml-12"
                        : "bg-gradient-to-r from-gray-800 to-gray-700 text-white mr-12"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">
                        {message.role === "user"
                          ? "���"
                          : getMoodEmoji(message.mood)}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-bold text-sm">
                            {message.role === "user" ? "You" : "SaintSal AI"}
                          </span>
                          {message.mood && message.role === "assistant" && (
                            <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                              {message.mood}
                            </span>
                          )}
                        </div>
                        <p className="leading-relaxed">{message.content}</p>
                        {message.timestamp && (
                          <p className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {isLoading && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-gray-800 rounded-2xl p-4 mr-12">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-gray-400 text-sm">
                    SaintSal is adapting response...
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-black/50 border-t border-gray-700 p-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask SaintSal anything... I adapt to help you succeed."
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:from-gray-600 disabled:to-gray-700 text-black disabled:text-gray-400 p-3 rounded-xl font-bold transition-all shadow-lg"
            >
              {isLoading ? "🔥" : "➤"}
            </button>
          </div>

          <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
            <span>⚡ HACP™ Protocol Active • Adaptive Intelligence</span>
            <span>{messages.length} interactions</span>
          </div>
        </div>
      </div>

      {/* SaintSal Boss Panel */}
      <SaintSalBossPanel
        isVisible={showBossPanel}
        onToggle={() => setShowBossPanel(!showBossPanel)}
        currentInput={inputMessage}
        messages={messages}
      />
    </div>
  );
}
