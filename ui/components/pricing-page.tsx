import React from "react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  color: string;
}

export default function PricingPage() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Free Saint",
      price: "$0",
      period: "forever",
      description: "Get started with basic AI companion",
      color: "bg-gray-800",
      cta: "Start Free",
      features: [
        "Basic AI Chat",
        "Limited conversations",
        "Community support",
        "Basic templates",
      ],
    },
    {
      name: "Pro Saint",
      price: "$27",
      period: "per month",
      description: "Full access to SaintSal AI ecosystem",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      cta: "Start Cooking",
      popular: true,
      features: [
        "Unlimited AI conversations",
        "Advanced AI models (GPT-4)",
        "Lead discovery tools",
        "Business automation",
        "Sticky notes & organization",
        "Priority support",
        "Chrome extension access",
      ],
    },
    {
      name: "PartnerTech Pro",
      price: "$297",
      period: "per month",
      description: "Complete business transformation suite",
      color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      cta: "Transform Business",
      features: [
        "Everything in Pro Saint",
        "PartnerTech.ai CRM access",
        "Advanced deal analysis",
        "Referral network management",
        "Mobile app export",
        "Azure enterprise infrastructure",
        "White-label solutions",
        "Dedicated success manager",
        "24/7 premium support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-black font-bold text-xl">SV</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              Saint{" "}
            </span>
            Level
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From basic AI companion to full business transformation. Every Saint
            deserves the right tools for their journey.
          </p>

          <div className="mt-8 inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3">
            <span className="text-yellow-400 text-sm font-medium">
              ⚡ Special Launch Pricing
            </span>
            <span className="text-white text-sm">• Save up to 40%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`${tier.color} rounded-3xl p-8 text-white relative overflow-hidden border border-white/10 ${
                tier.popular ? "ring-2 ring-yellow-400 scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm opacity-90">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end space-x-1">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-lg opacity-80 pb-2">
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-green-400">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  tier.popular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-white/10 hover:bg-white/20 border border-white/20"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                What makes SaintSal different?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                SaintSal doesn't just answer questions - it adapts, learns, and
                becomes your personal "gotta guy" for business. With Azure
                enterprise infrastructure and GPT-4 integration, you get
                enterprise-level AI at your fingertips.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Can I upgrade or downgrade anytime?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Absolutely! Your subscription is flexible. Upgrade when your
                business grows, or adjust based on your needs. All your data and
                conversations are preserved.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                What's included in PartnerTech Pro?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                PartnerTech Pro includes the full CRM suite, advanced analytics,
                mobile apps, white-label solutions, and dedicated support. It's
                designed for serious entrepreneurs ready to scale.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Yes! We offer a 30-day money-back guarantee on all paid plans.
                If SaintSal doesn't transform your business, we'll refund every
                penny.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Cooking? 🔥
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of Saints already transforming their businesses
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-12 rounded-xl text-xl transition-all transform hover:scale-105 shadow-lg">
            Start Your Saint Journey
          </button>
        </div>
      </div>
    </div>
  );
}
