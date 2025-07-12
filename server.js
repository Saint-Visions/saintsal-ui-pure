const http = require("http");
const { parse } = require("url");
const next = require("next");

// 🔥 SAINTSAL™ AZURE PRODUCTION SERVER - COMMONJS FOR RELIABILITY
const dev = process.env.NODE_ENV !== "production";

// 🚨 CRITICAL AZURE PORT BINDING - THIS IS THE FIX!
const port = process.env.PORT || process.env.WEBSITES_PORT || 8080;
const hostname = process.env.HOSTNAME || "0.0.0.0";

console.log("🚨 SAINTSAL™ AZURE SERVER - COMMONJS VERSION!");
console.log("🔥 39 DAYS OF HELL - ENDING NOW!");
console.log(
  `🌐 Azure PORT: ${port} (from ${process.env.PORT ? "PORT" : process.env.WEBSITES_PORT ? "WEBSITES_PORT" : "default"})`,
);
console.log(`🌐 Hostname: ${hostname}`);
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);
console.log("🎯 SaintVisionAI™ - AZURE PORT BINDING FIXED!");

const app = next({ dev, hostname, port: parseInt(port, 10) });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = http.createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);

        // Azure health check endpoint - CRITICAL FOR AZURE
        if (req.url === "/health" || req.url === "/api/health") {
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          });
          res.end(
            JSON.stringify({
              status: "healthy",
              service: "SaintVisionAI™",
              timestamp: new Date().toISOString(),
              uptime: process.uptime(),
              port: port,
              hostname: hostname,
              environment: process.env.NODE_ENV || "production",
              message: "39 DAYS OF HELL - FINALLY OVER!",
              patent: "U.S. Patent No. 10,290,222",
            }),
          );
          return;
        }

        // Root path - special handling for Azure
        if (req.url === "/" || req.url === "/index.html") {
          console.log("🎯 Root request received - serving Next.js app");
        }

        // Security headers for production
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("X-Frame-Options", "DENY");
        res.setHeader("X-XSS-Protection", "1; mode=block");
        res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

        // Handle the request with Next.js
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("❌ Request Error:", req.url, err.message);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("SaintVisionAI™ Guardian Angel - Temporary Issue");
      }
    });

    // 🚨 CRITICAL ERROR HANDLING
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`🚨 PORT ${port} is already in use!`);
        console.error("🔧 Trying alternative port...");
        const altPort = parseInt(port) + 1;
        server.listen(altPort, hostname);
        return;
      }
      console.error("🚨 Server Error:", err);
      process.exit(1);
    });

    // 🎯 THE CRITICAL AZURE LISTEN COMMAND
    server.listen(parseInt(port, 10), hostname, (err) => {
      if (err) {
        console.error("🚨 Failed to bind to port:", err);
        process.exit(1);
      }

      console.log("✅ SUCCESS! SAINTSAL™ AZURE Server BINDING COMPLETE!");
      console.log(`🎯 Azure URL: http://${hostname}:${port}`);
      console.log(`🌐 Port Binding: ${port} ✅`);
      console.log(`🌐 Hostname Binding: ${hostname} ✅`);
      console.log("🏆 PORT ISSUE RESOLVED - 39 DAYS OVER!");
      console.log("🔥 U.S. Patent No. 10,290,222 - LIVE!");
      console.log("🔍 Health check: /health");
      console.log("🎉 AZURE DEPLOYMENT SUCCESS!");
    });

    // Azure-specific process handlers
    process.on("SIGTERM", () => {
      console.log("🛑 Azure SIGTERM - Graceful shutdown...");
      server.close(() => {
        console.log("✅ Server closed gracefully");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("🛑 Manual shutdown - Victory achieved!");
      server.close(() => {
        console.log("✅ Server closed manually");
        process.exit(0);
      });
    });

    process.on("uncaughtException", (err) => {
      console.error("🚨 Uncaught Exception:", err);
      server.close(() => {
        process.exit(1);
      });
    });

    process.on("unhandledRejection", (reason, promise) => {
      console.error("🚨 Unhandled Rejection at:", promise, "reason:", reason);
      // Don't exit the process for unhandled rejections in production
    });
  })
  .catch((err) => {
    console.error("🚨 Next.js failed to prepare:", err);
    process.exit(1);
  });

// Log environment info for debugging
console.log("🔍 Environment Variables:");
console.log(`   NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`   PORT: ${process.env.PORT}`);
console.log(`   WEBSITES_PORT: ${process.env.WEBSITES_PORT}`);
console.log(`   HOSTNAME: ${process.env.HOSTNAME}`);
console.log("🚀 Server initialization complete!");
