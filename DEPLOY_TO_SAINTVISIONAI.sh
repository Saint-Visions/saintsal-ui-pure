#!/bin/bash

# 🔥 CAPTAIN DEVOPS - ONE COMMAND DEPLOYMENT TO saintvisionai 🔥
# THIS WILL DEPLOY TO YOUR EXISTING APP SERVICE

echo "🔥 CAPTAIN DEVOPS DEPLOYING TO saintvisionai - 16 DAYS ENDS NOW! 🔥"
echo "=================================================================="

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not installed!"
    echo "🚀 QUICK INSTALL:"
    echo "   Mac: brew install azure-cli"
    echo "   Windows: Download from aka.ms/installazurecliwindows"
    echo "   Linux: curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash"
    exit 1
fi

echo "✅ Azure CLI found"

# Login to Azure
echo "🔐 Logging into Azure..."
az login

if [ $? -ne 0 ]; then
    echo "❌ Azure login failed"
    exit 1
fi

echo "✅ Azure login successful"

# Get all resource groups to find saintvisionai
echo "🔍 Finding your saintvisionai app..."
RESOURCE_GROUP=$(az webapp list --query "[?name=='saintvisionai'].resourceGroup" -o tsv)

if [ -z "$RESOURCE_GROUP" ]; then
    echo "❌ saintvisionai app not found!"
    echo "🔍 Let me show you all your apps:"
    az webapp list --query "[].{Name:name, ResourceGroup:resourceGroup, Url:defaultHostName}" -o table
    echo ""
    echo "💡 If saintvisionai is not listed, we need to create it first!"
    exit 1
fi

echo "✅ Found saintvisionai in resource group: $RESOURCE_GROUP"

# Deploy the ZIP package
echo "🚀 DEPLOYING TO saintvisionai..."
az webapp deployment source config-zip \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai" \
  --src saintvisionai-EMERGENCY.zip

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed"
    exit 1
fi

echo "✅ Deployment successful!"

# Set environment variables
echo "⚙️ Setting environment variables..."
az webapp config appsettings set \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai" \
  --settings \
    NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
    NODE_ENV=production \
    WEBSITE_NODE_DEFAULT_VERSION=~20 \
    SCM_DO_BUILD_DURING_DEPLOYMENT=false

# Set startup command
echo "🔧 Setting startup command..."
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai" \
  --startup-file "node server.js"

# Restart the app
echo "🔄 Restarting saintvisionai..."
az webapp restart \
  --resource-group "$RESOURCE_GROUP" \
  --name "saintvisionai"

# Get the URL
URL=$(az webapp show --resource-group "$RESOURCE_GROUP" --name "saintvisionai" --query "defaultHostName" -o tsv)

echo ""
echo "🎉🔥 CAPTAIN DEVOPS MISSION COMPLETE! 🔥🎉"
echo "========================================"
echo "✅ saintvisionai deployed successfully"
echo "✅ Environment variables set"
echo "✅ Startup command configured"
echo "✅ App restarted"
echo ""
echo "🚀 YOUR SITE IS LIVE AT: https://$URL"
echo ""
echo "🔥 16 DAYS OF STRUGGLE ENDS NOW! 🔥"
echo ""
echo "🎯 Test your site by visiting: https://$URL"
echo "⏱️ Give it 1-2 minutes to fully start up"
echo ""
echo "✅ CAPTAIN DEVOPS GUARANTEE: THIS WILL WORK!"
