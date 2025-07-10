// 🚀 SAINTSAL™ MOVEMENT - PRODUCTION READY - DIRECT DEPLOYMENT
import React from "react";
import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";

// Force dynamic rendering for Azure deployment
export const dynamic = "force-dynamic";
import { customComponents } from "../builder-registry";
import { BuilderDebug } from "../components/builder/BuilderDebug";
import { ClientHomePage } from "./client-page";

interface PageProps {
  searchParams: Record<string, string>;
}

// Builder.io API key - hardcoded for Azure deployment stability
const BUILDER_PUBLIC_API_KEY = "d83998c6a81f466db4fb83ab90c7ba25";

export default async function Page(props: PageProps) {
  // Initialize Node runtime for Builder.io - EXACT pattern from integration guide
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Fetch Builder.io content server-side - EXACT pattern from integration guide
  const builderContent = await fetchOneEntry({
    options: props.searchParams,
    apiKey: BUILDER_PUBLIC_API_KEY,
    model: "page",
    userAttributes: { urlPath: "/" },
  });

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
      {/* Builder.io Dynamic Content - Following Pattern C (Homepage Integration) */}
      {canShowBuilderContent && (
        <Content
          apiKey={BUILDER_PUBLIC_API_KEY}
          model="page"
          content={builderContent}
        />
      )}

      {/* Your existing homepage content stays here */}
      <ClientHomePage
        initialBuilderContent={builderContent}
        showBrandShowcase={false}
        searchParams={props.searchParams}
      />

      {/* Builder.io Debug Component */}
      <BuilderDebug />
    </>
  );
}
