import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from "next/dynamic";

// Dynamic imports for all Builder.io components
const ChatSidebar = dynamic(() =>
  import("./components/chat/chat-sidebar").then((mod) => ({
    default: mod.ChatSidebar,
  })),
);

const HeroSection = dynamic(() => import("./components/builder/HeroSection"));

const FeatureGrid = dynamic(() => import("./components/builder/FeatureGrid"));

const SEOSection = dynamic(() => import("./components/builder/SEOSection"));

const ChatInterface = dynamic(
  () => import("./components/builder/ChatInterface"),
);

export const customComponents: RegisteredComponent[] = [
  {
    component: ChatSidebar,
    name: "ChatSidebar",
    inputs: [
      {
        name: "isOpen",
        type: "boolean",
        defaultValue: false,
      },
    ],
  },
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Welcome to SaintVisionAI",
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Your AI-powered assistant",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
    ],
    canHaveChildren: true,
  },
  {
    component: FeatureGrid,
    name: "FeatureGrid",
    inputs: [
      {
        name: "features",
        type: "list",
        subFields: [
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
            name: "icon",
            type: "string",
            defaultValue: "🚀",
          },
          {
            name: "color",
            type: "color",
            defaultValue: "#3B82F6",
          },
        ],
        defaultValue: [
          {
            title: "AI Chat",
            description: "Intelligent conversations",
            icon: "💬",
            color: "#3B82F6",
          },
          {
            title: "Smart Analysis",
            description: "Data-driven insights",
            icon: "📊",
            color: "#10B981",
          },
        ],
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
        defaultValue: "SaintVisionAI - AI Assistant",
      },
      {
        name: "description",
        type: "string",
        defaultValue: "Advanced AI assistant for modern needs",
      },
      {
        name: "keywords",
        type: "string",
        defaultValue: "AI, assistant, chat, technology",
      },
    ],
  },
  {
    component: ChatInterface,
    name: "ChatInterface",
    inputs: [
      {
        name: "placeholder",
        type: "string",
        defaultValue: "Ask me anything...",
      },
      {
        name: "theme",
        type: "string",
        enum: ["light", "dark"],
        defaultValue: "dark",
      },
    ],
    canHaveChildren: true,
  },
];

console.log("✅ Builder.io components registered:", customComponents.length);

// Default export for compatibility
export default customComponents;
