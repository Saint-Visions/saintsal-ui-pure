#!/usr/bin/env node

// 🚀 Builder.io Component Registry Sync Script
// This script validates and logs your Next.js component registry for Builder.io

// Note: This script validates the registry without requiring runtime imports
// The actual registration happens in builder-registry.ts during app runtime

// Component definitions for Builder.io registration
const componentRegistry = [
  {
    name: "ChatSidebar",
    component: () =>
      import("./components/chat/chat-sidebar.tsx").then((m) => m.ChatSidebar),
    inputs: [
      {
        name: "workspaceid",
        type: "string",
        defaultValue: "default-workspace",
        required: true,
      },
      {
        name: "isOpen",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },
  {
    name: "HeroSection",
    component: () =>
      import("./components/builder/HeroSection.tsx").then((m) => m.default),
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SaintVisionAI™",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Cooking Knowledge",
      },
      {
        name: "description",
        type: "string",
        defaultValue:
          "The patent-protected AI movement for elite cooking knowledge",
      },
      {
        name: "primaryButtonText",
        type: "string",
        defaultValue: "🔥 Start Cooking",
      },
      {
        name: "secondaryButtonText",
        type: "string",
        defaultValue: "💬 AI Chat",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
      {
        name: "showVideo",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "showRating",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "testimonial",
        type: "string",
        defaultValue:
          '"SaintSal AI doesn\'t just answer. It adapts. It empowers. It becomes your GOTTA GUY™!"',
      },
      {
        name: "testimonialAuthor",
        type: "string",
        defaultValue: "Elite Saint Community",
      },
    ],
    canHaveChildren: true,
  },
  {
    name: "FeatureGrid",
    component: () =>
      import("./components/builder/FeatureGrid.tsx").then((m) => m.default),
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "🔧 What's Inside These Walls",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Elite AI Sanctuary • Ready for Saints",
      },
      {
        name: "columns",
        type: "number",
        defaultValue: 4,
      },
      {
        name: "features",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "string",
            defaultValue: "search",
          },
          {
            name: "title",
            type: "string",
            defaultValue: "Feature Title",
          },
          {
            name: "description",
            type: "string",
            defaultValue: "Feature description",
          },
          {
            name: "color",
            type: "string",
            defaultValue: "bg-blue-600",
          },
        ],
        defaultValue: [
          {
            icon: "search",
            title: "Lead Discovery",
            description: "AI-powered lookup",
            color: "bg-blue-600",
          },
          {
            icon: "users",
            title: "Referral Network",
            description: "Partner tracking",
            color: "bg-green-600",
          },
          {
            icon: "chart",
            title: "AI Deal Analysis",
            description: "GPT-4 insights",
            color: "bg-purple-600",
          },
          {
            icon: "mobile",
            title: "Mobile Export",
            description: "iOS/Android apps",
            color: "bg-red-600",
          },
        ],
      },
    ],
  },
  {
    name: "SEOSection",
    component: () =>
      import("./components/builder/SEOSection.tsx").then((m) => m.default),
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Trusted by Elite Cooking Professionals",
      },
      {
        name: "description",
        type: "string",
        defaultValue:
          "Join thousands of culinary experts who rely on SaintVisionAI™ for their cooking knowledge needs",
      },
      {
        name: "rating",
        type: "number",
        defaultValue: 4.9,
      },
      {
        name: "userCount",
        type: "string",
        defaultValue: "10,000+",
      },
      {
        name: "showPatent",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "backgroundColor",
        type: "string",
        defaultValue: "bg-gray-900",
      },
    ],
  },
  {
    name: "ChatInterface",
    component: () =>
      import("./components/builder/ChatInterface.tsx").then((m) => m.default),
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SaintSal™ AI Assistant",
      },
      {
        name: "placeholder",
        type: "string",
        defaultValue: "Ask me anything about cooking...",
      },
      {
        name: "welcomeMessage",
        type: "string",
        defaultValue:
          "Welcome to SaintVisionAI™! I'm here to help you with all your cooking knowledge needs.",
      },
      {
        name: "showVoiceInput",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "maxMessages",
        type: "number",
        defaultValue: 10,
      },
    ],
    canHaveChildren: true,
  },
];

// Validate component registry
async function validateComponents() {
  console.log("🔄 Validating Builder.io component registry...");

  let valid = 0;
  let invalid = 0;

  for (const config of componentRegistry) {
    try {
      // Validate configuration structure
      if (!config.name || typeof config.name !== "string") {
        throw new Error("Missing or invalid component name");
      }

      if (!config.component || typeof config.component !== "function") {
        throw new Error("Missing or invalid component function");
      }

      if (!Array.isArray(config.inputs)) {
        throw new Error("Inputs must be an array");
      }

      // Validate each input
      for (const input of config.inputs) {
        if (!input.name || !input.type) {
          throw new Error(`Invalid input configuration in ${config.name}`);
        }
      }

      console.log(`✅ Valid: ${config.name} (${config.inputs.length} inputs)`);
      valid++;
    } catch (error) {
      console.error(`❌ Invalid: ${config.name} - ${error.message}`);
      invalid++;
    }
  }

  console.log(`\n📊 Validation Summary:`);
  console.log(`   ✅ Valid components: ${valid}`);
  console.log(`   ❌ Invalid components: ${invalid}`);
  console.log(`   📦 Total components: ${componentRegistry.length}`);

  if (invalid === 0) {
    console.log(`\n🎉 All components are valid and ready for Builder.io!`);
    console.log(
      `💡 Components will be registered when your Next.js app starts.`,
    );
    return true;
  } else {
    console.log(`\n⚠️ Fix the invalid components before proceeding.`);
    return false;
  }
}

// Execute validation
if (import.meta.url === `file://${process.argv[1]}`) {
  validateComponents()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      console.error("❌ Validation failed:", error);
      process.exit(1);
    });
}

export { componentRegistry, validateComponents };
