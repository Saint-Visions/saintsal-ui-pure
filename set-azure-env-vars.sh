#!/bin/bash

# 🔑 Set Environment Variables in Azure - DEVOPS CAPTAIN EDITION
echo "🔑 Setting environment variables in Azure..."

APP_NAME="saintvisionai-production"
RESOURCE_GROUP="saintvisionai-production-rg"

echo "Setting Builder.io API Key..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25

echo "Setting Supabase URL..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings NEXT_PUBLIC_SUPABASE_URL=https://nivrmhkdgtmmbtswyvey.supabase.co

echo "Setting Supabase Secret..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings SUPABASE_SERVICE_ROLE_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc

echo "Setting Upstash Vector Token..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings UPSTASH_VECTOR_REST_TOKEN=AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=

echo "Setting Node environment..."
az webapp config appsettings set \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --settings NODE_ENV=production

echo "✅ All environment variables set!"
echo "🔄 Restarting app..."

az webapp restart --name "$APP_NAME" --resource-group "$RESOURCE_GROUP"

echo "🎉 Environment variables are now set in Azure!"
echo "🌐 Check your app at: https://saintvisionai-production.azurewebsites.net"
