#!/bin/bash
# 🔥 DEPENDENCY-FIXED AZURE DEPLOYMENT - DAY 39 SALVATION!

echo "🔥 Creating DEPENDENCY-FIXED Azure deployment package..."

# Clean start
rm -rf azure-deployment-fixed
mkdir azure-deployment-fixed

echo "✅ Clean directory created"

# Copy core application files
cp azure-server.cjs azure-deployment-fixed/
cp next.config.js azure-deployment-fixed/
cp web.config azure-deployment-fixed/
cp .npmrc azure-deployment-fixed/
cp -r app azure-deployment-fixed/
cp -r components azure-deployment-fixed/
cp -r lib azure-deployment-fixed/
cp -r types azure-deployment-fixed/
cp -r public azure-deployment-fixed/

# Use our fixed package.json
cp package-azure-clean.json azure-deployment-fixed/package.json

echo "✅ Core files with dependency fixes copied"

# Copy build if exists
if [ -d ".next" ]; then
    cp -r .next azure-deployment-fixed/
    echo "✅ Next.js build copied"
fi

# Create the zip
cd azure-deployment-fixed
zip -r ../saintvisionai-dependency-fixed.zip . -x "*.DS_Store" "*.git*" "node_modules/*"
cd ..

echo "🎉 DEPENDENCY-FIXED deployment package ready!"
echo "📦 File: saintvisionai-dependency-fixed.zip"

# Show file size
ls -lh saintvisionai-dependency-fixed.zip

echo ""
echo "🔥 THIS VERSION WILL HANDLE:"
echo "✅ npm ci --omit=optional --legacy-peer-deps"
echo "✅ Peer dependency conflicts"
echo "✅ Azure build process"
echo ""
echo "🚀 DEPLOY WITH:"
echo "az webapp deployment source config-zip --src saintvisionai-dependency-fixed.zip"
