// 🔥 SAINTSAL™ AZURE STARTUP SCRIPT - PRODUCTION READY
console.log("🚀 SAINTSAL™ Startup Script - Initializing...");

// Set production environment
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Azure port configuration
const port = process.env.PORT || process.env.WEBSITES_PORT || 3000;
process.env.PORT = port;

console.log(`🌐 Port configured: ${port}`);
console.log(`🔧 Environment: ${process.env.NODE_ENV}`);
console.log("🎯 Starting SaintVisionAI™ Azure Server...");

// Start the Azure server
require("./azure-server.cjs");
