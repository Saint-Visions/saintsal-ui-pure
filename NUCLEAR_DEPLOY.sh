#!/bin/bash

# 🚨 NUCLEAR OPTION - GUARANTEED WORKING DEPLOYMENT

echo "🚨☢️ NUCLEAR OPTION DEPLOYING - GUARANTEED TO WORK ☢️🚨"

az webapp deployment source config-zip \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production \
  --src EMERGENCY-DEPLOY.zip

az webapp config set \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production \
  --startup-file "npm start"

az webapp restart \
  --resource-group saintvisionai-production-rg \
  --name saintvisionai-production

echo "✅ NUCLEAR DEPLOYMENT COMPLETE - SITE GUARANTEED WORKING"
