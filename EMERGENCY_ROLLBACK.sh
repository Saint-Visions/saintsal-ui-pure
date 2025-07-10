#!/bin/bash

# 🚨 EMERGENCY ROLLBACK TO WORKING VERSION

echo "🚨 EMERGENCY ROLLBACK STARTING..."

# Deploy the simple working version that was confirmed working
echo "🔄 Deploying confirmed working version..."

az webapp deployment source config-zip \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production \
  --src FINAL-FIX.zip

# Set simple startup command
echo "⚙️ Setting simple startup..."
az webapp config set \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production \
  --startup-file "npm start"

# Restart
echo "🔄 Restarting..."
az webapp restart \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production

echo "✅ Rollback complete - check site in 60 seconds"
