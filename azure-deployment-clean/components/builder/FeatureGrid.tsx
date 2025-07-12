"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import {
  Search,
  Users,
  BarChart3,
  Smartphone,
  Crown,
  Zap,
  Rocket,
  Shield,
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  columns?: number;
}

const defaultFeatures: Feature[] = [
  {
    icon: "search",
    title: "Lead Discovery",
    description: "AI-powered lookup",
    color: "bg-blue-600",
  },
  {
    icon: "users",
    title: "Referral Network",
    description: "Partner tracking",
    color: "bg-green-600",
  },
  {
    icon: "chart",
    title: "AI Deal Analysis",
    description: "GPT-4 insights",
    color: "bg-purple-600",
  },
  {
    icon: "mobile",
    title: "Mobile Export",
    description: "iOS/Android apps",
    color: "bg-red-600",
  },
  {
    icon: "crown",
    title: "Elite Access",
    description: "Premium features",
    color: "bg-yellow-600",
  },
  {
    icon: "zap",
    title: "Instant Results",
    description: "Real-time AI",
    color: "bg-indigo-600",
  },
  {
    icon: "rocket",
    title: "Advanced Tools",
    description: "Professional grade",
    color: "bg-pink-600",
  },
  {
    icon: "shield",
    title: "Enterprise Security",
    description: "Bank-level protection",
    color: "bg-cyan-600",
  },
];

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  users: Users,
  chart: BarChart3,
  mobile: Smartphone,
  crown: Crown,
  zap: Zap,
  rocket: Rocket,
  shield: Shield,
};

export default function FeatureGrid({
  title = "🔧 What's Inside These Walls",
  subtitle = "Elite AI Sanctuary • Ready for Saints",
  features = defaultFeatures,
  columns = 4,
}: FeatureGridProps) {
  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Search;
    return <IconComponent className="w-5 h-5" />;
  };

  const getGridCols = (cols: number) => {
    switch (cols) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case 5:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";
      case 6:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-yellow-400 text-2xl font-bold mb-2 flex items-center justify-center">
          {title}
        </h2>
        {subtitle && <p className="text-white/70 text-lg">{subtitle}</p>}
      </div>

      {/* Features Grid */}
      <div className={`grid ${getGridCols(columns)} gap-6 mb-8`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform text-white group`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex-shrink-0">
                {getIconComponent(feature.icon)}
              </div>
              <h3 className="font-semibold text-lg group-hover:text-yellow-200 transition-colors">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center">
        <p className="text-white/50 text-sm">
          Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
        </p>
      </div>
    </div>
  );
}
