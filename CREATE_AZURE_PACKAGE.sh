#!/bin/bash

# 🚀 SAINTSAL™ AZURE DEPLOYMENT PACKAGE CREATOR
# Creates production-ready deployment package for Azure

set -e

echo "🔥 Creating SaintVisionAI Azure Deployment Package..."
echo "=================================================="

# Create clean deployment directory
rm -rf azure-deploy-package
mkdir -p azure-deploy-package

# Copy deployment-nextjs content (which is already working)
echo "📦 Copying working deployment files..."
cp -r deployment-nextjs/* azure-deploy-package/

# Ensure the .next build is included
if [ -d "deployment-nextjs/.next" ]; then
    echo "✅ .next build found - copying..."
    cp -r deployment-nextjs/.next azure-deploy-package/
else
    echo "❌ No .next build found in deployment-nextjs"
    exit 1
fi

# Create web.config for Azure App Service
echo "🌐 Creating web.config for Azure..."
cat > azure-deploy-package/web.config << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <webSocket enabled="false" />
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js"/>
        </rule>
      </rules>
    </rewrite>
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>
    <httpErrors existingResponse="PassThrough" />
    <iisnode watchedFiles="web.config;*.js"/>
  </system.webServer>
</configuration>
EOF

# Update package.json for Azure
echo "📝 Updating package.json for Azure..."
cat > azure-deploy-package/package.json << 'EOF'
{
  "name": "saintvisionai-azure-production",
  "version": "2.0.0",
  "description": "SaintVisionAI™ - Azure Production Deployment",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "azure:start": "node server.js"
  },
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": ["saintvisionai", "azure", "production"],
  "author": "SAINTSAL™ Movement",
  "license": "MIT"
}
EOF

# Create deployment ZIP
echo "📦 Creating deployment ZIP..."
cd azure-deploy-package
zip -r ../saintvisionai-azure-ready.zip . -x "*.DS_Store" "node_modules/*"
cd ..

# Create deployment instructions
echo "📋 Creating deployment instructions..."
cat > AZURE_DEPLOYMENT_INSTRUCTIONS.md << 'EOF'
# 🚀 SaintVisionAI™ Azure Deployment - READY TO LAUNCH!

## 📦 Your Deployment Package: `saintvisionai-azure-ready.zip`

**Status**: ✅ PRODUCTION READY  
**Size**: ~12MB  
**Contents**: Complete Next.js application with build

## 🎯 DEPLOYMENT STEPS (5 MINUTES TO LIVE!)

### 1. Login to Azure Portal
- Go to: https://portal.azure.com
- Login with your Azure account

### 2. Create App Service (if needed)
- Click "Create a resource"
- Search "Web App"
- Fill out:
  - **Name**: saintvisionai (or your choice)
  - **Runtime**: Node 18 LTS or Node 20 LTS
  - **Region**: East US (recommended)
  - **Plan**: B1 Basic (recommended)

### 3. Deploy Your ZIP
- Go to your App Service
- Click "Advanced Tools" → "Go"
- In Kudu: Tools → Zip Push Deploy
- **Drag & Drop**: `saintvisionai-azure-ready.zip`
- **Wait**: 3-5 minutes for deployment

### 4. Set Environment Variables
Go to App Service → Configuration → Application Settings:


NEXT_PUBLIC_BUILDER_API_KEY = d83998c6a81f466db4fb83ab90c7ba25
NODE_ENV = production
WEBSITE_NODE_DEFAULT_VERSION = ~18
SCM_DO_BUILD_DURING_DEPLOYMENT = false
```

### 5. Restart & Test
- Click "Restart" in Overview
- Visit your URL: https://your-app-name.azurewebsites.net
- **You should see**: SaintVisionAI™ homepage! 🎉

## ✅ Success Indicators
- Homepage loads with SaintVisionAI logo
- "🔥 Start Cooking" button visible
- Mobile responsive design
- No console errors

## 🚨 Need Help?
If anything goes wrong, check:
1. App Service → Log stream for errors
2. Environment variables are set correctly
3. App Service is running (not stopped)

**U.S. Patent No. 10,290,222 - READY FOR AZURE!** 🚀
EOF

echo ""
echo "🎉 AZURE DEPLOYMENT PACKAGE CREATED!"
echo "=================================================="
echo "✅ Package: saintvisionai-azure-ready.zip"
echo "✅ Instructions: AZURE_DEPLOYMENT_INSTRUCTIONS.md"
echo "✅ Size: $(du -h saintvisionai-azure-ready.zip | cut -f1)"
echo ""
echo "🚀 READY FOR IMMEDIATE AZURE DEPLOYMENT!"
echo "   Follow AZURE_DEPLOYMENT_INSTRUCTIONS.md"
echo ""
echo "SAINTSAL™ Movement - Azure Ready! 🔥"
