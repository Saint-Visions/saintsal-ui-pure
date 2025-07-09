#!/bin/bash

# SaintVisionAI Production Deployment Script
# Ensures build integrity and successful deployment

set -e  # Exit on any error

echo "🚀 SAINTSAL™ Production Deployment Starting..."
echo "================================================"

# Load environment variables
if [ -f .env.local ]; then
    export $(grep -v '^#' .env.local | xargs)
    echo "✅ Environment variables loaded"
else
    echo "❌ .env.local not found"
    exit 1
fi

# Validate Node.js version
NODE_VERSION=$(node -v)
echo "✅ Node.js version: $NODE_VERSION"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf dist

# Validate build environment
echo "🔍 Validating build environment..."
node scripts/validate-build.js || exit 1

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Run build
echo "🏗️ Building application..."
npm run build || exit 1

# Verify build output
if [ -d ".next" ]; then
    echo "✅ Build successful - .next directory created"
else
    echo "❌ Build failed - .next directory not found"
    exit 1
fi

# Check for critical build artifacts
CRITICAL_FILES=(
    ".next/static"
    ".next/server"
    ".next/BUILD_ID"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ -e "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ Missing critical build artifact: $file"
        exit 1
    fi
done

# Get build size
BUILD_SIZE=$(du -sh .next | cut -f1)
echo "📊 Build size: $BUILD_SIZE"

echo ""
echo "🎉 DEPLOYMENT READY!"
echo "================================================"
echo "✅ Build completed successfully"
echo "✅ All critical files present"
echo "✅ No build errors detected"
echo "✅ Build size: $BUILD_SIZE"
echo ""
echo "🚀 Ready for production deployment to:"
echo "   - Azure App Service"
echo "   - Vercel"
echo "   - Docker"
echo "   - Static hosting"
echo ""
echo "Next steps:"
echo "1. npm run start (to test locally)"
echo "2. Deploy .next directory to your platform"
echo "3. Set environment variables on deployment platform"
echo ""
echo "SAINTSAL™ Movement - Production Ready! 🔥"
