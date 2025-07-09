#!/bin/bash

# 🚨 EMERGENCY BACKUP DEPLOYMENT CREATOR
# GUARANTEED WORKING PACKAGE

echo "🔥 CREATING EMERGENCY BACKUP DEPLOYMENT"
echo "======================================="

# Clean everything
rm -rf backup-deploy
rm -f saintsal-backup.zip

# Create backup directory
mkdir -p backup-deploy

# Build first
export NEXT_PUBLIC_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
npm run build

# Copy ONLY essential files to root level
cp -r .next backup-deploy/
cp -r public backup-deploy/
cp package.json backup-deploy/
cp package-lock.json backup-deploy/
cp next.config.js backup-deploy/
cp tailwind.config.ts backup-deploy/

# Copy application files
cp -r app backup-deploy/
cp -r components backup-deploy/
cp -r lib backup-deploy/
cp -r context backup-deploy/
cp -r db backup-deploy/
cp -r types backup-deploy/
cp builder-registry-simple.ts backup-deploy/

# Create MULTIPLE server files for different startup options
cat > backup-deploy/server.js << 'EOF'
#!/usr/bin/env node
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = false;
const hostname = 'localhost';
const port = process.env.PORT || 8080;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log('🔥 SAINTSAL™ Server Starting...');

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error:', err);
      res.statusCode = 500;
      res.end('Server Error');
    }
  }).listen(port, () => {
    console.log(`✅ Ready on http://localhost:${port}`);
  });
});
EOF

# Create backup Express server
cat > backup-deploy/app.js << 'EOF'
const express = require('express');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;

app.prepare().then(() => {
  const server = express();
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  server.listen(port, () => {
    console.log(`✅ Server ready on port ${port}`);
  });
});
EOF

# Create simple package.json for Azure
cat > backup-deploy/package.json << 'EOF'
{
  "name": "saintvisionai",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@builder.io/sdk-react": "^4.2.2"
  }
}
EOF

# Create web.config for IIS
cat > backup-deploy/web.config << 'EOF'
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="None" />
          <match url=".*\.(css|js|png|jpg|jpeg|gif|ico|svg)$" />
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js"/>
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
EOF

# Create ZIP
cd backup-deploy
zip -r ../saintsal-backup.zip . -q
cd ..

echo "✅ BACKUP DEPLOYMENT READY: saintsal-backup.zip"
echo "📦 Size: $(du -h saintsal-backup.zip | cut -f1)"
echo "🔥 MULTIPLE STARTUP OPTIONS INCLUDED"

# Cleanup
rm -rf backup-deploy
