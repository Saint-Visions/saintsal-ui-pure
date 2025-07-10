#!/bin/bash

echo "🚀 SAINTSAL™ AZURE ENVIRONMENT SETUP"
echo "======================================"

# Core environment variables for Azure deployment
echo "Setting up environment variables for Azure App Service..."

# Builder.io Configuration
echo "✅ Setting NEXT_PUBLIC_BUILDER_API_KEY..."
az webapp config appsettings set --resource-group saintvisionai-rg --name saintvisionai --settings NEXT_PUBLIC_BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

# Site Configuration
echo "✅ Setting NEXT_PUBLIC_SITE_URL..."
az webapp config appsettings set --resource-group saintvisionai-rg --name saintvisionai --settings NEXT_PUBLIC_SITE_URL="https://saintvisionai.azurewebsites.net"

# Node.js Configuration
echo "✅ Setting NODE_ENV..."
az webapp config appsettings set --resource-group saintvisionai-rg --name saintvisionai --settings NODE_ENV="production"

# Azure specific settings
echo "✅ Setting Azure Node version..."
az webapp config appsettings set --resource-group saintvisionai-rg --name saintvisionai --settings WEBSITE_NODE_DEFAULT_VERSION="20-lts"

# Startup command
echo "✅ Setting startup command..."
az webapp config set --resource-group saintvisionai-rg --name saintvisionai --startup-file "startup.js"

echo ""
echo "🎯 Environment variables set successfully!"
echo ""
echo "📋 Verification commands:"
echo "   az webapp config appsettings list --resource-group saintvisionai-rg --name saintvisionai"
echo ""
echo "🚀 Ready for deployment!"
echo "   az webapp deployment source config-zip --resource-group saintvisionai-rg --name saintvisionai --src deployment.zip"
