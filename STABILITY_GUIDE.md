# 🛡️ SAINTSAL™ Platform Stability Guide

## 🔑 CRITICAL: Never Touch These Files

These files are ESSENTIAL for Builder.io integration - if they get corrupted, your app will break:

### ✅ Core Configuration Files

- `next.config.js` - **Contains Builder.io image domains**
- `package.json` - Contains Builder.io dependencies
- `app/layout.tsx` - Contains Builder.io API key setup

### ✅ Builder.io Components (DO NOT DELETE)

- `components/builder/` folder - All Builder.io integration components
- `app/client-page.tsx` - Main homepage with Builder.io content

## 🚨 Key Environment Variables

**NEVER lose these - they're required for Builder.io:**

```bash
# Builder.io (CRITICAL)
VITE_BUILDER_API_KEY=d83998c6a81f466db4fb83ab90c7ba25
BUILDER_PRIVATE_KEY=bpk-3f250d9d6d8748539cce5b7397cc4369

# Next.js domains for images (CRITICAL)
# Already configured in next.config.js
```

## 🔧 If App Breaks When You Return:

### 1. Check Builder.io Image Loading

If you see "Invalid src prop" errors:

```bash
# This should be in next.config.js:
domains: ['cdn.builder.io']
```

### 2. Restart Dev Server

```bash
npm run dev
```

### 3. Clear Cache if Needed

```bash
rm -rf .next
npm install
npm run dev
```

## ✅ Verification Checklist Before Leaving:

1. **Homepage loads**: https://saintvisionai.com ✅
2. **Images display**: Premium backgrounds visible ✅
3. **No console errors**: Check browser DevTools ✅
4. **Builder.io connected**: API key working ✅

## 🚀 Current Status (Verified Working):

- ✅ Homepage with premium rotating backgrounds
- ✅ SAINTSAL™ branding fully integrated
- ✅ Sidebar with pixel-perfect Figma design
- ✅ Builder.io image domains configured
- ✅ Next.js 14 running smoothly
- ✅ All assets loading from cdn.builder.io

## 🆘 Emergency Recovery:

If everything breaks, use this checkpoint ID to restore:
`cgen-4da60be8034e40e3a632ca425d280cc1`

## 🎯 Safe Development Rules:

1. **NEVER** delete `next.config.js`
2. **NEVER** remove Builder.io API keys
3. **ALWAYS** test homepage before leaving
4. **ALWAYS** commit changes with git
5. **NEVER** edit Builder.io components without backup

---

**Last Verified**: All systems operational
**Status**: 🚀 PRODUCTION READY
