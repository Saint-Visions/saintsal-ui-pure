#!/bin/bash

# 🚀 Post-Commit Builder.io Sync Script
# Automatically syncs your Next.js components with Builder.io after each commit

echo "🔄 Starting post-commit Builder.io sync..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Skipping Builder.io sync."
    exit 0
fi

# Check if Builder.io API key exists
if [ -z "$NEXT_PUBLIC_BUILDER_API_KEY" ]; then
    echo "⚠️ NEXT_PUBLIC_BUILDER_API_KEY not found. Skipping Builder.io sync."
    echo "   Set your API key in .env.local to enable automatic sync."
    exit 0
fi

# Check if any component files were modified in the last commit
MODIFIED_COMPONENTS=$(git diff-tree --no-commit-id --name-only -r HEAD | grep -E "(components/|builder-registry)")

if [ -z "$MODIFIED_COMPONENTS" ]; then
    echo "ℹ️ No component files modified. Skipping Builder.io sync."
    exit 0
fi

echo "📁 Component files modified:"
echo "$MODIFIED_COMPONENTS"

# Run the Builder.io sync script
echo "🔧 Running Builder.io component registration..."

# Check if we should use node or npm
if command -v node >/dev/null 2>&1; then
    if [ -f "builder-registry.mjs" ]; then
        echo "📦 Running node builder-registry.mjs..."
        node builder-registry.mjs
    else
        echo "❌ builder-registry.mjs not found!"
        exit 1
    fi
else
    echo "❌ Node.js not found. Please install Node.js to enable Builder.io sync."
    exit 1
fi

# Check if the sync was successful
if [ $? -eq 0 ]; then
    echo "✅ Builder.io sync completed successfully!"
    
    # Optional: Create a summary of what was synced
    echo "📊 Sync Summary:"
    echo "   - API Key: ${NEXT_PUBLIC_BUILDER_API_KEY:0:8}..."
    echo "   - Components: Synced from builder-registry.ts"
    echo "   - Status: Ready for Builder.io editor"
    
else
    echo "❌ Builder.io sync failed. Check the logs above for details."
    exit 1
fi

echo "🎉 Post-commit Builder.io sync complete!"
