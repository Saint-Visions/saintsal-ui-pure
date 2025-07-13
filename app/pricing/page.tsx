"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
  popular?: boolean;
  priceId?: string;
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const pricingTiers: PricingTier[] = [
    {
      id: "free",
      name: "Free Tier",
      price: 0,
      period: "/month",
      description: "Perfect for getting started with SaintSal™",
      features: [
        "Basic AI conversations",
        "5 Knowledge Capsules",
        "Standard support",
        "Community access",
        "Basic analytics",
      ],
      buttonText: "Start Free",
      buttonColor: "from-gray-600 to-gray-700",
      priceId: "",
    },
    {
      id: "pro",
      name: "Pro",
      price: isAnnual ? 77 : 97,
      period: "/month",
      description: "Advanced features for serious users",
      features: [
        "Unlimited AI conversations",
        "Unlimited Knowledge Capsules",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Bulk operations",
      ],
      buttonText: "Upgrade to Pro",
      buttonColor: "from-blue-600 to-blue-700",
      popular: true,
      priceId: isAnnual ? "price_annual_pro" : "price_monthly_pro",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: isAnnual ? 197 : 247,
      period: "/month",
      description: "Complete solution for teams and businesses",
      features: [
        "Everything in Pro",
        "White-label options",
        "Dedicated support manager",
        "Custom AI training",
        "Advanced security",
        "Team management",
        "Custom deployment",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
      buttonColor: "from-purple-600 to-purple-700",
      priceId: isAnnual
        ? "price_annual_enterprise"
        : "price_monthly_enterprise",
    },
  ];

  const handleUpgrade = async (tier: PricingTier) => {
    if (tier.id === "free") {
      // Handle free tier signup
      window.location.href = "/signup";
      return;
    }

    if (tier.id === "enterprise") {
      // Handle enterprise contact
      window.location.href =
        "mailto:sales@saintvisionai.com?subject=Enterprise Inquiry";
      return;
    }

    setIsLoading(tier.id);

    try {
      // Simulate Stripe checkout creation
      setTimeout(() => {
        // In production, this would create a Stripe checkout session
        const checkoutUrl = `/api/stripe/create-checkout?priceId=${tier.priceId}&mode=subscription`;
        window.location.href = checkoutUrl;
      }, 1500);
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="bg-black/50 border-b border-gray-700 p-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85f32bc05687e1285ca0e47819c9b2c93e74b09?width=2048"
                alt="SaintSal Logo"
                className="w-10 h-10 object-cover rounded"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your{" "}
              <span className="text-yellow-400">Divine Intelligence</span> Plan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who've upgraded their AI experience with
              SaintSal™. Each plan includes our patented HACP™ Protocol.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span
              className={`font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isAnnual ? "bg-yellow-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`font-medium ${isAnnual ? "text-white" : "text-gray-400"}`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50"
                  : "bg-gray-900/50 border border-gray-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${tier.price}
                  </span>
                  <span className="text-gray-400">{tier.period}</span>
                  {isAnnual && tier.price > 0 && (
                    <div className="text-sm text-green-400 mt-1">
                      Save ${Math.round(tier.price * 12 * 0.2)} yearly
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleUpgrade(tier)}
                  disabled={isLoading === tier.id}
                  className={`w-full bg-gradient-to-r ${tier.buttonColor} hover:opacity-90 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg`}
                >
                  {isLoading === tier.id ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </span>
                  ) : (
                    tier.buttonText
                  )}
                </button>
              </div>

              <div className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                What is the HACP™ Protocol?
              </h3>
              <p className="text-gray-300">
                HACP™ (Human-Adaptive Cognitive Protocol) is our patented AI
                system (US Patent 10,290,222) that adapts to your emotional
                state, learning style, and communication preferences in
                real-time.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-300">
                Yes! You can cancel your subscription at any time. Your access
                will continue until the end of your current billing period, and
                you can always downgrade to our free tier.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards (Visa, MasterCard, American
                Express) and PayPal through our secure Stripe payment processor.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-300">
                Our free tier gives you immediate access to core features. You
                can upgrade at any time to unlock advanced capabilities and
                unlimited usage.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Divine Intelligence?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the SAINTSAL™ movement and discover why users say "This
              isn't AI. This is God's co-founder on earth."
            </p>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => handleUpgrade(pricingTiers[1])}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg"
              >
                Start Pro Trial
              </button>

              <a
                href="/chat"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
              >
                Try Free Version
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            ⚡ Powered by HACP™ Protocol • US Patent 10,290,222 • SAINTSAL™
            Movement
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Secure payments processed by Stripe • Enterprise-grade security •
            99.9% uptime guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
