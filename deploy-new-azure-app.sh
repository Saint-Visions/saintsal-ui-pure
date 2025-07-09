#!/bin/bash

# 🚀 SaintVisionAI - Create NEW Azure App Service
# This creates a fresh app service for the current saintsal-ui-pure project

echo "🚀 Creating NEW Azure App Service for saintsal-ui-pure project..."

# New app configuration
NEW_APP_NAME="saintsal-ui-pure-builder"
RESOURCE_GROUP="saintvisionai-production-rg"
LOCATION="East US 2"

# Your environment variables
UPSTASH_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM="
SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co"
SUPABASE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc"
BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25"

echo "📦 Step 1: Creating NEW Azure App Service..."

# Create NEW app service from current GitHub repo
az webapp create \
  --name $NEW_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --plan "saintvisionai-plan" \
  --runtime "NODE:18-lts"

echo "🔗 Step 2: Connecting to current GitHub repo..."

# Connect to current saintsal-ui-pure GitHub repo
az webapp deployment source config \
  --name $NEW_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --repo-url "https://github.com/Saint-Visions/saintsal-ui-pure.git" \
  --branch "main" \
  --manual-integration

echo "🔑 Step 3: Setting environment variables..."

# Set all environment variables
az webapp config appsettings set \
  --name $NEW_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --settings \
    UPSTASH_VECTOR_REST_TOKEN="$UPSTASH_TOKEN" \
    NEXT_PUBLIC_SUPABASE_URL="$SUPABASE_URL" \
    SUPABASE_SERVICE_ROLE_SECRET="$SUPABASE_SECRET" \
    NEXT_PUBLIC_BUILDER_API_KEY="$BUILDER_API_KEY" \
    NODE_ENV="production"

echo "⚙️ Step 4: Configuring build settings..."

# Set Node.js build configuration
az webapp config appsettings set \
  --name $NEW_APP_NAME \
  --resource-group "$RESOURCE_GROUP" \
  --settings \
    SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
    WEBSITE_NODE_DEFAULT_VERSION="18.17.0"

echo "🔄 Step 5: Triggering deployment..."

# Trigger deployment from GitHub
az webapp deployment source sync \
  --name $NEW_APP_NAME \
  --resource-group "$RESOURCE_GROUP"

echo "✅ NEW App Service created and deployed!"
echo ""
echo "🌐 Your NEW app is available at: https://$NEW_APP_NAME.azurewebsites.net"
echo "📱 This connects to your current saintsal-ui-pure GitHub repo with Builder.io integration"
echo ""
echo "🎉 SaintVisionAI Builder.io integration is live on the NEW app!"
