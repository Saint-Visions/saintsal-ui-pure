#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 SAINTSAL™ DEPLOYMENT VERIFICATION\n");

const checks = [
  {
    name: "Environment Configuration",
    check: () => fs.existsSync(".env.local"),
    fix: "Create .env.local with NEXT_PUBLIC_BUILDER_API_KEY",
  },
  {
    name: "Package.json Azure Scripts",
    check: () => {
      const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
      return pkg.scripts["azure:start"] && pkg.scripts["azure:build"];
    },
    fix: "Add azure:start and azure:build scripts",
  },
  {
    name: "Web.config for Azure",
    check: () => fs.existsSync("web.config"),
    fix: "Create web.config for IIS configuration",
  },
  {
    name: "Server.js exists",
    check: () => fs.existsSync("server.js"),
    fix: "Ensure server.js exists for Azure hosting",
  },
  {
    name: "Startup.js exists",
    check: () => fs.existsSync("startup.js"),
    fix: "Create startup.js for Azure production",
  },
  {
    name: "Builder Components",
    check: () => {
      return (
        fs.existsSync("components/builder/BuilderInit.tsx") &&
        fs.existsSync("components/builder/HeroSection.tsx") &&
        fs.existsSync("builder-registry.ts")
      );
    },
    fix: "Ensure all Builder.io components are present",
  },
  {
    name: "Layout Components",
    check: () => {
      return (
        fs.existsSync("components/PageLayout.tsx") &&
        fs.existsSync("components/Sidebar.tsx")
      );
    },
    fix: "Create PageLayout.tsx and Sidebar.tsx",
  },
  {
    name: "Route Pages",
    check: () => {
      return (
        fs.existsSync("app/page.tsx") &&
        fs.existsSync("app/layout.tsx") &&
        fs.existsSync("app/dashboard/page.tsx")
      );
    },
    fix: "Ensure all route pages exist",
  },
  {
    name: "Dependencies",
    check: () => {
      const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
      return (
        pkg.dependencies["@builder.io/react"] &&
        pkg.dependencies["@builder.io/sdk-react"] &&
        pkg.dependencies["framer-motion"]
      );
    },
    fix: "Install required dependencies",
  },
  {
    name: "CSS Styling",
    check: () => {
      const css = fs.readFileSync("app/globals.css", "utf8");
      return (
        css.includes("saintsal-landing-bg") &&
        css.includes("--saintsal-black") &&
        css.includes("--saintsal-gold")
      );
    },
    fix: "Add SaintSal™ theme styles to globals.css",
  },
];

let allPassed = true;

checks.forEach((check, index) => {
  const passed = check.check();
  const icon = passed ? "✅" : "❌";
  console.log(`${icon} ${check.name}`);

  if (!passed) {
    console.log(`   🔧 Fix: ${check.fix}`);
    allPassed = false;
  }
});

console.log("\n" + "=".repeat(50));

if (allPassed) {
  console.log(
    "🎉 ALL CHECKS PASSED! SaintSal™ is ready for Azure deployment!",
  );
  console.log("\n📋 Deployment Commands:");
  console.log("   npm run azure:build");
  console.log("   npm run azure:start");
  console.log("\n🚀 Your divine sanctuary awaits at Azure!");
} else {
  console.log(
    "⚠️  Some checks failed. Please fix the issues above before deploying.",
  );
}

console.log("\n🏛️ SaintSal™ - Divine execution ready!");
