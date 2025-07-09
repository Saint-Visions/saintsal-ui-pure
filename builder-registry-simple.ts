import { type RegisteredComponent } from "@builder.io/sdk-react";

// Simple component registration without dynamic imports for better compatibility
export const customComponents: RegisteredComponent[] = [
  {
    component: () =>
      import("./components/chat/chat-sidebar").then((mod) => mod.ChatSidebar),
    name: "ChatSidebar",
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
    component: () => import("./components/builder/HeroSection"),
    name: "HeroSection",
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
    component: () => import("./components/builder/FeatureGrid"),
    name: "FeatureGrid",
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
    ],
  },
  {
    component: () => import("./components/builder/SEOSection"),
    name: "SEOSection",
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
    component: () => import("./components/builder/ChatInterface"),
    name: "ChatInterface",
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

export default customComponents;
