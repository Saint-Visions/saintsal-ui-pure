import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from "next/dynamic";

// Dynamic imports using the exact pattern from the integration guide
const HeroSection = dynamic(() =>
  import("./components/builder/HeroSection").then((mod) => ({
    default: mod.default,
  })),
);

const FeatureGrid = dynamic(() =>
  import("./components/builder/FeatureGrid").then((mod) => ({
    default: mod.default,
  })),
);

const SEOSection = dynamic(() =>
  import("./components/builder/SEOSection").then((mod) => ({
    default: mod.default,
  })),
);

const ChatInterface = dynamic(() =>
  import("./components/builder/ChatInterface").then((mod) => ({
    default: mod.default,
  })),
);

export const customComponents: RegisteredComponent[] = [
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SaintVisionAI™",
        required: false,
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Cooking Knowledge",
        required: false,
      },
      {
        name: "description",
        type: "string",
        defaultValue:
          "The patent-protected AI movement for elite cooking knowledge",
        required: false,
      },
      {
        name: "primaryButtonText",
        type: "string",
        defaultValue: "🔥 Start Cooking",
        required: false,
      },
      {
        name: "secondaryButtonText",
        type: "string",
        defaultValue: "💬 AI Chat",
        required: false,
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
        required: false,
      },
      {
        name: "showVideo",
        type: "boolean",
        defaultValue: false,
        required: false,
      },
      {
        name: "showRating",
        type: "boolean",
        defaultValue: true,
        required: false,
      },
      {
        name: "testimonial",
        type: "string",
        defaultValue:
          '"SaintSal AI doesn\'t just answer. It adapts. It empowers. It becomes your GOTTA GUY™!"',
        required: false,
      },
      {
        name: "testimonialAuthor",
        type: "string",
        defaultValue: "Elite Saint Community",
        required: false,
      },
    ],
    canHaveChildren: true,
  },
  {
    component: FeatureGrid,
    name: "FeatureGrid",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "🔧 What's Inside These Walls",
        required: false,
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Elite AI Sanctuary • Ready for Saints",
        required: false,
      },
      {
        name: "columns",
        type: "number",
        defaultValue: 4,
        required: false,
      },
    ],
  },
  {
    component: SEOSection,
    name: "SEOSection",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Trusted by Elite Cooking Professionals",
        required: false,
      },
      {
        name: "description",
        type: "string",
        defaultValue:
          "Join thousands of culinary experts who rely on SaintVisionAI™ for their cooking knowledge needs",
        required: false,
      },
      {
        name: "rating",
        type: "number",
        defaultValue: 4.9,
        required: false,
      },
      {
        name: "userCount",
        type: "string",
        defaultValue: "10,000+",
        required: false,
      },
      {
        name: "showPatent",
        type: "boolean",
        defaultValue: true,
        required: false,
      },
      {
        name: "backgroundColor",
        type: "string",
        defaultValue: "bg-gray-900",
        required: false,
      },
    ],
  },
  {
    component: ChatInterface,
    name: "ChatInterface",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SaintSal™ AI Assistant",
        required: false,
      },
      {
        name: "placeholder",
        type: "string",
        defaultValue: "Ask me anything about cooking...",
        required: false,
      },
      {
        name: "welcomeMessage",
        type: "string",
        defaultValue:
          "Welcome to SaintVisionAI™! I'm here to help you with all your cooking knowledge needs.",
        required: false,
      },
      {
        name: "showVoiceInput",
        type: "boolean",
        defaultValue: true,
        required: false,
      },
      {
        name: "maxMessages",
        type: "number",
        defaultValue: 10,
        required: false,
      },
    ],
    canHaveChildren: true,
  },
];

console.log("✅ Builder.io components registered:", customComponents.length);

// Default export for compatibility
export default customComponents;
