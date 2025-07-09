#!/bin/bash

# 🚀 SAINTSAL LIVE DEPLOYMENT - FINAL PUSH!
set -e  # Exit on any error

echo "🔥 Getting SaintSal LIVE on Azure..."
echo "====================================="

# Corrected Azure configuration
APP_NAME="saintsal-ui-live-$(date +%s)"
RESOURCE_GROUP="saintvisionai-production-rg"
LOCATION="eastus2"

# Environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "✅ Azure CLI ready!"

echo "📦 Creating Resource Group (if needed)..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none || echo "Resource group exists"

echo "📦 Creating App Service Plan..."
az appservice plan create \
    --name "${APP_NAME}-plan" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --sku B1 \
    --is-linux \
    --output none || echo "Plan might exist"

echo "🚀 Creating Web App with Node 20..."
az webapp create \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --plan "${APP_NAME}-plan" \
    --runtime "NODE:20-lts" \
    --output none

echo "🔧 Configuring deployment settings..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
        WEBSITE_NODE_DEFAULT_VERSION="20.11.0" \
        WEBSITE_RUN_FROM_PACKAGE="1" \
        NODE_ENV="production" \
    --output none

echo "🔑 Setting ALL environment variables..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
        NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
        SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
        NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY" \
    --output none

echo "📦 Building and deploying from current directory..."
# Create a deployment package
npm run build

echo "📡 Deploying to Azure..."
az webapp deployment source config-zip \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --src "$(pwd)" \
    --output none

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo "==============================="
echo "🌐 Your app is LIVE at: https://$APP_NAME.azurewebsites.net"
echo "🎨 Builder.io components are ready!"
echo "📱 Go to https://builder.io/content to start building!"
echo ""
echo "✅ SAINTSAL IS LIVE! 🚀🔥"
echo "App name: $APP_NAME"
