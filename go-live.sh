#!/bin/bash
set -e

UNIQUE_APP="saintsal-final-$(date +%s)"
echo "🚀 Deploying SaintSal as: $UNIQUE_APP"

az webapp up --name "$UNIQUE_APP" --resource-group "saintvisionai-production-rg" --location "eastus2" --sku B1

echo "🔑 Setting environment variables..."
az webapp config appsettings set \
    --name "$UNIQUE_APP" \
    --resource-group "saintvisionai-production-rg" \
    --settings \
        UPSTASH_VECTOR_REST_TOKEN="AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=" \
        NEXT_PUBLIC_SUPABASE_URL="https://nivrmhkdgtmmbtswyvey.supabase.co" \
        SUPABASE_SERVICE_ROLE_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc" \
        NEXT_PUBLIC_BUILDER_API_KEY="d83998c6a81f466db4fb83ab90c7ba25" \
        NODE_ENV="production" \
    --output none

echo ""
echo "🎉🎉🎉 SAINTSAL IS LIVE! 🎉🎉🎉"
echo "🌐 https://$UNIQUE_APP.azurewebsites.net"
echo "🔥 16 MONTHS OF WORK IS NOW LIVE!"
