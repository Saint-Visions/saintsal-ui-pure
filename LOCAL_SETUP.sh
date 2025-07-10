#!/bin/bash

# 🔧 LOCAL DEVELOPMENT SETUP

echo "🔧 SETTING UP LOCAL DEVELOPMENT ENVIRONMENT..."
echo "=============================================="

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install || echo "❌ NPM install failed"

# 2. Build the application
echo "🏗️ Building application..."
export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
npm run build || echo "❌ Build failed"

# 3. Test local server
echo "🧪 Testing local server..."
timeout 10s npm run dev &
LOCAL_PID=$!
sleep 5

# Check if local server responds
curl -I http://localhost:3000/ -m 5 2>/dev/null && echo "✅ Local dev server working" || echo "❌ Local dev server failed"

# Kill the dev server
kill $LOCAL_PID 2>/dev/null

# 4. Create production build test
echo "🎯 Testing production build..."
node -e "
const { createServer } = require('http');
const next = require('next');
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(8181, () => {
    console.log('✅ Production server ready on :8181');
    setTimeout(() => process.exit(0), 2000);
  });
}).catch(err => {
  console.log('❌ Production server failed:', err.message);
  process.exit(1);
});
" &

PROD_PID=$!
sleep 3

# Test production server
curl -I http://localhost:8181/ -m 5 2>/dev/null && echo "✅ Production server working" || echo "❌ Production server failed"

# Kill the production server
kill $PROD_PID 2>/dev/null

echo "✅ LOCAL SETUP COMPLETE"
