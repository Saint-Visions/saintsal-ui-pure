const { spawn } = require("child_process");
const path = require("path");

console.log("🚀 SAINTSAL™ AZURE STARTUP - Initializing...");

// Set production environment
process.env.NODE_ENV = "production";
process.env.NEXT_PUBLIC_BUILDER_API_KEY = "d83998c6a81f466db4fb83ab90c7ba25";

// Azure port configuration
const port = process.env.PORT || 8080;
process.env.PORT = port;

console.log(`✅ Environment: ${process.env.NODE_ENV}`);
console.log(`✅ Port: ${port}`);
console.log(
  `✅ Builder.io API Key: ${process.env.NEXT_PUBLIC_BUILDER_API_KEY?.substring(0, 8)}...`,
);

// Start the Next.js server
const nextServer = spawn("node", ["server.js"], {
  stdio: "inherit",
  env: process.env,
});

nextServer.on("close", (code) => {
  console.log(`📊 SaintSal™ server exited with code ${code}`);
  process.exit(code);
});

nextServer.on("error", (err) => {
  console.error("❌ SaintSal™ server error:", err);
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received, shutting down gracefully...");
  nextServer.kill("SIGTERM");
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT received, shutting down gracefully...");
  nextServer.kill("SIGINT");
});

console.log("🎯 SaintSal™ Azure deployment ready for divine execution!");
