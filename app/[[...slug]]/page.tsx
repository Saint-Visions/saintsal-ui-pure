import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
} from "@builder.io/sdk-react";
import { customComponents } from "../../builder-registry";

interface PageProps {
  params: {
    slug: string[];
  };
  searchParams: Record<string, string>;
}

// Builder.io API key - use environment variable
const BUILDER_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export default async function Page(props: PageProps) {
  // Initialize Node runtime for SSR
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  const urlPath = "/" + (props.params?.slug?.join("/") || "");

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
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg">
            Make sure you have your content published at builder.io.
          </p>
          <p className="text-sm text-yellow-400 mt-4">
            SaintVisionAI - Builder.io Integration
          </p>
        </div>
      </div>
    );
  }

  return (
    <Content
      content={content}
      apiKey={BUILDER_PUBLIC_API_KEY}
      model={"page"}
      customComponents={customComponents}
    />
  );
}
