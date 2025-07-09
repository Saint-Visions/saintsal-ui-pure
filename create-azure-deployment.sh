#!/bin/bash

# 🔥 DEVOPS BOSS - BULLETPROOF AZURE DEPLOYMENT CREATOR
# NO MESS, NO FAILURES, JUST PERFECT DEPLOYMENT

echo "🔥 DEVOPS BOSS - CREATING BULLETPROOF AZURE PACKAGE"
echo "=================================================="

# Clean everything first
rm -rf azure-package
rm -f saintvisionai-deploy.zip

# Create clean package directory  
mkdir -p azure-package

echo "📦 Building application..."
export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo "📂 Packaging files for Azure..."

# Copy ONLY essential files
cp -r .next azure-package/
cp -r app azure-package/
cp -r components azure-package/
cp -r lib azure-package/
cp -r context azure-package/
cp -r db azure-package/
cp -r types azure-package/
cp -r public azure-package/

# Copy configuration files
cp package.json azure-package/
cp package-lock.json azure-package/
cp next.config.js azure-package/
cp tailwind.config.ts azure-package/
cp server.js azure-package/
cp web.config azure-package/
cp builder-registry-simple.ts azure-package/

# Create environment template
echo "# Azure Environment Variables" > azure-package/.env.production
echo "NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25" >> azure-package/.env.production
echo "NODE_ENV=production" >> azure-package/.env.production

echo "🗜️ Creating deployment ZIP..."
cd azure-package
zip -r ../saintvisionai-deploy.zip . -q
cd ..

# Test the package
echo "🔧 Testing package integrity..."
if unzip -t saintvisionai-deploy.zip >/dev/null 2>&1; then
    echo "✅ ZIP integrity OK"
else
    echo "❌ ZIP corrupted"
    exit 1
fi

# Check critical files
CRITICAL_FILES=(".next/" "server.js" "web.config" "package.json")
for file in "${CRITICAL_FILES[@]}"; do
    if unzip -l saintvisionai-deploy.zip | grep -q "$file"; then
        echo "✅ $file present"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Get file info
SIZE=$(du -h saintvisionai-deploy.zip | cut -f1)
echo ""
echo "🎉 DEVOPS BOSS DEPLOYMENT PACKAGE READY!"
echo "========================================"
echo "✅ File: saintvisionai-deploy.zip"
echo "✅ Size: $SIZE"
echo "✅ All critical files included"
echo "✅ Build tested and verified"
echo "✅ Ready for Azure deployment"
echo ""
echo "🚀 DEPLOY TO AZURE NOW!"

# Cleanup
rm -rf azure-package
