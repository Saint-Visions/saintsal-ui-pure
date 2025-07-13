"use client";
import React from "react";
import { Crown, Zap, ArrowRight, Rocket } from "lucide-react";

interface UpgradeCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  plan?: "starter" | "pro" | "elite" | "legendary" | "custom";
  variant?: "default" | "premium" | "compact";
  className?: string;
}

export default function UpgradeCTA({
  title = "Upgrade to Pro Saint",
  description = "Unlock unlimited AI cooking knowledge",
  buttonText = "🔥 Upgrade Now",
  plan = "pro",
  variant = "default",
  className = "",
}: UpgradeCTAProps) {
  const planConfigs = {
    starter: {
      price: "$27",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      stripePriceId: "price_starter_monthly",
    },
    pro: {
      price: "$97",
      icon: <Crown className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      stripePriceId: "price_1RINIMFZsXxBWnjQEYxlyUIy",
    },
    elite: {
      price: "$297",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      stripePriceId: "price_elite_monthly",
    },
    legendary: {
      price: "$497",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      stripePriceId: "price_legendary_monthly",
    },
    custom: {
      price: "$1,500",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      stripePriceId: "price_custom_deposit",
    },
  };

  const currentPlan = planConfigs[plan];

  const handleUpgrade = async () => {
    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: currentPlan.stripePriceId,
          planName: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Saint`,
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Upgrade error:", error);
    }
  };

  if (variant === "compact") {
    return (
      <div
        className={`bg-gray-900 border border-yellow-500/30 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 bg-gradient-to-br ${currentPlan.color} rounded-lg flex items-center justify-center`}
            >
              <div className="text-white">{currentPlan.icon}</div>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold text-sm">{title}</p>
              <p className="text-white/70 text-xs">{description}</p>
            </div>
          </div>
          <button
            onClick={handleUpgrade}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            {currentPlan.price}
          </button>
        </div>
      </div>
    );
  }

  if (variant === "premium") {
    return (
      <div
        className={`bg-gradient-to-br ${currentPlan.color} rounded-xl p-6 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
          <div className="text-white">{currentPlan.icon}</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <div className="text-3xl font-bold text-white mb-4">
          {currentPlan.price}
          <span className="text-lg">/month</span>
        </div>
        <button
          onClick={handleUpgrade}
          className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg transition-all duration-200"
        >
          {buttonText}
        </button>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`bg-gray-900 border border-yellow-500/30 rounded-xl p-6 text-center ${className}`}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${currentPlan.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
      >
        <div className="text-white">{currentPlan.icon}</div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="text-2xl font-bold text-yellow-400 mb-4">
        {currentPlan.price}
        <span className="text-lg text-gray-400">/month</span>
      </div>
      <button
        onClick={handleUpgrade}
        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200"
      >
        {buttonText}
      </button>
    </div>
  );
}
