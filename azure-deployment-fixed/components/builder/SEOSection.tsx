"use client";
import React from "react";
import { Star, Shield, Trophy, Users } from "lucide-react";

interface SEOSectionProps {
  title?: string;
  description?: string;
  rating?: number;
  userCount?: string;
  trustBadges?: string[];
  showPatent?: boolean;
  backgroundColor?: string;
}

export default function SEOSection({
  title = "Trusted by Elite Cooking Professionals",
  description = "Join thousands of culinary experts who rely on SaintVisionAI™ for their cooking knowledge needs",
  rating = 4.9,
  userCount = "10,000+",
  trustBadges = [
    "Patent Protected",
    "Azure Certified",
    "Enterprise Grade",
    "24/7 Support",
  ],
  showPatent = true,
  backgroundColor = "bg-gray-900",
}: SEOSectionProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-5 h-5 text-gray-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-400" />);
    }

    return stars;
  };

  return (
    <section className={`${backgroundColor} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {description}
          </p>

          {/* Rating and User Count */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            {/* Rating */}
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1 mb-2">
                {renderStars(rating)}
              </div>
              <p className="text-white font-semibold">{rating}/5 Rating</p>
              <p className="text-gray-400 text-sm">From verified users</p>
            </div>

            {/* User Count */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-black" />
              </div>
              <p className="text-white font-semibold text-xl">{userCount}</p>
              <p className="text-gray-400 text-sm">Active users</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-yellow-500/30 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                {index === 0 && <Shield className="w-4 h-4 text-black" />}
                {index === 1 && <Trophy className="w-4 h-4 text-black" />}
                {index === 2 && <Star className="w-4 h-4 text-black" />}
                {index === 3 && <Users className="w-4 h-4 text-black" />}
              </div>
              <p className="text-white text-sm font-medium">{badge}</p>
            </div>
          ))}
        </div>

        {/* Patent Information */}
        {showPatent && (
          <div className="text-center border-t border-gray-700 pt-8">
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg p-6 max-w-md mx-auto">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-yellow-400 font-semibold mb-1">
                Patent Protected Technology
              </p>
              <p className="text-white/70 text-sm mb-2">
                U.S. Patent No. 10,290,222
              </p>
              <p className="text-gray-400 text-xs">
                Advanced AI architecture protected by intellectual property law
              </p>
            </div>
          </div>
        )}

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SaintVisionAI™",
              description: description,
              applicationCategory: "AI Assistant",
              operatingSystem: "Web",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: rating,
                bestRating: "5",
                ratingCount: userCount.replace(/[^\d]/g, ""),
              },
              offers: {
                "@type": "Offer",
                price: "27",
                priceCurrency: "USD",
                priceValidUntil: "2025-12-31",
              },
            }),
          }}
        />
      </div>
    </section>
  );
}
