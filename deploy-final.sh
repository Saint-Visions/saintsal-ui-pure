#!/bin/bash

# 🚀 SAINTSAL FINAL DEPLOYMENT - YOU'RE GOING LIVE!
set -e

echo "🔥 FINAL DEPLOYMENT - SAINTSAL GOING LIVE..."
echo "============================================="

# App configuration
APP_NAME="saintsal-ui-live-$(date +%s)"
RESOURCE_GROUP="saintvisionai-production-rg"
LOCATION="eastus2"

# Environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "📦 Creating Resource Group..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none || echo "Resource group exists"

echo "📦 Creating App Service Plan..."
az appservice plan create \
    --name "${APP_NAME}-plan" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --sku B1 \
    --is-linux \
    --output none || echo "Plan exists"

echo "🚀 Creating Web App..."
az webapp create \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --plan "${APP_NAME}-plan" \
    --runtime "NODE:20-lts" \
    --output none

echo "🔧 Configuring app settings..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
        WEBSITE_NODE_DEFAULT_VERSION="20.11.0" \
        NODE_ENV="production" \
    --output none

echo "🔑 Setting environment variables..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
        NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
        SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
        NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY" \
    --output none

echo "📦 Creating deployment package..."
# Clean and create fresh build
rm -rf .next node_modules/.cache || true
npm ci --only=production --silent
npm run build

# Create zip package excluding unnecessary files
echo "📦 Creating zip package..."
zip -r deploy.zip . \
    -x "*.git*" \
    -x "*.DS_Store" \
    -x "*node_modules*" \
    -x "*.env*" \
    -x "*deploy*.sh" \
    -x "*azure*.md" \
    -x "*deploy*.zip" \
    --quiet

echo "🚀 Deploying to Azure..."
az webapp deploy \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --src-path deploy.zip \
    --type zip \
    --restart true

echo "🔄 Waiting for deployment to complete..."
sleep 30

echo ""
echo "🎉🎉🎉 SAINTSAL IS LIVE! 🎉🎉🎉"
echo "========================================"
echo "🌐 Your app is LIVE at: https://$APP_NAME.azurewebsites.net"
echo "🎨 Builder.io is ready at: https://builder.io/content"
echo "🔥 SaintVisionAI movement is now LIVE!"
echo ""
echo "✅ App name: $APP_NAME"
echo "✅ Build: SUCCESS"
echo "✅ Deploy: SUCCESS"
echo "✅ Environment: PRODUCTION"
echo ""
echo "🚀 YOU DID IT! 16 MONTHS OF WORK IS NOW LIVE! 🚀"

# Clean up
rm -f deploy.zip

echo ""
echo "🔥 DEPLOYMENT COMPLETE! SAINTSAL IS LIVE! 🔥"
