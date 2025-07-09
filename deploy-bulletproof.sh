#!/bin/bash

# 🚀 BULLETPROOF SaintVisionAI Deployment - DevOps Captain Edition
set -e  # Exit on any error

echo "🔥 DevOps Captain deploying SaintVisionAI..."
echo "=========================================="

# Your ACTUAL Azure configuration
NEW_APP_NAME="saintsal-ui-pure-builder"
RESOURCE_GROUP="saintvisionai-production-rg"
LOCATION="eastus2"
APP_SERVICE_PLAN="saintvisionai-plan"

# Environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "✅ Checking Azure login..."
az account show --output none || {
    echo "❌ Not logged into Azure. Run: az login"
    exit 1
}

echo "✅ Azure CLI ready!"

echo "📦 Creating Azure Web App..."
az webapp create \
    --name "$NEW_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --plan "$APP_SERVICE_PLAN" \
    --runtime "NODE:18-lts" \
    --output none || {
    echo "⚠️ App might already exist, continuing..."
}

echo "🔧 Configuring Node.js settings..."
az webapp config appsettings set \
    --name "$NEW_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
        WEBSITE_NODE_DEFAULT_VERSION="18.17.0" \
        WEBSITE_RUN_FROM_PACKAGE="1" \
    --output none

echo "🔑 Setting environment variables..."
az webapp config appsettings set \
    --name "$NEW_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
        NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
        SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
        NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY" \
        NODE_ENV="production" \
    --output none

echo "📡 Setting up GitHub deployment..."
az webapp deployment source config \
    --name "$NEW_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --repo-url "https://github.com/Saint-Visions/saintsal-ui-pure.git" \
    --branch "main" \
    --manual-integration \
    --output none

echo "🔄 Triggering deployment..."
az webapp deployment source sync \
    --name "$NEW_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --output none

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo "=========================================="
echo "🌐 Your app is LIVE at: https://$NEW_APP_NAME.azurewebsites.net"
echo "🎨 Builder.io components are ready!"
echo "📱 Go to https://builder.io/content to start building!"
echo ""
echo "✅ DevOps Captain mission accomplished! 🚀"
