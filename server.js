#!/usr/bin/env node

/**
 * 🔥 SAINTSAL™ AZURE PRODUCTION SERVER
 * Optimized for Azure App Service deployment
 * U.S. Patent No. 10,290,222
 */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// Azure App Service configuration
const dev = false; // Always production on Azure
const hostname = "localhost";
const port = process.env.PORT || 3000;

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log("🔥 SAINTSAL™ Azure Server Starting...");
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);
console.log(`🌐 Port: ${port}`);

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);

      // Handle the request with Next.js
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("❌ Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error - SAINTSAL™ Guardian Angel Activated");
    }
  })
    .once("error", (err) => {
      console.error("🚨 Server Error:", err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log("✅ SAINTSAL™ Azure Server Ready!");
      console.log(`🎯 Server running at: http://${hostname}:${port}`);
      console.log("🔥 Patent-protected AI movement LIVE on Azure!");
    });
});

// Graceful shutdown for Azure
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received - Graceful shutdown...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT received - Graceful shutdown...");
  process.exit(0);
});
