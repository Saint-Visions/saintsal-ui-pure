#!/usr/bin/env node

// 🚀 SAINTSAL™ Azure Startup Script
console.log("🔥 SaintSal™ Azure startup beginning...");

// Set environment
process.env.NODE_ENV = "production";
process.env.PORT = process.env.PORT || 8080;

console.log("✅ Environment set, starting server...");

// Start the main server
require("./server.js");
