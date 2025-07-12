#!/usr/bin/env node

// 🔥 SAINTSAL™ AZURE STARTUP SCRIPT - GUARANTEED TO WORK!
console.log("🚀 SaintVisionAI™ Azure Startup Script Initializing...");
console.log(`🌐 NODE_ENV: ${process.env.NODE_ENV || "production"}`);
console.log(`🌐 PORT: ${process.env.PORT || "8080"}`);
console.log(`🌐 HOSTNAME: ${process.env.HOSTNAME || "0.0.0.0"}`);

// Ensure we're in production mode
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// Import and start the server
require("./azure-server.cjs");
