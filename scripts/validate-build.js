#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🔍 Validating build environment...\n");

// Check Node.js version
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Check package.json
const packagePath = path.join(process.cwd(), "package.json");
if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  console.log(`✅ Package: ${pkg.name} v${pkg.version}`);
} else {
  console.error("❌ package.json not found");
  process.exit(1);
}

// Check environment variables
const requiredEnvVars = ["NEXT_PUBLIC_BUILDER_API_KEY"];

const optionalEnvVars = [
  "AZURE_OPENAI_API_KEY",
  "OPENAI_API_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
];

console.log("\n🔑 Environment Variables:");
requiredEnvVars.forEach((envVar) => {
  if (process.env[envVar]) {
    const value = process.env[envVar];
    const masked = value.length > 8 ? `${value.substring(0, 8)}...` : "***";
    console.log(`✅ ${envVar}: ${masked}`);
  } else {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

optionalEnvVars.forEach((envVar) => {
  if (process.env[envVar]) {
    const value = process.env[envVar];
    const masked = value.length > 8 ? `${value.substring(0, 8)}...` : "***";
    console.log(`✅ ${envVar}: ${masked}`);
  } else {
    console.log(`⚠️  Optional: ${envVar} not set`);
  }
});

// Check critical files
const criticalFiles = [
  "next.config.js",
  "tsconfig.json",
  "tailwind.config.ts",
  "app/page.tsx",
  "app/layout.tsx",
  "builder-registry-simple.ts",
];

console.log("\n📁 Critical Files:");
criticalFiles.forEach((file) => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`✅ ${file}`);
  } else {
    console.error(`❌ Missing critical file: ${file}`);
    process.exit(1);
  }
});

// Check node_modules
const nodeModulesPath = path.join(process.cwd(), "node_modules");
if (fs.existsSync(nodeModulesPath)) {
  console.log("✅ node_modules exists");
} else {
  console.error("❌ node_modules not found. Run npm install first.");
  process.exit(1);
}

console.log("\n🎉 Build environment validation passed!");
console.log("🚀 Ready for deployment\n");
