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
];
