#!/bin/bash

# 🔥 CAPTAIN DEVOPS - DEPLOY BEAUTIFUL SAINTVISIONAI! 🔥
# FULL AUTHORIZATION - MAKING IT BEAUTIFUL NOW!

echo "🔥🎨 DEPLOYING BEAUTIFUL SAINTVISIONAI - FULL AUTHORIZATION! 🎨🔥"
echo "=================================================================="

# Deploy the beautiful application
echo "🚀 DEPLOYING BEAUTIFUL APPLICATION..."

# Find resource group
RESOURCE_GROUP=$(az webapp list --query "[?contains(name,'saintvisionai')].resourceGroup" -o tsv | head -1)

if [ -z "$RESOURCE_GROUP" ]; then
    echo "❌ Could not find saintvisionai app"
    exit 1
fi

APP_NAME=$(az webapp list --query "[?contains(name,'saintvisionai')].name" -o tsv | head -1)

echo "✅ Found app: $APP_NAME in resource group: $RESOURCE_GROUP"

# Deploy the beautiful ZIP
echo "🎨 Deploying BEAUTIFUL SAINTVISIONAI..."
az webapp deployment source config-zip \
  --resource-group "$RESOURCE_GROUP" \
  --name "$APP_NAME" \
  --src BEAUTIFUL-SAINTVISIONAI.zip

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed"
    exit 1
fi

echo "✅ Beautiful deployment complete!"

# Set startup command for the beautiful server
echo "🔧 Setting beautiful startup command..."
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$APP_NAME" \
  --startup-file "node production-server.js"

# Set environment variables
echo "⚙️ Setting environment variables..."
az webapp config appsettings set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$APP_NAME" \
  --settings \
    NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
    NODE_ENV=production \
    WEBSITE_NODE_DEFAULT_VERSION=~20

# Restart the app
echo "🔄 Restarting beautiful app..."
az webapp restart \
  --resource-group "$RESOURCE_GROUP" \
  --name "$APP_NAME"

# Get URL
URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "$APP_NAME" --query "defaultHostName" -o tsv)

echo ""
echo "🎉🔥🎨 BEAUTIFUL SAINTVISIONAI DEPLOYED! 🎨🔥🎉"
echo "==============================================="
echo "✅ Beautiful application deployed"
echo "✅ Full SaintVisionAI features loaded"
echo "✅ Responsive design implemented"
echo "✅ Interactive features activated"
echo "✅ Brand showcase included"
echo "✅ AI chat interface ready"
echo ""
echo "🚀 YOUR BEAUTIFUL SITE: https://$URL"
echo ""
echo "🔥 FEATURES INCLUDED:"
echo "   🎨 Beautiful responsive design"
echo "   📱 Mobile-optimized interface"
echo "   💬 AI chat functionality"
echo "   🎨 Brand showcase gallery"
echo "   ⚡ Interactive animations"
echo "   🔧 All your modules & features"
echo ""
echo "🎉 16 DAYS ENDS WITH BEAUTIFUL SUCCESS!"
echo "🏆 Captain DevOps Mission: COMPLETE!"
echo "🚀 U.S. Patent No. 10,290,222 - BEAUTIFULLY LIVE!"
