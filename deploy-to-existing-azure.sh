#!/bin/bash

# 🚀 SaintVisionAI - Deploy to Existing Azure App Service
# This script deploys to your existing Azure setup

echo "🚀 Deploying to existing Azure App Service..."

# Your existing Azure setup
EXISTING_APP_NAME="saintsal-core-api-openai-96ea"
RESOURCE_GROUP="SaintSal Core Production"

# Your actual environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "🔧 Updating existing app: $EXISTING_APP_NAME"

# Update environment variables on existing app
az webapp config appsettings set \
  --name $EXISTING_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --settings \
    UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
    NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
    SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
    NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY"

echo "📦 Deploying code to existing app..."

# Deploy the code to existing app
az webapp deployment source config-zip \
  --name $EXISTING_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --src ./deploy.zip

echo "🔄 Restarting app..."

# Restart the app
az webapp restart --name $EXISTING_APP_NAME --resource-group "$RESOURCE_GROUP"

echo "✅ Deployment to existing app complete!"
echo ""
echo "🌐 Your app is available at: https://$EXISTING_APP_NAME.azurewebsites.net"
echo ""
echo "🎉 SaintVisionAI Builder.io integration is live!"
