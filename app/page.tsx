// 🚀 SAINTSAL™ MOVEMENT - PRODUCTION READY - DIRECT DEPLOYMENT
import React from "react";
import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";
import { customComponents } from "../builder-registry-simple";
import { BuilderDebug } from "../components/builder/BuilderDebug";
import { ClientHomePage } from "./client-page";

interface PageProps {
  searchParams: Record<string, string>;
}

// Builder.io API key - use environment variable
const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function Page(props: PageProps) {
  // Initialize Node runtime for Builder.io
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Fetch Builder.io content server-side
  let builderContent = null;
  try {
    builderContent = await fetchOneEntry({
      options: props.searchParams,
      apiKey: BUILDER_PUBLIC_API_KEY,
      model: "page",
      userAttributes: { urlPath: "/" },
    });
  } catch (error) {
    console.log("Builder.io content loading failed:", error);
  }

  const canShowBuilderContent =
    builderContent ||
    isPreviewing(props.searchParams) ||
    isEditing(props.searchParams);

  // Check for showcase mode
  const showBrandShowcase = props.searchParams.showcase === "true";

  if (showBrandShowcase) {
    return (
      <ClientHomePage
        initialBuilderContent={builderContent}
        showBrandShowcase={true}
        searchParams={props.searchParams}
      />
    );
  }

  return (
    <>
      {/* Builder.io Dynamic Content Zone - Header */}
      {canShowBuilderContent && (
        <div className="relative z-20">
          <Content
            apiKey={BUILDER_PUBLIC_API_KEY}
            model="page"
            content={builderContent}
            customComponents={customComponents}
            data={{ section: "header" }}
          />
        </div>
      )}

      <ClientHomePage
        initialBuilderContent={builderContent}
        showBrandShowcase={false}
        searchParams={props.searchParams}
      />

      {/* Builder.io Dynamic Content Zone - After Features */}
      {canShowBuilderContent && (
        <div className="relative z-10 bg-black">
          <Content
            apiKey={BUILDER_PUBLIC_API_KEY}
            model="page"
            content={builderContent}
            customComponents={customComponents}
            data={{ section: "after-features" }}
          />
        </div>
      )}

      {/* Builder.io Dynamic Content Zone - Footer */}
      {canShowBuilderContent && (
        <div className="relative z-10 bg-black">
          <Content
            apiKey={BUILDER_PUBLIC_API_KEY}
            model="page"
            content={builderContent}
            customComponents={customComponents}
            data={{ section: "footer" }}
          />
        </div>
      )}

      {/* Builder.io Debug Component */}
      <BuilderDebug />
    </>
  );
}
