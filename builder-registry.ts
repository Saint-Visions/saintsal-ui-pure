import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from "next/dynamic";

// Dynamically import components for proper live editing
const Button = dynamic(() =>
  import("./components/ui/button").then((mod) => ({ default: mod.Button })),
);

const SaintSalLogo = dynamic(() =>
  import("./src/components/shared/saintsal-logo").then((mod) => ({
    default: mod.SaintSalLogo,
  })),
);

const ButtonGold = dynamic(() => import("./src/components/shared/button-gold"));

const BrandShowcase = dynamic(() =>
  import("./components/brand-showcase").then((mod) => ({
    default: mod.default,
  })),
);

const UpgradeModal = dynamic(() =>
  import("./components/stripe/upgrade-modal").then((mod) => ({
    default: mod.default,
  })),
);

const UpgradeCTA = dynamic(() =>
  import("./components/stripe/upgrade-cta").then((mod) => ({
    default: mod.default,
  })),
);

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

const ChatInterface = dynamic(() =>
  import("./components/builder/ChatInterface").then((mod) => ({
    default: mod.default,
  })),
);

const SEOSection = dynamic(() =>
  import("./components/builder/SEOSection").then((mod) => ({
    default: mod.default,
  })),
);

export const customComponents: RegisteredComponent[] = [
  {
    component: Button,
    name: "Button",
    inputs: [
      {
        name: "children",
        type: "string",
        defaultValue: "Click me",
        required: true,
      },
      {
        name: "variant",
        type: "string",
        defaultValue: "default",
        enum: [
          "default",
          "destructive",
          "outline",
          "secondary",
          "ghost",
          "link",
        ],
      },
      {
        name: "size",
        type: "string",
        defaultValue: "default",
        enum: ["default", "sm", "lg", "icon"],
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
      },
    ],
    canHaveChildren: true,
  },
  {
    component: SaintSalLogo,
    name: "SaintSalLogo",
    inputs: [
      {
        name: "size",
        type: "number",
        defaultValue: 64,
      },
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
    ],
  },
  {
    component: ButtonGold,
    name: "ButtonGold",
    inputs: [
      {
        name: "children",
        type: "string",
        defaultValue: "🔥 Start Cooking",
        required: true,
      },
      {
        name: "onClick",
        type: "string",
        defaultValue: "",
      },
      {
        name: "className",
        type: "string",
        defaultValue: "",
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
      },
    ],
    canHaveChildren: true,
  },
  {
    component: BrandShowcase,
    name: "BrandShowcase",
    inputs: [],
    canHaveChildren: false,
  },
  {
    component: UpgradeCTA,
    name: "UpgradeCTA",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Upgrade to Pro Saint",
        required: true,
      },
      {
        name: "description",
        type: "string",
        defaultValue: "Unlock unlimited AI cooking knowledge",
      },
      {
        name: "buttonText",
        type: "string",
        defaultValue: "🔥 Upgrade Now",
      },
      {
        name: "plan",
        type: "string",
        defaultValue: "pro",
        enum: ["starter", "pro", "elite", "legendary", "custom"],
      },
      {
        name: "variant",
        type: "string",
        defaultValue: "default",
        enum: ["default", "premium", "compact"],
      },
    ],
    canHaveChildren: false,
  },
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "SaintVisionAI™",
        required: true,
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
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800",
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
    canHaveChildren: false,
  },
  {
    component: FeatureGrid,
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
        enum: ["2", "3", "4", "5", "6"],
      },
    ],
    canHaveChildren: false,
  },
  {
    component: ChatInterface,
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
    canHaveChildren: false,
  },
  {
    component: SEOSection,
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
        enum: ["bg-gray-900", "bg-black", "bg-gray-800"],
      },
    ],
    canHaveChildren: false,
  },
];
