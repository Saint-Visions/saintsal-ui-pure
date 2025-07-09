"use client";
import React, { useState } from "react";
import { X, Check, Zap, Crown, Rocket } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan?: string;
}

export default function UpgradeModal({
  isOpen,
  onClose,
  currentPlan = "free",
}: UpgradeModalProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter Saint",
      price: "$27",
      period: "/month",
      description: "Perfect for cooking enthusiasts",
      icon: <Zap className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      features: [
        "AI Chat Sessions",
        "Basic Recipe Analysis",
        "Mobile App Access",
        "Community Access",
      ],
      popular: false,
      stripePriceId: "price_starter_monthly",
    },
    {
      id: "pro",
      name: "Pro Saint",
      price: "$97",
      period: "/month",
      description: "For serious cooking knowledge seekers",
      icon: <Crown className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      features: [
        "Everything in Starter",
        "Unlimited AI Chat Sessions",
        "Advanced Recipe Analysis",
        "Priority Support",
        "Custom Meal Planning",
        "Nutritional Insights",
      ],
      popular: true,
      stripePriceId: "price_1RINIMFZsXxBWnjQEYxlyUIy",
    },
    {
      id: "elite",
      name: "Elite Saint",
      price: "$297",
      period: "/month",
      description: "Maximum cooking knowledge power",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-yellow-500 to-yellow-600",
      features: [
        "Everything in Pro",
        "AI Recipe Creation",
        "Personalized Cooking Coach",
        "White-glove Onboarding",
        "Direct Chef Consultations",
        "Exclusive Saint Community",
      ],
      popular: false,
      stripePriceId: "price_elite_monthly",
    },
    {
      id: "legendary",
      name: "Legendary Saint",
      price: "$497",
      period: "/month",
      description: "The ultimate culinary AI experience",
      icon: <Crown className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      features: [
        "Everything in Elite",
        "1-on-1 SaintSal Sessions",
        "Custom AI Model Training",
        "Restaurant Partnership Access",
        "Exclusive Events & Masterclasses",
        "Priority Feature Requests",
      ],
      popular: false,
      stripePriceId: "price_legendary_monthly",
    },
    {
      id: "custom",
      name: "Custom Saint",
      price: "$1,500",
      period: " deposit",
      description: "Fully customized culinary AI solution",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-indigo-500 to-indigo-600",
      features: [
        "Everything in Legendary",
        "Custom AI Model Development",
        "Dedicated Account Manager",
        "Custom Integration Support",
        "Commercial Usage Rights",
        "White-label Solutions",
      ],
      popular: false,
      stripePriceId: "price_custom_deposit",
    },
  ];

  const handleUpgrade = async (plan: (typeof plans)[0]) => {
    setIsLoading(plan.id);

    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          planName: plan.name,
        }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Upgrade error:", error);
      setIsLoading(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-yellow-500/30">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              🔥 Upgrade Your Cooking Knowledge
            </h2>
            <p className="text-gray-400">
              Join the elite Saint community and unlock your culinary potential
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Plans Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gray-800 rounded-xl border-2 p-6 transition-all duration-200 hover:scale-105 ${
                  plan.popular
                    ? "border-yellow-500 shadow-lg shadow-yellow-500/20"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      🏆 MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}
                  >
                    <div className="text-white">{plan.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3">
                    {plan.description}
                  </p>
                  <div className="text-2xl font-bold text-white">
                    {plan.price}
                    <span className="text-sm text-gray-400 font-normal">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleUpgrade(plan)}
                  disabled={isLoading === plan.id || currentPlan === plan.id}
                  className={`w-full py-2 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${
                    currentPlan === plan.id
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : plan.popular
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black"
                        : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white"
                  }`}
                >
                  {isLoading === plan.id ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                      <span>Processing...</span>
                    </div>
                  ) : currentPlan === plan.id ? (
                    "Current Plan"
                  ) : (
                    `Upgrade to ${plan.name}`
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              ✨ All plans include 30-day money-back guarantee
            </p>
            <div className="flex items-center justify-center space-x-8 text-xs text-gray-500">
              <span>🔒 Secure payment by Stripe</span>
              <span>📱 Cancel anytime</span>
              <span>🚀 Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
