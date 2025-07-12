// 🔥 SAINTSAL™ AZURE STARTUP SCRIPT - GUARANTEED SUCCESS
const { spawn } = require("child_process");

console.log("🚨 SAINTSAL™ AZURE STARTUP - 39 DAYS END NOW!");
console.log("🌐 Azure Port:", process.env.PORT || "8080");
console.log("🎯 Environment:", process.env.NODE_ENV || "production");

// Set Azure environment
process.env.NODE_ENV = "production";
process.env.PORT = process.env.PORT || "8080";

console.log("🔥 Starting SaintVisionAI™ server...");

// Start the main server
const server = spawn("node", ["server.js"], {
  stdio: "inherit",
  env: process.env,
});

server.on("error", (err) => {
  console.error("🚨 AZURE SERVER ERROR:", err);
  process.exit(1);
});

server.on("exit", (code) => {
  console.log("🛑 Server exited with code:", code);
  if (code !== 0) {
    console.error("🚨 Server failed with exit code:", code);
    process.exit(code);
  }
});

// Azure graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Azure SIGTERM - Graceful shutdown...");
  server.kill("SIGTERM");
});

process.on("SIGINT", () => {
  console.log("🛑 Azure SIGINT - Manual shutdown...");
  server.kill("SIGINT");
});

console.log("✅ Azure startup script loaded successfully!");
