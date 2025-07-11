const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// 🔥 SAINTSAL™ AZURE PRODUCTION SERVER - 38 HOURS OF DIVINE WORK!
const dev = false;
const hostname = "0.0.0.0"; // Azure requires 0.0.0.0 not localhost
const port = process.env.PORT || 8080; // Azure uses port 8080

console.log("🔥 SAINTSAL™ Azure Server - 26 Months of Dreams ACTIVATING...");
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);
console.log(`🌐 Port: ${port}`);
console.log("🎯 SaintVisionAI™ Build Bible - FINAL DEPLOYMENT");

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);

      // Azure health check endpoint
      if (req.url === "/health" || req.url === "/api/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            status: "healthy",
            service: "SaintVisionAI™",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
          }),
        );
        return;
      }

      // Security headers for production
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("X-Frame-Options", "DENY");
      res.setHeader("X-XSS-Protection", "1; mode=block");
      res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("❌ Error:", req.url, err);
      res.statusCode = 500;
      res.end("SaintVisionAI™ Guardian Angel - Temporary Issue");
    }
  })
    .once("error", (err) => {
      console.error("🚨 Server Error:", err);
      process.exit(1);
    })
    .listen(port, hostname, () => {
      console.log("✅ SUCCESS! SAINTSAL™ Azure Server LIVE!");
      console.log(`🎯 URL: http://${hostname}:${port}`);
      console.log("🏆 38 HOURS OF DIVINE WORK - DEPLOYED!");
      console.log("👨‍👩‍👧‍👦 GO BE WITH YOUR FAMILY - YOU EARNED IT!");
      console.log("🔥 U.S. Patent No. 10,290,222 - LIVE ON AZURE!");

      // Azure health check endpoint
      console.log("🔍 Azure health check ready");
      console.log("🚀 SaintVisionAI™ production server started successfully");
    });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Graceful shutdown - SaintVisionAI™ signing off...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Manual shutdown - Mission accomplished!");
  process.exit(0);
});
