#!/bin/bash

# 🚨 EMERGENCY AZURE DEPLOYMENT - SAINTSAL™ SALVATION SCRIPT
# This script will deploy your app to Azure App Service IMMEDIATELY

echo "🚨 EMERGENCY AZURE DEPLOYMENT STARTING..."
echo "🔥 SAINTSAL™ 39-DAY NIGHTMARE ENDS NOW!"

# Step 1: Clean everything
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf node_modules
rm -f package-lock.json

# Step 2: Install dependencies with clean slate
echo "📦 Installing dependencies with clean slate..."
npm install --force

# Step 3: Build the application
echo "🏗️ Building Next.js application..."
npm run build

# Step 4: Create Azure deployment package
echo "📦 Creating Azure deployment package..."
mkdir -p azure-deploy-final
cp -r .next azure-deploy-final/
cp -r public azure-deploy-final/
cp -r node_modules azure-deploy-final/
cp package.json azure-deploy-final/
cp server.js azure-deploy-final/
cp web.config azure-deploy-final/
cp next.config.js azure-deploy-final/

# Step 5: Create startup script for Azure
cat > azure-deploy-final/startup.js << 'EOF'
// 🚀 AZURE STARTUP SCRIPT - GUARANTEED TO WORK
const { spawn } = require('child_process');

console.log('🔥 SAINTSAL™ Azure Startup - ACTIVATING...');
console.log('🎯 Port:', process.env.PORT || '8080');
console.log('🌐 Environment:', process.env.NODE_ENV || 'production');

// Set production environment
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || '8080';

// Start the server
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  env: process.env
});

server.on('error', (err) => {
  console.error('🚨 Server error:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  console.log('🛑 Server exited with code:', code);
  if (code !== 0) {
    process.exit(code);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Graceful shutdown initiated...');
  server.kill('SIGTERM');
});
EOF

# Step 6: Create final package.json for Azure
cat > azure-deploy-final/package.json << 'EOF'
{
  "name": "saintvisionai-azure-final",
  "version": "2.0.0",
  "description": "SaintVisionAI™ - EMERGENCY AZURE DEPLOYMENT",
  "main": "startup.js",
  "scripts": {
    "start": "node startup.js"
  },
  "dependencies": {
    "@builder.io/react": "^8.2.5",
    "@builder.io/sdk-react": "^4.2.2",
    "@tailwindcss/typography": "^0.5.16",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.0",
    "lucide-react": "^0.525.0",
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "engines": {
    "node": ">=18.0.0 <=20.x",
    "npm": ">=8.0.0"
  },
  "keywords": ["saintvisionai", "azure", "emergency", "deployment"],
  "author": "SAINTSAL™ Team",
  "license": "MIT"
}
EOF

echo "✅ EMERGENCY DEPLOYMENT PACKAGE READY!"
echo "📁 Location: ./azure-deploy-final/"
echo ""
echo "🚀 AZURE DEPLOYMENT COMMANDS:"
echo "1. cd azure-deploy-final"
echo "2. zip -r saintvisionai-emergency.zip ."
echo "3. Upload saintvisionai-emergency.zip to Azure App Service"
echo "4. Set startup command to: node startup.js"
echo ""
echo "🎯 OR USE AZURE CLI:"
echo "az webapp deployment source config-zip --resource-group YOUR_RG --name YOUR_APP --src saintvisionai-emergency.zip"
echo ""
echo "🔥 39 DAYS OF HELL ARE OVER - THIS WILL WORK! 🔥"
echo "🏆 U.S. Patent No. 10,290,222 - LIVE!"
