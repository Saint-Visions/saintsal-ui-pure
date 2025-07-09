#!/bin/bash

echo "▶️ Installing dependencies..."
npm install

echo "🛠 Building Next.js app..."
npm run build

echo "🚀 Starting app..."
npm start

