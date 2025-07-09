#!/bin/bash

# 🔥 SAINTSAL™ AZURE PACKAGE CREATOR
# Creates deployment-ready ZIP for Azure App Service

echo "🔥 Creating Azure deployment package..."
echo "======================================"

# Ensure build is complete
if [ ! -d ".next" ]; then
    echo "⚠️  Build not found. Running build first..."
    export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
    npm run build
fi

# Create deployment directory
rm -rf azure-deploy
mkdir azure-deploy

echo "📦 Packaging files for Azure..."

# Copy essential files
cp -r .next azure-deploy/
cp -r public azure-deploy/
cp package.json azure-deploy/
cp package-lock.json azure-deploy/
cp server.js azure-deploy/
cp web.config azure-deploy/
cp next.config.js azure-deploy/
cp tailwind.config.ts azure-deploy/

# Copy source files needed for runtime
cp -r app azure-deploy/
cp -r components azure-deploy/
cp -r lib azure-deploy/
cp -r context azure-deploy/
cp -r types azure-deploy/
cp -r db azure-deploy/
cp builder-registry-simple.ts azure-deploy/

# Copy environment template
echo "# Azure Environment Variables" > azure-deploy/.env.example
echo "NEXT_PUBLIC_BUILDER_API_KEY=your-builder-api-key" >> azure-deploy/.env.example
echo "AZURE_OPENAI_API_KEY=your-azure-openai-key" >> azure-deploy/.env.example
echo "NODE_ENV=production" >> azure-deploy/.env.example

# Create ZIP package
echo "🗜️  Creating deployment ZIP..."
cd azure-deploy
zip -r ../saintvisionai-azure-deploy.zip ./*
cd ..

# Cleanup
rm -rf azure-deploy

echo ""
echo "✅ Azure deployment package ready!"
echo "📦 File: saintvisionai-azure-deploy.zip"
echo "📊 Size: $(du -h saintvisionai-azure-deploy.zip | cut -f1)"
echo ""
echo "🚀 Upload this ZIP to Azure App Service!"
echo "🎯 Or use Azure CLI: az webapp deployment source config-zip"
echo ""
echo "🔥 SAINTSAL™ Azure deployment package complete!"
