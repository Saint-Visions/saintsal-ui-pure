"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";
import CinematicOnboarding from "../../components/CinematicOnboarding";
import KnowledgeCapsules from "../../components/KnowledgeCapsules";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  model: "gpt4" | "claude" | "saintsal";
  timestamp: Date;
  mood?: string;
}

interface AIModel {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  available: boolean;
}

export default function ConsolePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("saintsal");
  const [dualMode, setDualMode] = useState(false);
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const aiModels: AIModel[] = [
    {
      id: "saintsal",
      name: "SaintSal™ AI",
      description: "Divine intelligence with HACP™ Protocol",
      icon: "👑",
      color: "from-yellow-500 to-yellow-600",
      available: true,
    },
    {
      id: "gpt4",
      name: "GPT-4o",
      description: "OpenAI's most advanced model",
      icon: "🧠",
      color: "from-green-500 to-green-600",
      available: true,
    },
    {
      id: "claude",
      name: "Claude 3.5",
      description: "Anthropic's reasoning champion",
      icon: "⚡",
      color: "from-purple-500 to-purple-600",
      available: true,
    },
  ];

  // Initialize with welcome message
  useEffect(() => {
    setTimeout(() => {
      const welcomeMessage: Message = {
        id: "welcome",
        role: "assistant",
        content:
          "Welcome to the SaintSal™ Console - your dual-AI command center. I can work alongside GPT-4 and Claude, or handle everything myself with divine intelligence. What would you like to achieve today?",
        model: "saintsal",
        timestamp: new Date(),
        mood: "excited",
      };
      setMessages([welcomeMessage]);
    }, 1000);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage,
      model: selectedModel as any,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Simulate AI response based on selected model
      setTimeout(() => {
        let response = "";
        let mood = "calm";

        if (dualMode) {
          // Dual mode response
          const responses = generateDualResponse(inputMessage, selectedModel);
          responses.forEach((resp, index) => {
            setTimeout(() => {
              const aiMessage: Message = {
                id: `${Date.now()}-${index}`,
                role: "assistant",
                content: resp.content,
                model: resp.model as any,
                timestamp: new Date(),
                mood: resp.mood,
              };
              setMessages((prev) => [...prev, aiMessage]);
            }, index * 1500);
          });
        } else {
          // Single model response
          response = generateSingleResponse(inputMessage, selectedModel);
          mood = analyzeMood(inputMessage);

          const aiMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: response,
            model: selectedModel as any,
            timestamp: new Date(),
            mood,
          };
          setMessages([...newMessages, aiMessage]);
        }

        setIsLoading(false);
      }, 1200);
    } catch (error) {
      console.error("Console error:", error);
      setIsLoading(false);
    }
  };

  const generateSingleResponse = (input: string, model: string) => {
    const lowerInput = input.toLowerCase();

    switch (model) {
      case "saintsal":
        if (lowerInput.includes("funding")) {
          return "I see you're exploring funding options. As your divine intelligence partner, I can guide you through grant applications, investor pitch strategies, and alternative funding sources. I'll adapt my approach based on your specific situation and goals.";
        }
        return "I'm SaintSal™ - your adaptive AI companion. I don't just answer questions; I become exactly what you need. Whether you're building, learning, or solving complex challenges, I'll guide you with divine intelligence.";

      case "gpt4":
        return "I'm GPT-4, OpenAI's most advanced language model. I can help you with complex reasoning, creative tasks, coding, analysis, and provide detailed explanations across virtually any domain.";

      case "claude":
        return "I'm Claude 3.5 from Anthropic. I excel at thoughtful analysis, careful reasoning, and nuanced conversations. I'm particularly strong at understanding context and providing balanced perspectives.";

      default:
        return "I'm ready to assist you with whatever you need.";
    }
  };

  const generateDualResponse = (input: string, primaryModel: string) => {
    return [
      {
        content: generateSingleResponse(input, primaryModel),
        model: primaryModel,
        mood: "calm",
      },
      {
        content: generateSingleResponse(
          input,
          primaryModel === "gpt4" ? "claude" : "gpt4",
        ),
        model: primaryModel === "gpt4" ? "claude" : "gpt4",
        mood: "analytical",
      },
    ];
  };

  const analyzeMood = (input: string) => {
    if (input.toLowerCase().includes("frustrated")) return "frustrated";
    if (input.toLowerCase().includes("confused")) return "overwhelmed";
    if (input.toLowerCase().includes("urgent")) return "urgent";
    return "calm";
  };

  const getModelStyle = (modelId: string) => {
    const model = aiModels.find((m) => m.id === modelId);
    return model?.color || "from-gray-500 to-gray-600";
  };

  const getModelIcon = (modelId: string) => {
    const model = aiModels.find((m) => m.id === modelId);
    return model?.icon || "🤖";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="bg-black/50 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
                alt="SaintSal Logo"
                className="w-6 h-6 object-cover rounded"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">SaintSal™ Console</h1>
              <p className="text-gray-400 text-sm">Dual-AI Command Center</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDualMode(!dualMode)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                dualMode
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {dualMode ? "🔀 Dual Mode" : "⚡ Single Mode"}
            </button>

            <button
              onClick={() => setShowBossPanel(true)}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-lg transition-all"
            >
              👑 Boss
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-gray-900/50 border-r border-gray-700 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">AI Models</h3>
              <div className="space-y-2">
                {aiModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    disabled={!model.available}
                    className={`w-full p-4 rounded-xl transition-all ${
                      selectedModel === model.id
                        ? `bg-gradient-to-r ${model.color} text-white`
                        : model.available
                          ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                          : "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{model.icon}</span>
                      <div className="text-left">
                        <h4 className="font-bold">{model.name}</h4>
                        <p className="text-xs opacity-80">
                          {model.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-2">Console Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Messages</span>
                  <span className="text-white">{messages.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Model</span>
                  <span className="text-yellow-400">
                    {aiModels.find((m) => m.id === selectedModel)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mode</span>
                  <span className="text-purple-400">
                    {dualMode ? "Dual" : "Single"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-3xl">S</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Console Ready
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Choose your AI model and start a conversation. Enable dual
                  mode for collaborative AI responses.
                </p>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-2xl rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-black ml-12"
                          : `bg-gradient-to-r ${getModelStyle(message.model)} text-white mr-12`
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <span className="text-xl">
                          {message.role === "user"
                            ? "👤"
                            : getModelIcon(message.model)}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-bold text-sm">
                              {message.role === "user"
                                ? "You"
                                : aiModels.find((m) => m.id === message.model)
                                    ?.name || "AI"}
                            </span>
                            {message.mood && (
                              <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                                {message.mood}
                              </span>
                            )}
                          </div>
                          <p className="leading-relaxed">{message.content}</p>
                          <p className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}

            {isLoading && (
              <div className="flex justify-start">
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
                      Processing with{" "}
                      {aiModels.find((m) => m.id === selectedModel)?.name}...
                    </span>
                  </div>
                </div>
              </div>
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
                  placeholder={`Ask ${aiModels.find((m) => m.id === selectedModel)?.name || "AI"}... ${dualMode ? "(Dual mode active)" : ""}`}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:from-gray-600 disabled:to-gray-700 text-black disabled:text-gray-400 p-3 rounded-xl font-bold transition-all"
              >
                {isLoading ? "🔥" : "➤"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Boss Panel */}
      <SaintSalBossPanel
        isVisible={showBossPanel}
        onToggle={() => setShowBossPanel(!showBossPanel)}
        currentInput={inputMessage}
        messages={messages}
      />

      {/* Knowledge Capsules */}
      <KnowledgeCapsules currentMessages={messages} />

      {/* Cinematic Onboarding */}
      <CinematicOnboarding
        isFirstTime={showOnboarding}
        onComplete={() => setShowOnboarding(false)}
      />
    </div>
  );
}
