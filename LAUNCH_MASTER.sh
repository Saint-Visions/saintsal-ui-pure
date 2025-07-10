#!/bin/bash

# 🚀 MASTER LAUNCH EXECUTION SCRIPT

echo "🚀🔥 SAINTVISIONAI MASTER LAUNCH SEQUENCE 🔥🚀"
echo "=============================================="

# Configuration
RESOURCE_GROUP="saintvisionai-production-rg"
APP_NAME="saintvisionai-production"

# Launch Step 1: Pre-flight Check
preflight_check() {
    echo "🔍 PREFLIGHT CHECK"
    echo "=================="
    
    # Check Azure CLI
    az account show > /dev/null 2>&1 || {
        echo "❌ Azure CLI not logged in"
        echo "Run: az login"
        exit 1
    }
    
    # Check app exists
    az webapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" > /dev/null 2>&1 || {
        echo "❌ Azure app does not exist"
        exit 1
    }
    
    echo "✅ Azure CLI ready"
    echo "✅ App exists"
    echo "✅ Preflight check passed"
    echo ""
}

# Launch Step 2: Deploy Strategy 1 (Next.js)
deploy_nextjs() {
    echo "🚀 DEPLOYMENT STRATEGY 1: NEXT.JS"
    echo "=================================="
    
    if [ ! -f "NEXTJS-DEPLOYMENT.zip" ]; then
        echo "❌ NEXTJS-DEPLOYMENT.zip not found, creating..."
        ./DEPLOYMENT_STRATEGY.sh
    fi
    
    echo "📦 Deploying Next.js package..."
    az webapp deployment source config-zip \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --src NEXTJS-DEPLOYMENT.zip
    
    if [ $? -eq 0 ]; then
        echo "✅ Next.js deployment uploaded"
        
        # Set startup command
        az webapp config set \
            --resource-group "$RESOURCE_GROUP" \
            --name "$APP_NAME" \
            --startup-file "npm install && npm start"
        
        # Set environment variables
        az webapp config appsettings set \
            --resource-group "$RESOURCE_GROUP" \
            --name "$APP_NAME" \
            --settings \
                NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25 \
                NODE_ENV=production \
                WEBSITE_NODE_DEFAULT_VERSION=~20
        
        # Restart app
        az webapp restart --resource-group "$RESOURCE_GROUP" --name "$APP_NAME"
        
        echo "⏱️ Waiting for app to start (2 minutes)..."
        sleep 120
        
        # Test deployment
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_NAME.azurewebsites.net" -m 30)
        
        if [ "$HTTP_CODE" = "200" ]; then
            echo "✅ NEXT.JS DEPLOYMENT SUCCESSFUL!"
            return 0
        else
            echo "❌ Next.js deployment failed (HTTP $HTTP_CODE)"
            return 1
        fi
    else
        echo "❌ Next.js deployment upload failed"
        return 1
    fi
}

# Launch Step 3: Deploy Strategy 2 (Static)
deploy_static() {
    echo "🚀 DEPLOYMENT STRATEGY 2: STATIC HTML"
    echo "====================================="
    
    if [ ! -f "STATIC-DEPLOYMENT.zip" ]; then
        echo "❌ STATIC-DEPLOYMENT.zip not found, creating..."
        ./DEPLOYMENT_STRATEGY.sh
    fi
    
    echo "📦 Deploying static package..."
    az webapp deployment source config-zip \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --src STATIC-DEPLOYMENT.zip
    
    if [ $? -eq 0 ]; then
        echo "✅ Static deployment uploaded"
        
        # Set startup command
        az webapp config set \
            --resource-group "$RESOURCE_GROUP" \
            --name "$APP_NAME" \
            --startup-file "npm start"
        
        # Restart app
        az webapp restart --resource-group "$RESOURCE_GROUP" --name "$APP_NAME"
        
        echo "⏱️ Waiting for app to start (1 minute)..."
        sleep 60
        
        # Test deployment
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_NAME.azurewebsites.net" -m 30)
        
        if [ "$HTTP_CODE" = "200" ]; then
            echo "✅ STATIC DEPLOYMENT SUCCESSFUL!"
            return 0
        else
            echo "❌ Static deployment failed (HTTP $HTTP_CODE)"
            return 1
        fi
    else
        echo "❌ Static deployment upload failed"
        return 1
    fi
}

# Launch Step 4: Deploy Strategy 3 (Emergency)
deploy_emergency() {
    echo "🚀 DEPLOYMENT STRATEGY 3: EMERGENCY MINIMAL"
    echo "==========================================="
    
    if [ ! -f "EMERGENCY-MINIMAL.zip" ]; then
        echo "❌ EMERGENCY-MINIMAL.zip not found, creating..."
        ./DEPLOYMENT_STRATEGY.sh
    fi
    
    echo "📦 Deploying emergency package..."
    az webapp deployment source config-zip \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --src EMERGENCY-MINIMAL.zip
    
    if [ $? -eq 0 ]; then
        echo "✅ Emergency deployment uploaded"
        
        # Set startup command
        az webapp config set \
            --resource-group "$RESOURCE_GROUP" \
            --name "$APP_NAME" \
            --startup-file "npm start"
        
        # Restart app
        az webapp restart --resource-group "$RESOURCE_GROUP" --name "$APP_NAME"
        
        echo "⏱️ Waiting for app to start (30 seconds)..."
        sleep 30
        
        # Test deployment
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$APP_NAME.azurewebsites.net" -m 30)
        
        if [ "$HTTP_CODE" = "200" ]; then
            echo "✅ EMERGENCY DEPLOYMENT SUCCESSFUL!"
            return 0
        else
            echo "❌ Emergency deployment failed (HTTP $HTTP_CODE)"
            return 1
        fi
    else
        echo "❌ Emergency deployment upload failed"
        return 1
    fi
}

# Launch Step 5: Final Testing
final_testing() {
    echo "🧪 FINAL TESTING"
    echo "================"
    
    ./TESTING_SUITE.sh
    
    echo ""
    echo "🎯 LAUNCH VERIFICATION"
    echo "======================"
    echo "✅ Site URL: https://$APP_NAME.azurewebsites.net"
    echo "✅ Check the site manually"
    echo "✅ Test on mobile device"
    echo "✅ Verify all features work"
}

# Execute Launch Sequence
echo "🚀 STARTING LAUNCH SEQUENCE..."
echo ""

# Step 1: Preflight
preflight_check

# Step 2-4: Try deployment strategies in order
if deploy_nextjs; then
    echo "🎉 SUCCESS WITH NEXT.JS DEPLOYMENT!"
elif deploy_static; then
    echo "🎉 SUCCESS WITH STATIC DEPLOYMENT!"
elif deploy_emergency; then
    echo "🎉 SUCCESS WITH EMERGENCY DEPLOYMENT!"
else
    echo "❌ ALL DEPLOYMENT STRATEGIES FAILED!"
    echo "Manual intervention required."
    exit 1
fi

# Step 5: Final testing
final_testing

echo ""
echo "🎉🔥🚀 LAUNCH SEQUENCE COMPLETE! 🚀🔥🎉"
echo "======================================="
echo "✅ SaintVisionAI is LIVE!"
echo "✅ 16 days of struggle ENDED!"
echo "✅ Captain DevOps mission COMPLETE!"
echo "🌐 Your site: https://$APP_NAME.azurewebsites.net"
echo "🏆 U.S. Patent No. 10,290,222 - OFFICIALLY LIVE!"
