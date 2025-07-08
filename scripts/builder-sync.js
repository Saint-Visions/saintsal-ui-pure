#!/usr/bin/env node

/**
 * Builder.io GitHub Sync Helper
 * Helps debug and fix Builder.io <-> GitHub sync issues
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔧 SaintVisionAI Builder.io Sync Helper\n");

// Check environment variables
const requiredEnvVars = ["NEXT_PUBLIC_BUILDER_API_KEY", "BUILDER_PRIVATE_KEY"];

console.log("📋 Checking environment variables...");
const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0) {
  console.log("❌ Missing environment variables:");
  missingVars.forEach((varName) => console.log(`   - ${varName}`));
  console.log("\n💡 Add these to your .env.local file");
} else {
  console.log("✅ All required environment variables are set");
}

// Check Builder.io integration files
console.log("\n📁 Checking Builder.io integration files...");
const builderFiles = [
  "integration/builder/fetchContent.ts",
  "integration/builder/builder-wrapper.tsx",
  "lib/routing/builder-router.ts",
];

builderFiles.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${filePath}`);
  } else {
    console.log(`❌ ${filePath} - Missing`);
  }
});

// Check package.json for Builder dependencies
console.log("\n📦 Checking Builder.io dependencies...");
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const builderDeps = [
  "@builder.io/react",
  "@builder.io/sdk",
  "@builder.io/sdk-react",
];

builderDeps.forEach((dep) => {
  if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
    const version =
      packageJson.dependencies[dep] || packageJson.devDependencies[dep];
    console.log(`✅ ${dep}@${version}`);
  } else {
    console.log(`❌ ${dep} - Not installed`);
  }
});

// Git status check
console.log("\n📝 Checking Git status...");
try {
  const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });
  if (gitStatus.trim()) {
    console.log("⚠️  Uncommitted changes detected:");
    console.log(gitStatus);
    console.log("💡 Commit changes to ensure sync with Builder.io");
  } else {
    console.log("✅ Working directory clean");
  }
} catch (error) {
  console.log("❌ Git status check failed:", error.message);
}

// Builder.io webhook verification
console.log("\n🔗 Builder.io Integration Checklist:");
console.log("□ 1. GitHub repository connected in Builder.io dashboard");
console.log("□ 2. Webhook URL configured for auto-sync");
console.log("□ 3. API keys properly set in environment");
console.log(
  "□ 4. Builder content models created (page, console-page, partnertech-page)",
);
console.log("□ 5. Custom components registered (ProOnlyBlock)");

console.log("\n🚀 Next Steps:");
console.log("1. Visit https://builder.io/content");
console.log("2. Check GitHub integration under Settings → Integrations");
console.log("3. Verify webhook is pointing to your Vercel deployment");
console.log("4. Test content changes sync to GitHub/Vercel");

console.log("\n🔥 SaintVisionAI Builder.io Sync Complete!");
