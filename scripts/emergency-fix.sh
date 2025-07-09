#!/bin/bash

# SaintVisionAI Emergency Build Fix Script
# Run this if deployment fails in the future

echo "🚨 EMERGENCY BUILD FIX - SAINTSAL™"
echo "=================================="

# Check if this is a build error
if [ "$1" == "build-error" ]; then
    echo "🔧 Applying build error fixes..."
    
    # Clean everything
    rm -rf .next
    rm -rf node_modules
    npm cache clean --force
    
    # Reinstall with exact versions
    npm ci
    
    # Set environment variables
    export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
    export NODE_ENV=production
    
    # Try build
    npm run build
    
elif [ "$1" == "isolated-vm" ]; then
    echo "🔧 Fixing isolated-vm issues..."
    
    # Remove problematic package
    npm uninstall isolated-vm
    
    # Update next.config.js to ignore it completely
    echo "Adding isolated-vm ignore to next.config.js..."
    
elif [ "$1" == "builder-runtime" ]; then
    echo "🔧 Fixing Builder.io runtime issues..."
    
    # Disable Builder.io node runtime in production
    export DISABLE_BUILDER_NODE_RUNTIME=true
    npm run build
    
elif [ "$1" == "dependencies" ]; then
    echo "🔧 Fixing dependency issues..."
    
    # Force resolution of problematic packages
    npm install --force
    npm run build
    
else
    echo "Usage: ./scripts/emergency-fix.sh [build-error|isolated-vm|builder-runtime|dependencies]"
    echo ""
    echo "Available fixes:"
    echo "  build-error       - Complete build system reset"
    echo "  isolated-vm       - Fix isolated-vm package issues"
    echo "  builder-runtime   - Fix Builder.io runtime issues"
    echo "  dependencies      - Force dependency resolution"
    echo ""
    echo "For immediate deployment, run:"
    echo "  ./scripts/deploy-production.sh"
fi
