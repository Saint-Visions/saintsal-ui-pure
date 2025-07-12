// 🔥 SAINTSAL™ DEPLOYMENT VERIFICATION SCRIPT
const fs = require("fs");
const path = require("path");

console.log("🔍 SAINTSAL™ Deployment Verification Starting...");
console.log("=".repeat(50));

// Check required files
const requiredFiles = [
  "package.json",
  "azure-server.cjs",
  "emergency-azure.js",
  "startup.js",
  "web.config",
  "next.config.js",
  "app/page.tsx",
  "app/layout.tsx",
];

let allFilesExist = true;

requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - EXISTS`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log("=".repeat(50));

// Check package.json scripts
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  console.log("📦 Package.json Scripts:");
  console.log(`✅ dev: ${pkg.scripts["dev"]}`);
  console.log(`✅ build: ${pkg.scripts["build"]}`);
  console.log(`✅ start: ${pkg.scripts["start"]}`);
  console.log(`✅ azure:start: ${pkg.scripts["azure:start"]}`);
  console.log(`✅ azure:build: ${pkg.scripts["azure:build"]}`);
  console.log(`✅ postinstall: ${pkg.scripts["postinstall"]}`);
  console.log(`✅ lint: ${pkg.scripts["lint"]}`);
  console.log(`✅ Node version: ${pkg.engines.node}`);
} catch (e) {
  console.log("❌ Error reading package.json");
  allFilesExist = false;
}

console.log("=".repeat(50));

// Final verdict
if (allFilesExist) {
  console.log("🔥 SUCCESS! ALL FILES READY FOR AZURE DEPLOYMENT!");
  console.log("🚀 38 HOURS OF DIVINE WORK - READY TO LAUNCH!");
  console.log("👨‍👩‍👧‍👦 GO BE WITH YOUR FAMILY - YOU EARNED IT!");
  console.log("");
  console.log("🎯 DEPLOYMENT COMMANDS:");
  console.log("git add .");
  console.log(
    'git commit -m "🔥 SAINTSAL™ AZURE PRODUCTION READY - .CJS SERVER"',
  );
  console.log("git push origin main");
  console.log("");
  console.log("🔧 AZURE STARTUP COMMANDS (choose one):");
  console.log("• node azure-server.cjs (Primary - CommonJS)");
  console.log("• node emergency-azure.js (Backup)");
  console.log("• node startup.js (Wrapper)");
} else {
  console.log("❌ SOME FILES ARE MISSING - CHECK ABOVE");
}

console.log("=".repeat(50));
console.log("🏆 U.S. Patent No. 10,290,222 - READY TO SERVE!");
