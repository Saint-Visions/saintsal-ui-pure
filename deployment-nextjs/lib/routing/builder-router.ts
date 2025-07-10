"use client";
import { builder, Builder } from "@builder.io/react";

// Route configuration for SaintVisionAI
export const ROUTE_CONFIG = {
  PUBLIC: ["/", "/login", "/signup", "/pricing"],
  AUTH_REQUIRED: ["/dashboard", "/console", "/chat", "/settings"],
  PRO_REQUIRED: ["/partnertech", "/crm", "/chrome-install", "/referral"],
  ADMIN_REQUIRED: ["/admin"],
};

export interface RouteContext {
  user: any;
  isProUser: boolean;
  isAdmin: boolean;
  loading: boolean;
}

export class BuilderRouter {
  static validateRoute(path: string, context: RouteContext): boolean {
    const { user, isProUser, isAdmin, loading } = context;

    if (loading) return false;

    if (ROUTE_CONFIG.PUBLIC.includes(path)) return true;
    if (ROUTE_CONFIG.AUTH_REQUIRED.includes(path)) return !!user;
    if (ROUTE_CONFIG.PRO_REQUIRED.includes(path)) return !!user && isProUser;
    if (ROUTE_CONFIG.ADMIN_REQUIRED.includes(path)) return !!user && isAdmin;

    return true;
  }

  static getRedirectPath(path: string, context: RouteContext): string | null {
    const { user, isProUser, isAdmin } = context;

    if (!user && !ROUTE_CONFIG.PUBLIC.includes(path)) {
      return "/login";
    }

    if (user && !isProUser && ROUTE_CONFIG.PRO_REQUIRED.includes(path)) {
      return "/upgrade";
    }

    if (user && !isAdmin && ROUTE_CONFIG.ADMIN_REQUIRED.includes(path)) {
      return "/dashboard";
    }

    return null;
  }

  static registerBuilderActions() {
    // TODO: Fix Builder.registerAction API calls - currently incompatible with Builder.io v8
    // Register custom actions with Builder.io
    // Builder.registerAction("navigateTo", {
    //   name: "Navigate To",
    //   kind: "function",
    //   inputs: [
    //     { name: "path", type: "string", required: true },
    //     { name: "external", type: "boolean", defaultValue: false },
    //   ],
    //   action: (context: any, inputs: any) => {
    //     if (inputs.external) {
    //       window.open(inputs.path, "_blank");
    //     } else {
    //       window.location.href = inputs.path;
    //     }
    //   },
    // });

    // Builder.registerAction("requireAuth", {
    //   name: "Require Authentication",
    //   kind: "function",
    //   inputs: [{ name: "redirectPath", type: "string", defaultValue: "/login" }],
    //   action: (context: any, inputs: any) => {
    //     // Check if user is authenticated (implement your auth logic)
    //     const isAuthenticated = false; // Replace with actual auth check
    //     if (!isAuthenticated) {
    //       window.location.href = inputs.redirectPath;
    //     }
    //   },
    // });

    // Builder.registerAction("requirePro", {
    //   name: "Require Pro Subscription",
    //   kind: "function",
    //   inputs: [
    //     { name: "redirectPath", type: "string", defaultValue: "/upgrade" },
    //   ],
    //   action: (context: any, inputs: any) => {
    //     // Check if user has pro subscription (implement your logic)
    //     const hasProSubscription = false; // Replace with actual check
    //     if (!hasProSubscription) {
    //       window.location.href = inputs.redirectPath;
    //     }
    //   },
    // });

    console.log(
      "Builder actions registration temporarily disabled - needs API fix",
    );
  }
}

// Initialize Builder actions
BuilderRouter.registerBuilderActions();
