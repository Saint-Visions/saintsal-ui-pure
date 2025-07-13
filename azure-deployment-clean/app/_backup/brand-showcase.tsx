import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";
import { customComponents } from "../../builder-registry";

interface PageProps {
  searchParams: Record<string, string>;
}

// Builder.io API key
const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function BrandShowcasePage(props: PageProps) {
  // Initialize Builder.io node runtime
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Define the URL path for this page
  const urlPath = "/brand-showcase";

  // Fetch Builder.io content for the brand showcase page
  const content = await fetchOneEntry({
    options: props.searchParams,
    apiKey: BUILDER_PUBLIC_API_KEY,
    model: "page",
    userAttributes: { urlPath },
  });

  const canShowContent =
    content ||
    isPreviewing(props.searchParams) ||
    isEditing(props.searchParams);

  if (!canShowContent) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            🎨 Brand Showcase
          </h1>
          <p className="text-white/70 mb-6">Page not found in Builder.io</p>
          <p className="text-sm text-white/50">
            Create a page with URL path "/brand-showcase" in your Builder.io
            dashboard
          </p>
        </div>
      </div>
    );
  }

  return (
    <Content
      content={content}
      apiKey={BUILDER_PUBLIC_API_KEY}
      model="page"
      customComponents={customComponents}
    />
  );
}

// SEO and metadata
export async function generateMetadata() {
  return {
    title: "Brand Showcase | SaintSal™ Movement",
    description:
      "Complete brand asset library and showcase for SaintSal™ AI movement",
    openGraph: {
      title: "Brand Showcase | SaintSal™",
      description: "Complete brand asset library and showcase",
    },
  };
}
