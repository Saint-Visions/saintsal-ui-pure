#!/bin/bash

# 🔍 COMPREHENSIVE SYSTEM ASSESSMENT

echo "🔍 COMPREHENSIVE SAINTVISIONAI ASSESSMENT STARTING..."
echo "=================================================="

echo "📊 1. CHECKING LOCAL DEVELOPMENT..."
echo "   - Node.js version:"
node --version
echo "   - NPM version:"
npm --version
echo "   - Current directory contents:"
ls -la

echo ""
echo "📊 2. CHECKING AZURE STATUS..."
echo "   - Azure CLI login status:"
az account show --query "{name:name,id:id,tenantId:tenantId}" -o table 2>/dev/null || echo "❌ Not logged in"

echo "   - Current Azure apps:"
az webapp list --query "[].{Name:name,ResourceGroup:resourceGroup,State:state,URL:hostNames[0]}" -o table 2>/dev/null || echo "❌ Cannot list apps"

echo ""
echo "📊 3. CHECKING NETWORK CONNECTIVITY..."
echo "   - Testing Azure site:"
curl -I https://saintvisionai-production.azurewebsites.net/ -m 10 2>/dev/null || echo "❌ Azure site not responding"

echo "   - Testing local port 8181:"
curl -I http://localhost:8181/ -m 5 2>/dev/null || echo "❌ Local port 8181 not responding"

echo ""
echo "📊 4. CHECKING PROJECT FILES..."
echo "   - Package.json exists:" && ls package.json 2>/dev/null || echo "❌ No package.json"
echo "   - Next.js app exists:" && ls app/page.tsx 2>/dev/null || echo "❌ No Next.js app"
echo "   - Build output exists:" && ls .next 2>/dev/null || echo "❌ No build output"

echo ""
echo "📊 5. CHECKING DEPLOYMENT FILES..."
echo "   - Server files:"
ls server.js production-server.js minimal.js 2>/dev/null || echo "❌ No server files"
echo "   - Deployment packages:"
ls *.zip 2>/dev/null || echo "❌ No deployment packages"

echo ""
echo "✅ ASSESSMENT COMPLETE"
echo "Review the above output to understand current state"
