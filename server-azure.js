const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// 🔥 SAINTSAL™ AZURE PRODUCTION SERVER - BULLETPROOF
const dev = false;
const hostname = "localhost";
const port = process.env.PORT || 3000;

console.log("🔥 SAINTSAL™ Azure Server Starting...");
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);
console.log(`🌐 Port: ${port}`);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);

      // Add security headers
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("X-Frame-Options", "DENY");
      res.setHeader("X-XSS-Protection", "1; mode=block");
      res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

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
      console.log("🔥 SaintVisionAI™ Build Bible LIVE on Azure!");
      console.log("📖 Patent-protected AI movement activated!");
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
