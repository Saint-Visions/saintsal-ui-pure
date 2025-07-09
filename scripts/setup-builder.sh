#!/bin/bash

# 🚀 SaintVisionAI Builder.io Setup Script
# This script sets up your complete Builder.io integration

echo "🎯 SaintVisionAI Builder.io Setup Starting..."
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️ $1${NC}"
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Are you in the project root?"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node >/dev/null 2>&1; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if git is installed
if ! command -v git >/dev/null 2>&1; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_status "Prerequisites check passed"

# Check for Builder.io API key
echo ""
echo "🔑 Checking Builder.io API key..."

if [ -f ".env.local" ] && grep -q "NEXT_PUBLIC_BUILDER_API_KEY" ".env.local"; then
    API_KEY=$(grep "NEXT_PUBLIC_BUILDER_API_KEY" .env.local | cut -d '=' -f2 | tr -d '"' | tr -d "'")
    if [ -n "$API_KEY" ] && [ "$API_KEY" != "your-api-key-here" ]; then
        print_status "Builder.io API key found: ${API_KEY:0:8}..."
    else
        print_warning "Builder.io API key found but appears to be placeholder"
        API_KEY=""
    fi
else
    print_warning "Builder.io API key not found in .env.local"
    API_KEY=""
fi

if [ -z "$API_KEY" ]; then
    echo ""
    print_info "To get your Builder.io API key:"
    print_info "1. Go to https://builder.io/account/space"
    print_info "2. Copy your Space ID (this is your API key)"
    print_info "3. Add it to .env.local as NEXT_PUBLIC_BUILDER_API_KEY=your-key-here"
    echo ""
    read -p "Enter your Builder.io API key (or press Enter to skip): " USER_API_KEY
    
    if [ -n "$USER_API_KEY" ]; then
        echo "NEXT_PUBLIC_BUILDER_API_KEY=$USER_API_KEY" >> .env.local
        print_status "API key added to .env.local"
        API_KEY="$USER_API_KEY"
    else
        print_warning "Continuing without API key. Some features will be limited."
    fi
fi

# Install dependencies if needed
echo ""
echo "📦 Checking dependencies..."

MISSING_DEPS=""

# Check for required Builder.io packages
if ! npm list @builder.io/sdk-react >/dev/null 2>&1; then
    MISSING_DEPS="$MISSING_DEPS @builder.io/sdk-react"
fi

if [ -n "$MISSING_DEPS" ]; then
    print_warning "Missing dependencies detected:$MISSING_DEPS"
    echo "Installing missing dependencies..."
    npm install $MISSING_DEPS
    
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
else
    print_status "All required dependencies are installed"
fi

# Set up git hooks
echo ""
echo "🔗 Setting up git hooks..."

if [ -d ".git" ]; then
    # Create post-commit hook
    cat > .git/hooks/post-commit << 'EOF'
#!/bin/bash
# Auto-generated Builder.io sync hook
npm run post-commit:builder
EOF
    
    chmod +x .git/hooks/post-commit
    print_status "Git post-commit hook installed"
else
    print_warning "Not a git repository. Git hooks skipped."
fi

# Test Builder.io component registration
echo ""
echo "🧪 Testing Builder.io component registration..."

if [ -f "builder-registry.mjs" ]; then
    # Run the registration script
    node builder-registry.mjs
    
    if [ $? -eq 0 ]; then
        print_status "Component registration test passed"
    else
        print_error "Component registration test failed"
    fi
else
    print_error "builder-registry.mjs not found"
fi

# Create .env.local template if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📝 Creating .env.local template..."
    
    cat > .env.local << 'EOF'
# Builder.io Configuration
NEXT_PUBLIC_BUILDER_API_KEY=your-api-key-here

# Add your other environment variables below
# NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
EOF
    
    print_status ".env.local template created"
fi

# Show next steps
echo ""
echo "🎉 Builder.io Setup Complete!"
echo "================================================"
echo ""
print_info "Next steps:"
echo "1. 🔑 Set your Builder.io API key in .env.local if you haven't already"
echo "2. 🚀 Run 'npm run dev' to start development server"
echo "3. 🌐 Visit https://builder.io/content to create your first page"
echo "4. 📝 Use model name 'page' when creating content in Builder.io"
echo "5. 🔧 Your components are auto-registered and ready to use!"
echo ""
print_info "Useful commands:"
echo "• npm run sync:builder       - Manually sync components"
echo "• npm run dev:builder        - Sync and start dev server"
echo "• npm run post-commit:builder - Run post-commit sync"
echo ""

if [ -n "$API_KEY" ]; then
    print_status "Builder.io is configured and ready to use!"
    echo "Visit your Builder.io space: https://builder.io/content"
else
    print_warning "Remember to add your Builder.io API key to .env.local"
fi

echo ""
echo "🎯 SaintVisionAI Builder.io Setup Complete!"
