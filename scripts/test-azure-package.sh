#!/bin/bash

# 🔥 BULLETPROOF AZURE PACKAGE TESTER
# Tests the deployment package before Azure upload

echo "🔧 Testing Azure deployment package..."
echo "======================================"

# Test 1: Check ZIP file exists and is valid
if [ -f "saintvisionai-azure-deploy.zip" ]; then
    echo "✅ ZIP file exists"
    
    # Test ZIP integrity
    if unzip -t saintvisionai-azure-deploy.zip >/dev/null 2>&1; then
        echo "✅ ZIP file integrity OK"
    else
        echo "❌ ZIP file corrupted"
        exit 1
    fi
else
    echo "❌ ZIP file missing"
    exit 1
fi

# Test 2: Check critical files in package
echo ""
echo "🔍 Checking critical files in package..."

CRITICAL_FILES=(
    "server.js"
    "web.config"
    "package.json"
    ".next/"
    "next.config.js"
)

for file in "${CRITICAL_FILES[@]}"; do
    if unzip -l saintvisionai-azure-deploy.zip | grep -q "$file"; then
        echo "✅ $file present"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Test 3: Extract and test server.js syntax
echo ""
echo "🔍 Testing server.js syntax..."

# Create temp directory
mkdir -p temp-test
cd temp-test

# Extract server.js
unzip -j ../saintvisionai-azure-deploy.zip server.js >/dev/null 2>&1

# Check if it's ES modules compatible
if grep -q "import.*from" server.js; then
    echo "✅ server.js uses ES modules (compatible with package.json type: module)"
else
    echo "❌ server.js using CommonJS - will break with ES modules"
    cd ..
    rm -rf temp-test
    exit 1
fi

# Test Node.js syntax
if node --check server.js >/dev/null 2>&1; then
    echo "✅ server.js syntax valid"
else
    echo "❌ server.js has syntax errors"
    cd ..
    rm -rf temp-test
    exit 1
fi

# Cleanup
cd ..
rm -rf temp-test

echo ""
echo "🎉 AZURE PACKAGE TESTS PASSED!"
echo "=============================="
echo "✅ ZIP file valid and intact"
echo "✅ All critical files present"
echo "✅ server.js ES modules compatible"
echo "✅ server.js syntax validated"
echo "✅ Package ready for Azure deployment"
echo ""
echo "🚀 DEPLOY WITH CONFIDENCE!"
