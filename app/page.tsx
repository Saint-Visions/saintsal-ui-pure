// 🚀 SAINTSAL™ MOVEMENT - PRODUCTION READY - AZURE DEPLOYMENT
import React from "react";
import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";

// Force dynamic rendering for Azure deployment
export const dynamic = "force-dynamic";
import { BuilderDebug } from "../components/builder/BuilderDebug";
import { ClientHomePage } from "./client-page";
import { LandingLayout } from "../components/PageLayout";

interface PageProps {
  searchParams: Record<string, string>;
}

// Builder.io API key - hardcoded for Azure deployment stability
const BUILDER_PUBLIC_API_KEY = "d83998c6a81f466db4fb83ab90c7ba25";

export default async function Page(props: PageProps) {
  // Skip Node runtime initialization for Azure compatibility

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
      <LandingLayout>
        <ClientHomePage
          initialBuilderContent={builderContent}
          showBrandShowcase={true}
          searchParams={props.searchParams}
        />
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      {/* Builder.io Dynamic Content - Pattern C (Homepage Integration) */}
      {canShowBuilderContent && (
        <div className="w-full">
          <Content
            apiKey={BUILDER_PUBLIC_API_KEY}
            model="page"
            content={builderContent}
          />
        </div>
      )}

      {/* SaintSal™ Homepage Content */}
      <ClientHomePage
        initialBuilderContent={builderContent}
        showBrandShowcase={false}
        searchParams={props.searchParams}
      />

      {/* Builder.io Debug Component */}
      <BuilderDebug />
    </LandingLayout>
  );
}
