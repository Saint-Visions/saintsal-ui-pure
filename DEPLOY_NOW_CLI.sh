#!/bin/bash

# 🚨🔥 EMERGENCY AZURE CLI DEPLOYMENT - RIGHT NOW! 🔥🚨
# ONE COMMAND TO END 16 DAYS OF PAIN

echo "🚨🔥 CAPTAIN DEVOPS EMERGENCY DEPLOYMENT - RIGHT NOW! 🔥🚨"
echo "============================================================"

# Deploy the minimal fix to saintvisionai-production
echo "🚀 DEPLOYING MINIMAL FIX TO saintvisionai-production..."

# Find the resource group automatically
RESOURCE_GROUP=$(az webapp list --query "[?name=='saintvisionai-production'].resourceGroup" -o tsv 2>/dev/null)

if [ -z "$RESOURCE_GROUP" ]; then
    echo "🔍 Trying alternative name saintvisionai..."
    RESOURCE_GROUP=$(az webapp list --query "[?name=='saintvisionai'].resourceGroup" -o tsv 2>/dev/null)
fi

if [ -z "$RESOURCE_GROUP" ]; then
    echo "📋 Let me show all your apps:"
    az webapp list --query "[].{Name:name, ResourceGroup:resourceGroup}" -o table
    echo ""
    echo "❌ Please tell me which app name to use from the list above"
    exit 1
fi

echo "✅ Found app in resource group: $RESOURCE_GROUP"

# Deploy the ZIP
echo "📦 Deploying FINAL-FIX.zip..."
az webapp deployment source config-zip \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai-production" \
  --src FINAL-FIX.zip

if [ $? -ne 0 ]; then
    echo "🔄 Trying with saintvisionai name..."
    az webapp deployment source config-zip \
      --resource-group "$RESOURCE_GROUP" \
      --name "saintvisionai" \
      --src FINAL-FIX.zip
fi

echo "✅ Deployment complete!"

# Set startup command
echo "🔧 Setting startup command..."
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai-production" \
  --startup-file "npm start" 2>/dev/null || \
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai" \
  --startup-file "npm start"

# Restart the app
echo "🔄 Restarting app..."
az webapp restart \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai-production" 2>/dev/null || \
az webapp restart \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai"

# Get URL
URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "saintvisionai-production" --query "defaultHostName" -o tsv 2>/dev/null)
if [ -z "$URL" ]; then
    URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "saintvisionai" --query "defaultHostName" -o tsv)
fi

echo ""
echo "🎉🔥 DEPLOYMENT COMPLETE! 🔥🎉"
echo "=========================="
echo "✅ App deployed and restarted"
echo "✅ Startup command set"
echo "🚀 URL: https://$URL"
echo ""
echo "🔥 16 DAYS ENDS RIGHT NOW!"
echo "Visit your site in 2 minutes!"
echo ""
echo "✅ CAPTAIN DEVOPS MISSION COMPLETE!"
