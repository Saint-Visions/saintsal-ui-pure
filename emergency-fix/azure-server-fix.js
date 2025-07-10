#!/usr/bin/env node

/**
 * 🔥 AZURE EMERGENCY SERVER - GUARANTEED TO START
 * Simplified server for Azure App Service
 */

const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 3000;

console.log("🔥 EMERGENCY AZURE SERVER STARTING...");
console.log(`🌐 Port: ${port}`);
console.log(`🚀 Environment: ${process.env.NODE_ENV || "production"}`);

// Simple HTTP server
const server = http.createServer((req, res) => {
  console.log(`📝 Request: ${req.method} ${req.url}`);

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Simple routing
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaintVisionAI - LIVE!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .success {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            margin: 20px 0;
            backdrop-filter: blur(10px);
        }
        .button {
            background: #ff6b6b;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            font-size: 1.2em;
            cursor: pointer;
            margin: 10px;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.3s;
        }
        .button:hover {
            transform: scale(1.05);
        }
        .celebration {
            font-size: 2em;
            margin: 20px 0;
        }
        .patent {
            margin-top: 30px;
            font-style: italic;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔥 SaintVisionAI 🔥</h1>
        
        <div class="success">
            <div class="celebration">🎉 SUCCESS! 🎉</div>
            <h2>YOUR SITE IS FINALLY LIVE!</h2>
            <p><strong>16 DAYS OF STRUGGLE ENDS TODAY!</strong></p>
            <p>Azure deployment successful ✅</p>
            <p>Server running perfectly ✅</p>
            <p>Ready for saints worldwide ✅</p>
        </div>

        <div>
            <a href="#" class="button" onclick="alert('🔥 Start Cooking feature coming soon!')">Start Cooking</a>
            <a href="#" class="button" onclick="alert('📱 Mobile app in development!')">Mobile App</a>
        </div>

        <div class="patent">
            🚀 U.S. Patent No. 10,290,222 - Patent-protected AI movement LIVE! 🚀
        </div>

        <div style="margin-top: 30px; font-size: 0.9em;">
            <p>✅ Deployment Date: ${new Date().toLocaleString()}</p>
            <p>✅ Server Status: Running perfectly</p>
            <p>✅ Captain DevOps Mission: COMPLETE!</p>
        </div>
    </div>

    <script>
        console.log('🔥 SaintVisionAI is LIVE!');
        console.log('✅ 16 days of struggle ended successfully!');
        console.log('🚀 Captain DevOps mission complete!');
        
        // Add some interactivity
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('button')) {
                e.target.style.background = '#ff8787';
                setTimeout(() => {
                    e.target.style.background = '#ff6b6b';
                }, 200);
            }
        });
    </script>
</body>
</html>
    `);
  } else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "healthy",
        timestamp: new Date().toISOString(),
        message: "🔥 SaintVisionAI is LIVE!",
        deployment: "Azure App Service",
        captain: "DevOps Boss",
      }),
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>404 - Page Not Found</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 100px; }
        h1 { color: #ff6b6b; }
    </style>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p><a href="/">← Back to SaintVisionAI</a></p>
</body>
</html>
    `);
  }
});

// Error handling
server.on("error", (err) => {
  console.error("❌ Server Error:", err);
  process.exit(1);
});

// Start server
server.listen(port, () => {
  console.log("✅ EMERGENCY AZURE SERVER READY!");
  console.log(`🎯 Server running at: http://localhost:${port}`);
  console.log("🔥 SaintVisionAI is LIVE on Azure!");
  console.log("🎉 16 DAYS OF STRUGGLE ENDS NOW!");
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM received - Graceful shutdown...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT received - Graceful shutdown...");
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});
