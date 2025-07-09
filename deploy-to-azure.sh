#!/bin/bash

# 🚀 SaintVisionAI - Complete Azure Deployment Script
# This script deploys your app to Azure with all environment variables

echo "🚀 Starting Azure deployment for SaintVisionAI..."

# Variables (NEW app for THIS pure project)
APP_NAME="saintsal-ui-pure-builder"
RESOURCE_GROUP="SaintSal Core Production"
LOCATION="East US"

# Your actual environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"

# Builder.io API key - READY!
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "📦 Step 1: Creating Azure App Service..."

# Deploy the app
az webapp up --sku B1 --name $APP_NAME --resource-group "$RESOURCE_GROUP" --location "$LOCATION"

echo "🔑 Step 2: Setting environment variables..."

# Set all environment variables
az webapp config appsettings set \
  --name $APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --settings \
    UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
    NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
    SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
    NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY"

echo "🔄 Step 3: Restarting app..."

# Restart the app to load new environment variables
az webapp restart --name $APP_NAME --resource-group "$RESOURCE_GROUP"

echo "✅ Deployment complete!"
echo ""
echo "🌐 Your app is available at: https://$APP_NAME.azurewebsites.net"
echo ""
echo "📝 Next steps:"
echo "   1. ✅ All environment variables are set!"
echo "   2. ✅ Test your site at the URL above"
echo "   3. ✅ Go to builder.io/content to create your first page!"
echo ""
echo "🎉 SaintVisionAI is live on Azure!"
