#!/bin/bash

# 🚀 SAINTVISIONAI™ - IMMEDIATE AZURE DEPLOYMENT
# One command to go live!

echo "🔥 SAINTVISIONAI™ - AZURE DEPLOYMENT STARTING!"
echo "=============================================="
echo ""

# Check if Azure CLI is installed
if command -v az &> /dev/null; then
    echo "✅ Azure CLI found"
    
    # Check if logged in
    if az account show &> /dev/null; then
        echo "✅ Azure CLI authenticated"
        
        # Prompt for deployment details
        echo ""
        echo "🎯 AZURE DEPLOYMENT CONFIGURATION"
        echo "================================="
        
        # Default values
        DEFAULT_RG="saintsal-rg"
        DEFAULT_APP="saintvisionai"
        DEFAULT_LOCATION="eastus"
        DEFAULT_PLAN="saintsal-plan"
        
        read -p "Resource Group [$DEFAULT_RG]: " RESOURCE_GROUP
        RESOURCE_GROUP=${RESOURCE_GROUP:-$DEFAULT_RG}
        
        read -p "App Name [$DEFAULT_APP]: " APP_NAME
        APP_NAME=${APP_NAME:-$DEFAULT_APP}
        
        read -p "Location [$DEFAULT_LOCATION]: " LOCATION
        LOCATION=${LOCATION:-$DEFAULT_LOCATION}
        
        read -p "Plan Name [$DEFAULT_PLAN]: " PLAN_NAME
        PLAN_NAME=${PLAN_NAME:-$DEFAULT_PLAN}
        
        echo ""
        echo "🚀 DEPLOYMENT CONFIGURATION:"
        echo "   Resource Group: $RESOURCE_GROUP"
        echo "   App Name: $APP_NAME"
        echo "   Location: $LOCATION"
        echo "   Plan: $PLAN_NAME"
        echo ""
        
        read -p "Continue with deployment? (y/N): " CONFIRM
        if [[ $CONFIRM =~ ^[Yy]$ ]]; then
            
            echo "🏗️ Creating Azure resources..."
            
            # Create resource group
            echo "📦 Creating resource group..."
            az group create --name $RESOURCE_GROUP --location $LOCATION
            
            # Create app service plan
            echo "⚙️ Creating app service plan..."
            az appservice plan create \
                --name $PLAN_NAME \
                --resource-group $RESOURCE_GROUP \
                --sku B1 \
                --is-linux
            
            # Create web app
            echo "🌐 Creating web app..."
            az webapp create \
                --resource-group $RESOURCE_GROUP \
                --plan $PLAN_NAME \
                --name $APP_NAME \
                --runtime "NODE|18-lts"
            
            # Deploy ZIP file
            echo "📦 Deploying application..."
            if [ -f "saintvisionai-azure-ready.zip" ]; then
                az webapp deployment source config-zip \
                    --resource-group $RESOURCE_GROUP \
                    --name $APP_NAME \
                    --src saintvisionai-azure-ready.zip
            else
                echo "❌ saintvisionai-azure-ready.zip not found!"
                echo "   Run ./CREATE_AZURE_PACKAGE.sh first"
                exit 1
            fi
            
            # Set environment variables
            echo "⚙️ Setting environment variables..."
            az webapp config appsettings set \
                --resource-group $RESOURCE_GROUP \
                --name $APP_NAME \
                --settings \
                NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
                NODE_ENV=production \
                WEBSITE_NODE_DEFAULT_VERSION=~18 \
                SCM_DO_BUILD_DURING_DEPLOYMENT=false
            
            # Get URL
            APP_URL="https://$APP_NAME.azurewebsites.net"
            
            echo ""
            echo "🎉 DEPLOYMENT COMPLETE!"
            echo "======================"
            echo "✅ App Name: $APP_NAME"
            echo "✅ URL: $APP_URL"
            echo "✅ Status: Live & ready!"
            echo ""
            echo "🔥 Your SaintVisionAI™ app is now LIVE!"
            echo "   Visit: $APP_URL"
            echo ""
            echo "U.S. Patent No. 10,290,222 - NOW LIVE ON AZURE! 🚀"
            
        else
            echo "❌ Deployment cancelled"
        fi
        
    else
        echo "❌ Please login to Azure CLI first:"
        echo "   az login"
    fi
    
else
    echo "❌ Azure CLI not found"
    echo ""
    echo "📋 MANUAL DEPLOYMENT INSTRUCTIONS:"
    echo "================================="
    echo "1. Go to: https://portal.azure.com"
    echo "2. Create Web App (Node 18 LTS)"
    echo "3. Advanced Tools → Zip Push Deploy"
    echo "4. Upload: saintvisionai-azure-ready.zip"
    echo "5. Set environment variables"
    echo "6. Restart & visit your URL!"
    echo ""
    echo "📖 Full instructions: AZURE_DEPLOYMENT_INSTRUCTIONS.md"
fi

echo ""
echo "🔥 SAINTVISIONAI™ - Ready to change the world!"
