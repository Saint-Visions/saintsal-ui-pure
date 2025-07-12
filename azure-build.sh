#!/bin/bash
# 🔥 AZURE BUILD SCRIPT - DEPENDENCY CONFLICT RESOLVER

echo "🔥 Starting Azure-optimized build process..."

# Clean install with conflict resolution
echo "📦 Installing dependencies with conflict resolution..."
npm ci --omit=optional --legacy-peer-deps --no-audit --no-fund

# Build the application
echo "🏗️ Building Next.js application..."
npm run build

echo "✅ Azure build completed successfully!"
