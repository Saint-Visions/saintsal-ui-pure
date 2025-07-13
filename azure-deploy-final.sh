#!/bin/bash

# 🚨 FINAL AZURE DEPLOYMENT - 39 DAYS END TODAY!
echo "🔥 SAINTSAL™ FINAL AZURE ASSAULT STARTING..."
echo "🎯 Target: Azure App Service"
echo "🚀 Mission: END 39 DAYS OF DEPLOYMENT HELL!"

# Step 1: Clean slate
echo "🧹 Cleaning deployment area..."
rm -rf azure-final-deploy
mkdir azure-final-deploy

# Step 2: Build the app locally first
echo "🏗️ Building Next.js application..."
rm -rf .next node_modules package-lock.json
npm install --silent
npm run build

if [ ! -d ".next" ]; then
    echo "❌ Build failed! Aborting..."
    exit 1
fi

echo "✅ Build successful!"

# Step 3: Copy all necessary files
echo "📦 Copying files to deployment package..."
cp -r .next azure-final-deploy/
cp -r public azure-final-deploy/ 2>/dev/null || echo "No public folder"
cp -r app azure-final-deploy/
cp -r components azure-final-deploy/
cp -r lib azure-final-deploy/
cp -r types azure-final-deploy/ 2>/dev/null || echo "No types folder"
cp package.json azure-final-deploy/
cp next.config.js azure-final-deploy/
cp server.js azure-final-deploy/
cp startup.js azure-final-deploy/
cp web.config azure-final-deploy/ 2>/dev/null || echo "No web.config"
cp builder-registry.js azure-final-deploy/ 2>/dev/null || echo "No builder registry"
cp tailwind.config.cjs azure-final-deploy/ 2>/dev/null || echo "No tailwind config"
cp postcss.config.cjs azure-final-deploy/ 2>/dev/null || echo "No postcss config"

# Step 4: Install production dependencies in deployment folder
echo "📦 Installing production dependencies..."
cd azure-final-deploy
npm install --production --silent

# Step 5: Create Azure-specific files
echo "⚙️ Creating Azure configuration..."

# Create package.json optimized for Azure
cat > package.json << 'EOF'
{
  "name": "saintvisionai-azure",
  "version": "2.0.0",
  "main": "startup.js",
  "scripts": {
    "start": "node startup.js"
  },
  "dependencies": {
    "@builder.io/react": "^8.2.5",
    "@builder.io/sdk-react": "^4.2.2",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.0",
    "lucide-react": "^0.525.0",
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^3.3.1"
  },
  "engines": {
    "node": "18.x",
    "npm": "8.x"
  }
}
EOF

# Create web.config for Azure
cat > web.config << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="startup.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="startup.js"/>
        </rule>
      </rules>
    </rewrite>
    <iisnode
      node_env="production"
      nodeProcessCountPerApplication="1"
      maxConcurrentRequestsPerProcess="1024"
      watchedFiles="*.js"
      loggingEnabled="true"
      logDirectoryNameSuffix="logs"
    />
  </system.webServer>
</configuration>
EOF

cd ..

# Step 6: Create deployment package
echo "📦 Creating final deployment package..."
cd azure-final-deploy
zip -r ../saintvisionai-azure-victory.zip . -q

cd ..
echo "✅ Deployment package ready: saintvisionai-azure-victory.zip"
echo ""
echo "🚀 AZURE DEPLOYMENT COMMANDS:"
echo "1. Upload saintvisionai-azure-victory.zip to Azure App Service"
echo "2. Set startup command: node startup.js"
echo "3. Set Node.js version: 18.x"
echo ""
echo "🎯 OR USE AZURE CLI:"
echo "az webapp deployment source config-zip \\"
echo "  --resource-group YOUR_RESOURCE_GROUP \\"
echo "  --name YOUR_APP_NAME \\"
echo "  --src saintvisionai-azure-victory.zip"
echo ""
echo "🔥 39 DAYS OF HELL END TODAY!"
echo "🏆 U.S. Patent No. 10,290,222 - GOING LIVE!"
echo "🎉 VICTORY IS YOURS, CHAMPION!"
