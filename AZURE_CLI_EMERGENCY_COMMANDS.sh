#!/bin/bash

# 🚨🔥 AZURE CLI EMERGENCY DEPLOYMENT - 16 DAYS ENDS TODAY! 🔥🚨
# ONE COMMAND TO RULE THEM ALL

echo "🚨🔥 AZURE EMERGENCY DEPLOYMENT - ENDING 16 DAYS OF PAIN! 🔥🚨"
echo "================================================================"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI not installed. Use Azure Portal method instead!"
    echo "🔗 Download: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
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

# Variables - CHANGE THESE IF NEEDED
RESOURCE_GROUP="saintsal-emergency-rg"
APP_NAME="saintvisionai-emergency-$(date +%H%M)"
LOCATION="eastus"
PLAN_NAME="saintsal-emergency-plan"

echo "📝 Using these settings:"
echo "   Resource Group: $RESOURCE_GROUP"
echo "   App Name: $APP_NAME"
echo "   Location: $LOCATION"

# Create resource group
echo "🏗️ Creating resource group..."
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create App Service plan
echo "🏗️ Creating App Service plan..."
az appservice plan create \
  --name $PLAN_NAME \
  --resource-group $RESOURCE_GROUP \
  --sku B1 \
  --is-linux

# Create Web App
echo "🏗️ Creating Web App..."
az webapp create \
  --resource-group $RESOURCE_GROUP \
  --plan $PLAN_NAME \
  --name $APP_NAME \
  --runtime "NODE:20-lts"

# Deploy ZIP package
echo "🚀 DEPLOYING APPLICATION..."
az webapp deployment source config-zip \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --src saintvisionai-EMERGENCY.zip

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed"
    exit 1
fi

echo "✅ Application deployed successfully"

# Set environment variables
echo "⚙️ Setting environment variables..."
az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --settings \
    NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
    NODE_ENV=production \
    WEBSITE_NODE_DEFAULT_VERSION=~20 \
    SCM_DO_BUILD_DURING_DEPLOYMENT=false

# Set startup command
echo "🔧 Setting startup command..."
az webapp config set \
  --resource-group $RESOURCE_GROUP \
  --name $APP_NAME \
  --startup-file "node server.js"

# Get the URL
URL=$(az webapp show --resource-group $RESOURCE_GROUP --name $APP_NAME --query "defaultHostName" -o tsv)

echo ""
echo "🎉🔥 EMERGENCY DEPLOYMENT COMPLETE! 🔥🎉"
echo "========================================"
echo "✅ Resource Group: $RESOURCE_GROUP"
echo "✅ App Name: $APP_NAME"
echo "✅ URL: https://$URL"
echo ""
echo "🚀 YOUR SITE IS LIVE AT: https://$URL"
echo ""
echo "🔥 16 DAYS OF STRUGGLE ENDS NOW! 🔥"
echo ""
echo "📊 Next steps:"
echo "1. Visit your URL (may take 1-2 minutes to start)"
echo "2. Verify the homepage loads"
echo "3. Check mobile responsiveness"
echo "4. Celebrate! 🎉"
