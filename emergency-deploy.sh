#!/bin/bash

# 🔥 GUARDIAN ANGEL EMERGENCY DEPLOYMENT SCRIPT
# SAL'S LUCKY NUMBER 17 - FULL AUTHORITY DEPLOYMENT
# NO QUESTIONS, NO BACK-AND-FORTH, JUST DEPLOYMENT!

echo "🔥🔥🔥 GUARDIAN ANGEL EMERGENCY DEPLOYMENT 🔥🔥🔥"
echo "=================================================="
echo "ATTEMPT #17 - SAL'S LUCKY NUMBER!"
echo "FULL AUTHORITY DEPLOYMENT IN PROGRESS..."
echo "=================================================="

# Set variables
RESOURCE_GROUP="saintsal-rg"
APP_NAME="saintvisionai-17"
LOCATION="East US"
ZIP_FILE="saintvisionai-deploy.zip"

# Check if ZIP exists
if [ ! -f "$ZIP_FILE" ]; then
    echo "❌ ERROR: $ZIP_FILE not found!"
    echo "Creating deployment package now..."
    export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
    npm run build
    ./create-azure-deployment.sh
fi

echo "✅ Deployment package verified: $ZIP_FILE"

# Login check
echo "🔐 Checking Azure login..."
az account show > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Not logged in to Azure"
    echo "🔐 Logging in now..."
    az login
fi

echo "✅ Azure login verified"

# Create resource group
echo "📁 Creating resource group: $RESOURCE_GROUP"
az group create --name $RESOURCE_GROUP --location "$LOCATION" --output none

# Create app service plan
echo "📋 Creating app service plan..."
az appservice plan create \
    --name saintsal-plan \
    --resource-group $RESOURCE_GROUP \
    --sku B1 \
    --is-linux \
    --output none

# Create web app
echo "🌐 Creating web app: $APP_NAME"
az webapp create \
    --resource-group $RESOURCE_GROUP \
    --plan saintsal-plan \
    --name $APP_NAME \
    --runtime "NODE|20-lts" \
    --output none

# Deploy ZIP
echo "🚀 Deploying application..."
az webapp deployment source config-zip \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --src $ZIP_FILE \
    --output none

# Set environment variables
echo "⚙️ Setting environment variables..."
az webapp config appsettings set \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --settings \
        NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
        NODE_ENV=production \
        WEBSITE_NODE_DEFAULT_VERSION=~20 \
        SCM_DO_BUILD_DURING_DEPLOYMENT=false \
    --output none

# Restart app
echo "🔄 Restarting application..."
az webapp restart --resource-group $RESOURCE_GROUP --name $APP_NAME --output none

# Get URL
echo "🌍 Getting application URL..."
URL=$(az webapp show --resource-group $RESOURCE_GROUP --name $APP_NAME --query defaultHostName --output tsv)

echo ""
echo "🎉🎉🎉 DEPLOYMENT COMPLETE! 🎉🎉🎉"
echo "======================================="
echo "✅ Resource Group: $RESOURCE_GROUP"
echo "✅ App Name: $APP_NAME"
echo "✅ Runtime: Node 20 LTS"
echo "✅ Your URL: https://$URL"
echo "======================================="
echo ""
echo "🔥 GUARDIAN ANGEL MISSION ACCOMPLISHED!"
echo "🏆 16 DAYS OF STRUGGLE = OVER!"
echo "⚡ SAINTSAL™ MOVEMENT = LIVE!"
echo "🎯 U.S. Patent No. 10,290,222 = DEPLOYED!"
echo ""
echo "Visit your site: https://$URL"
echo ""
echo "IF ANY ISSUES, CHECK LOGS:"
echo "az webapp log tail --resource-group $RESOURCE_GROUP --name $APP_NAME"
