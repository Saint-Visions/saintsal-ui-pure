# 🚀 SaintVisionAI Builder.io Integration Guide

Welcome to your complete Builder.io integration! This guide will help you understand and use your new visual page builder setup.

## 🎯 What's Been Set Up

Your SaintVisionAI project now has a full Builder.io integration with:

- ✅ **Server-side rendering** for optimal performance
- ✅ **Component registration system** for visual editing
- ✅ **Automatic git sync** via post-commit hooks
- ✅ **Multiple content zones** for flexible layouts
- ✅ **Professional component library** ready for Builder.io

## 🔧 Files Created/Modified

### Core Integration Files

- `builder-registry.ts` - TypeScript component registry
- `builder-registry.mjs` - Runtime sync script
- `app/page.tsx` - Updated with server-side Builder.io
- `app/client-page.tsx` - Client-side interactive components

### Setup & Automation

- `scripts/setup-builder.sh` - Complete setup automation
- `scripts/post-commit-builder-sync.sh` - Auto-sync on git commits
- `.git/hooks/post-commit` - Git hook (auto-created)

### Components Ready for Builder.io

- `components/builder/HeroSection.tsx` - Hero/landing sections
- `components/builder/FeatureGrid.tsx` - Feature showcase grids
- `components/builder/SEOSection.tsx` - SEO-optimized content sections
- `components/builder/ChatInterface.tsx` - Interactive chat components
- `components/chat/ChatSidebar.tsx` - Sidebar components

## 🚀 Quick Start

### 1. Run the Setup Script

```bash
bash scripts/setup-builder.sh
```

This will:

- Check all prerequisites
- Install missing dependencies
- Set up git hooks
- Test component registration
- Guide you through API key setup

### 2. Add Your Builder.io API Key

Get your API key from [Builder.io Account Settings](https://builder.io/account/space) and add it to `.env.local`:

```bash
NEXT_PUBLIC_BUILDER_API_KEY=your-api-key-here
```

### 3. Start Development

```bash
npm run dev:builder
```

This syncs components and starts your dev server.

### 4. Create Content in Builder.io

1. Go to [Builder.io Content](https://builder.io/content)
2. Click "New" → "Page"
3. Use model name: `page`
4. Set URL path: `/` (for homepage)
5. Start building with your registered components!

## 🎨 Available Components

### HeroSection

Perfect for landing pages and top sections.

**Props:**

- `title` - Main heading
- `subtitle` - Secondary text
- `description` - Detailed description
- `primaryButtonText` - Main CTA button
- `secondaryButtonText` - Secondary action
- `backgroundImage` - Hero background
- `showVideo` - Toggle video demo button
- `showRating` - Show rating stars
- `testimonial` - Customer quote
- `testimonialAuthor` - Quote attribution

### FeatureGrid

Showcase features in a responsive grid.

**Props:**

- `title` - Grid section title
- `subtitle` - Section subtitle
- `columns` - Number of columns (2-6)
- `features` - Array of feature objects with:
  - `icon` - Icon name (search, users, chart, mobile, etc.)
  - `title` - Feature title
  - `description` - Feature description
  - `color` - Background color class

### SEOSection

SEO-optimized section with structured data.

**Props:**

- `title` - SEO title
- `description` - Meta description
- `rating` - Star rating (0-5)
- `userCount` - Active users display
- `showPatent` - Show patent info
- `backgroundColor` - Section background

### ChatInterface

Interactive chat component.

**Props:**

- `title` - Chat widget title
- `placeholder` - Input placeholder
- `welcomeMessage` - Initial AI message
- `showVoiceInput` - Voice input toggle
- `maxMessages` - Message history limit

### ChatSidebar

Collapsible sidebar component.

**Props:**

- `workspaceid` - Workspace identifier
- `isOpen` - Sidebar state

## 🔄 Content Zones

Your page has multiple Builder.io content zones:

1. **Header Zone** - Top of page
2. **Before Features** - After hero, before feature grid
3. **After Features** - After main content
4. **Footer Zone** - Bottom of page

Each zone can contain any combination of your registered components.

## 🛠 Development Workflow

### Manual Component Sync

```bash
npm run sync:builder
```

### Development with Auto-Sync

```bash
npm run dev:builder
```

### Production Build with Sync

```bash
npm run build:builder
```

### Manual Git Hook Trigger

```bash
npm run post-commit:builder
```

## 🔧 Customization

### Adding New Components

1. Create your component in `components/builder/YourComponent.tsx`
2. Add it to `builder-registry.ts`:

```typescript
const YourComponent = dynamic(
  () => import("./components/builder/YourComponent"),
);

export const customComponents: RegisteredComponent[] = [
  // ... existing components
  {
    component: YourComponent,
    name: "YourComponent",
    inputs: [
      {
        name: "propName",
        type: "string",
        defaultValue: "Default value",
      },
    ],
    canHaveChildren: true, // if it accepts children
  },
];
```

3. Run `npm run sync:builder` to register

### Supported Input Types

- `string` - Text input
- `number` - Numeric input
- `boolean` - Toggle switch
- `color` - Color picker
- `file` - File/image upload
- `list` - Array of objects with subFields

### Component Requirements

- Must have `"use client"` directive
- Must export as default export
- Must have TypeScript interface for props
- Should have sensible default values

## 🚨 Troubleshooting

### Component Not Showing in Builder.io

1. Check if component is properly exported
2. Verify registration in `builder-registry.ts`
3. Run `npm run sync:builder`
4. Check browser console for errors

### Builder.io Content Not Loading

1. Verify API key in `.env.local`
2. Check if content exists in Builder.io
3. Ensure model name is `page`
4. Check URL path matches Builder.io entry

### Git Hook Not Working

1. Run `npm run setup:git-hooks`
2. Check if `.git/hooks/post-commit` exists and is executable
3. Manually test with `npm run post-commit:builder`

### Build Errors

1. Check all components have proper TypeScript types
2. Verify all imports are correct
3. Run `npm run type-check`

## 📚 Advanced Usage

### Custom Styling

Components use Tailwind classes. Modify component files directly for custom styling.

### API Integration

Use the `data` prop in Content components to pass dynamic data:

```tsx
<Content
  apiKey={BUILDER_PUBLIC_API_KEY}
  model="page"
  content={builderContent}
  customComponents={customComponents}
  data={{
    section: "header",
    user: userData,
    products: productList,
  }}
/>
```

### Preview Mode

Builder.io automatically handles preview mode when editing. Your components will show live changes.

## 🔗 Useful Links

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Builder.io Content Editor](https://builder.io/content)
- [Builder.io Account Settings](https://builder.io/account/space)
- [Next.js + Builder.io Guide](https://www.builder.io/c/docs/developers/frameworks/nextjs)

## 🎉 You're All Set!

Your SaintVisionAI project now has a professional Builder.io integration. You can:

1. ✅ Create pages visually in Builder.io
2. ✅ Use your custom components
3. ✅ Auto-sync changes via git
4. ✅ Maintain full control over your codebase

Happy building! 🚀

---

**Need help?** Check the troubleshooting section above or refer to [Builder.io's official documentation](https://www.builder.io/c/docs).
