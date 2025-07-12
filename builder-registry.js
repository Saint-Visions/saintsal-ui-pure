// 🚀 SAINTSAL™ BUILDER REGISTRY - SAFE FALLBACK VERSION
// This version provides safe fallbacks for all components

console.log("🔧 Loading Builder.io registry...");

// Safe component exports with fallbacks
const customComponents = [];

// Export in multiple formats for compatibility
module.exports = {
  customComponents,
  default: customComponents,
};

// ES6 export fallback
if (typeof exports !== "undefined") {
  exports.customComponents = customComponents;
  exports.default = customComponents;
}

console.log(
  "✅ Builder registry loaded safely with",
  customComponents.length,
  "components",
);
