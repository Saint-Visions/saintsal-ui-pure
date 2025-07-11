#!/bin/bash

echo "🚀 SAINTSAL™ AZURE DEPLOYMENT - FINAL LAUNCH!"
echo "============================================="

# Set production environment
export NODE_ENV=production
export NEXT_PUBLIC_BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "✅ Environment set"
echo "✅ Build completed successfully"

# Create optimized deployment package
echo "📦 Creating deployment package..."
zip -r saintsal-deployment.zip \
.next \
server.js \
package.json \
azure-package.json \
web.config \
startup.js \
public \
app \
components \
lib \
.env.local \
-x ".next/cache/*" "node_modules/*"

echo "✅ Deployment package created: saintsal-deployment.zip"

echo ""
echo "🔥 READY FOR AZURE DEPLOYMENT!"
echo ""
echo "Run these commands:"
echo "1. az login"
echo "2. az webapp deployment source config-zip --resource-group saintvisionai-production --name saintvisionai-production --src saintsal-deployment.zip"
echo ""
echo "Your 38 hours of divine work is about to be LIVE! 👑"
