#!/bin/bash

# 🚨 EMERGENCY DIAGNOSIS - CAPTAIN DEVOPS PROTOCOL

echo "🚨 EMERGENCY DIAGNOSIS STARTING..."

# Check Azure app status
echo "📊 Checking Azure app status..."
az webapp show --name saintvisionai-production --resource-group saintvisionai-production-rg --query "{name:name,state:state,hostNames:hostNames}" -o table

# Check if app is running
echo "🔍 Checking if app is responding..."
curl -I https://saintvisionai-production.azurewebsites.net/ || echo "❌ Site not responding"

# Check logs
echo "📝 Getting recent logs..."
az webapp log tail --name saintvisionai-production --resource-group saintvisionai-production-rg --provider filesystem &
sleep 5
pkill -f "az webapp log"

echo "✅ Diagnosis complete"
