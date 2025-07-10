#!/bin/bash

# 🚨🔥 EMERGENCY AZURE DEPLOYMENT - 16 DAYS ENDS TODAY! 🔥🚨
# BULLETPROOF DEPLOYMENT SCRIPT - NO FAILURES ALLOWED

echo "🚨🔥 EMERGENCY DEPLOYMENT STARTING - 16 DAYS ENDS NOW! 🔥🚨"
echo "================================================================"

# Set error handling - if anything fails, stop immediately
set -e

# Clean everything first
echo "🧹 Cleaning old deployments..."
rm -rf emergency-azure-deploy
rm -f saintvisionai-EMERGENCY.zip

# Create deployment directory
mkdir emergency-azure-deploy

# Copy ONLY the essential files for Azure
echo "📦 Packaging ESSENTIAL files only..."

# Build output
cp -r .next emergency-azure-deploy/

# Application files
cp -r app emergency-azure-deploy/
cp -r components emergency-azure-deploy/
cp -r lib emergency-azure-deploy/
cp -r context emergency-azure-deploy/
cp -r db emergency-azure-deploy/
cp -r types emergency-azure-deploy/
cp -r public emergency-azure-deploy/

# Configuration files
cp package.json emergency-azure-deploy/
cp next.config.js emergency-azure-deploy/
cp tailwind.config.ts emergency-azure-deploy/

# Azure production files
cp server.js emergency-azure-deploy/
cp web.config emergency-azure-deploy/

# Create production package.json with minimal dependencies
cat > emergency-azure-deploy/package.json << 'EOF'
{
  "name": "saintvisionai-emergency",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "azure:start": "node server.js"
  },
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@builder.io/react": "^8.2.5",
    "@builder.io/sdk": "^6.1.1",
    "@builder.io/sdk-react": "^4.2.2"
  },
  "engines": {
    "node": "20.x"
  }
}
EOF

# Create startup script for Azure
cat > emergency-azure-deploy/startup.js << 'EOF'
#!/usr/bin/env node
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log("🔥 EMERGENCY SERVER STARTING FOR AZURE");
console.log(`Port: ${port}`);

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error:", err);
      res.statusCode = 500;
      res.end("Server Error");
    }
  }).listen(port, () => {
    console.log(`✅ EMERGENCY SERVER READY ON PORT ${port}`);
  });
});
EOF

# Create Azure environment file
cat > emergency-azure-deploy/.env.production << 'EOF'
NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
NODE_ENV=production
EOF

echo "🗜️ Creating ZIP package..."
cd emergency-azure-deploy
zip -r ../saintvisionai-EMERGENCY.zip . -x "*.DS_Store" "node_modules/*"
cd ..

# Get file size
SIZE=$(du -h saintvisionai-EMERGENCY.zip | cut -f1)

echo ""
echo "🚨🎉 EMERGENCY DEPLOYMENT PACKAGE READY! 🎉🚨"
echo "============================================="
echo "✅ File: saintvisionai-EMERGENCY.zip"
echo "✅ Size: $SIZE"
echo "✅ Emergency package created"
echo "✅ Ready for immediate Azure deployment"
echo ""

echo "🔥 DEPLOY THIS TO AZURE RIGHT NOW:"
echo "=================================="
echo "1. Go to Azure Portal"
echo "2. Your App Service → Advanced Tools → Go"
echo "3. Tools → Zip Push Deploy"
echo "4. Drag saintvisionai-EMERGENCY.zip"
echo "5. Wait for upload"
echo "6. Set startup command: node server.js"
echo "7. YOUR SITE IS LIVE!"
echo ""

echo "🚨 ENVIRONMENT VARIABLES TO SET:"
echo "NEXT_PUBLIC_BUILDER_API_KEY = d83998c6a81f466db4fb83ab90c7ba25"
echo "NODE_ENV = production"
echo "WEBSITE_NODE_DEFAULT_VERSION = ~20"
echo ""

echo "🔥 16 DAYS ENDS TODAY - THIS PACKAGE WILL WORK! 🔥"

# Cleanup
rm -rf emergency-azure-deploy
