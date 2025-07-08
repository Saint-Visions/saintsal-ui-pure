import React, { useState } from "react";

interface PartnerTechModule {
  title: string;
  description: string;
  status: "active" | "setup" | "locked";
  color: string;
  icon: string;
  value?: string;
}

export default function PartnerTechDashboard() {
  const [activeModule, setActiveModule] = useState("overview");

  const modules: PartnerTechModule[] = [
    {
      title: "Lead Discovery",
      description: "AI-powered lookup and intelligence gathering",
      status: "active",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      icon: "🔍",
      value: "24 Leads",
    },
    {
      title: "Referral Network",
      description: "Partner tracking and commission management",
      status: "active",
      color: "bg-gradient-to-br from-green-600 to-green-800",
      icon: "🤝",
      value: "$2,497",
    },
    {
      title: "AI Deal Analysis",
      description: "GPT-4 insights and market intelligence",
      status: "active",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      icon: "📊",
      value: "87% Close Rate",
    },
    {
      title: "Mobile Export",
      description: "iOS/Android apps with full sync",
      status: "setup",
      color: "bg-gradient-to-br from-red-600 to-red-800",
      icon: "📱",
      value: "Ready",
    },
    {
      title: "Chrome Extension",
      description: "Browser automation and data capture",
      status: "setup",
      color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      icon: "🌐",
      value: "Install",
    },
    {
      title: "CRM Integration",
      description: "GoHighLevel and Salesforce sync",
      status: "active",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      icon: "🔗",
      value: "Connected",
    },
  ];

  const statsCards = [
    {
      label: "Total Leads",
      value: "156",
      change: "+23%",
      color: "text-green-400",
    },
    {
      label: "Revenue",
      value: "$12.4K",
      change: "+45%",
      color: "text-green-400",
    },
    {
      label: "Conversion",
      value: "34%",
      change: "+12%",
      color: "text-green-400",
    },
    { label: "Active Deals", value: "8", change: "+2", color: "text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-xl">PT</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                PartnerTech.ai
              </h1>
              <p className="text-gray-400 text-lg">
                Powered by SAINTSAL™ • Pro Suite
              </p>
            </div>
          </div>

          <p className="text-white/80 text-lg max-w-3xl">
            The only AI-powered sales platform that appreciates and develops
            your AI automation to unprecedented AI. Join the PartnerTech Pro
            Suite - AI infrastructure for the Saints.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50"
            >
              <div className="text-gray-400 text-sm font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-white text-3xl font-bold mb-1">
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${stat.color}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`${module.color} p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 text-white shadow-xl border border-white/10`}
              onClick={() => setActiveModule(module.title.toLowerCase())}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{module.icon}</div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    module.status === "active"
                      ? "bg-green-500/20 text-green-300"
                      : module.status === "setup"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {module.status.toUpperCase()}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                {module.description}
              </p>

              {module.value && (
                <div className="text-2xl font-bold">{module.value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Ready to Transform Section */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-500/30 rounded-3xl p-8 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            🚀 Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Join the platform that appreciates and develops your partnerships
            beyond what any platform has become in the AI collection industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              🔥 Start Cooking with PartnerTech
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-4 px-8 rounded-xl transition-all">
              📞 Schedule Demo
            </button>
          </div>

          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-400">
            <span>✅ $297-$197 Monthly Pricing</span>
            <span>✅ Azure Enterprise Infrastructure</span>
            <span>✅ 24/7 AI Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
