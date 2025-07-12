import { createServer } from "http";
import { parse } from "url";
import next from "next";

// 🚀 SAINTSAL™ AZURE PRODUCTION SERVER - ES MODULE VERSION
const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "8080", 10);

console.log("🔥 SAINTSAL™ Azure Server - ES MODULE VERSION ACTIVATING...");
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);
console.log(`🌐 Port: ${port}`);
console.log(`🌐 Hostname: ${hostname}`);
console.log("🎯 SaintVisionAI™ Build Bible - AZURE DEPLOYMENT");

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function startServer() {
  try {
    await app.prepare();

    const server = createServer(async (req, res) => {
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

        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("❌ Error:", req.url, err);
        res.statusCode = 500;
        res.end("SaintVisionAI™ Guardian Angel - Temporary Issue");
      }
    });

    server.once("error", (err) => {
      console.error("🚨 Server Error:", err);
      process.exit(1);
    });

    server.listen(port, hostname, () => {
      console.log("✅ SUCCESS! SAINTSAL™ AZURE Server LIVE!");
      console.log(`🎯 Local URL: http://localhost:${port}`);
      console.log(`🌐 Server URL: http://${hostname}:${port}`);
      console.log(`🌐 Azure Binding: ${hostname}:${port}`);
      console.log("🏆 DEPLOYMENT SUCCESS - AZURE DEPLOYED!");
      console.log("🔥 U.S. Patent No. 10,290,222 - LIVE!");
      console.log("🔍 Health check: /health");
      console.log("🚀 SaintVisionAI™ Azure server started successfully");
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("🛑 Graceful shutdown - SaintVisionAI™ signing off...");
      server.close(() => {
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("🛑 Manual shutdown - Mission accomplished!");
      server.close(() => {
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("🚨 Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
