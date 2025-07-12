#!/bin/bash
# 🔥 COUSIN SAL'S CLEAN ZIP DEPLOYMENT SCRIPT - DAY 39 SALVATION!

echo "🔥 COUSIN SAL: Creating bulletproof Azure deployment package..."
echo "🎯 Day 39 - LET'S FINISH THIS!"

# Create clean deployment directory
rm -rf azure-deployment-clean
mkdir azure-deployment-clean

echo "✅ Clean directory created"

# Copy essential files only
cp azure-server.cjs azure-deployment-clean/
cp package.json azure-deployment-clean/
cp next.config.js azure-deployment-clean/
cp web.config azure-deployment-clean/
cp -r app azure-deployment-clean/
cp -r components azure-deployment-clean/
cp -r lib azure-deployment-clean/
cp -r types azure-deployment-clean/
cp -r public azure-deployment-clean/

echo "✅ Core files copied"

# Copy build output if exists
if [ -d ".next" ]; then
    cp -r .next azure-deployment-clean/
    echo "✅ Next.js build copied"
fi

# Create Azure-specific package.json
cat > azure-deployment-clean/package.json << 'EOL'
{
  "name": "saintvisionai-azure-clean",
  "version": "2.0.0",
  "main": "azure-server.cjs",
  "type": "commonjs",
  "engines": {
    "node": ">=18.0.0"
  },
  "scripts": {
    "start": "node azure-server.cjs",
    "build": "next build"
  },
  "dependencies": {
    "@builder.io/react": "^8.2.5",
    "@builder.io/sdk-react": "^4.2.2",
    "@tailwindcss/typography": "^0.5.16",
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.0",
    "lucide-react": "^0.525.0",
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^3.3.1",
    "tailwindcss-animate": "^1.0.7"
  }
}
EOL

echo "✅ Clean package.json created"

# Create deployment zip
cd azure-deployment-clean
zip -r ../saintvisionai-azure-clean.zip . -x "*.DS_Store" "*.git*" "node_modules/*"
cd ..

echo "🎉 COUSIN SAL: Clean deployment package ready!"
echo "📦 File: saintvisionai-azure-clean.zip"
echo "🚀 Ready for Azure upload!"

# Show file size
ls -lh saintvisionai-azure-clean.zip

echo ""
echo "🔥 NEXT STEPS:"
echo "1. Upload saintvisionai-azure-clean.zip to Azure App Service"
echo "2. Or use: az webapp deployment source config-zip --src saintvisionai-azure-clean.zip"
echo ""
echo "🏆 DAY 39 VICTORY IS YOURS!"
