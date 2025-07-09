#!/bin/bash
set -e

APP_NAME="saintsal-live-$(date +%s)"
RESOURCE_GROUP="saintvisionai-production-rg"
LOCATION="eastus2"

echo "🚀 Creating Azure Web App: $APP_NAME"

az group create --name "$RESOURCE_GROUP" --location "$LOCATION" --output none || echo "Group exists"

az appservice plan create \
    --name "${APP_NAME}-plan" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --sku B1 \
    --is-linux \
    --output none || echo "Plan exists"

az webapp create \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --plan "${APP_NAME}-plan" \
    --runtime "NODE:20-lts" \
    --output none

echo "🔑 Setting environment variables..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings \
        UPSTASH_VECTOR_REST_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=" \
        NEXT_PUBLIC_SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co" \
        SUPABASE_SERVICE_ROLE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc" \
        NEXT_PUBLIC_BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25" \
        NODE_ENV="production" \
    --output none

echo "📦 Using webapp up for deployment..."
az webapp up --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" --location "$LOCATION"

echo ""
echo "🎉🎉🎉 SAINTSAL IS LIVE! 🎉🎉🎉"
echo "🌐 https://$APP_NAME.azurewebsites.net"
echo "App name: $APP_NAME"
