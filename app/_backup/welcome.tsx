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

export default async function WelcomeGatewayPage(props: PageProps) {
  // Initialize Builder.io node runtime
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Define the URL path for this page
  const urlPath = "/welcome";

  // Fetch Builder.io content for the welcome gateway page
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
        <div className="text-center max-w-2xl px-4">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
            <div className="text-black font-bold text-2xl">SV</div>
          </div>
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            🔥 Welcome Gateway
          </h1>
          <p className="text-white/70 mb-6 text-lg">
            Hero Splash page not found in Builder.io
          </p>
          <p className="text-sm text-white/50">
            Create a page with URL path "/welcome" in your Builder.io dashboard
          </p>
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-400 text-sm">
              🎯 This will be your stunning Hero Splash / Welcome Gateway
            </p>
          </div>
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
    title: "Welcome to SaintSal™ | Hero Gateway",
    description:
      "Experience the SaintSal™ AI movement - Your gateway to elite cooking knowledge and AI-powered insights",
    openGraph: {
      title: "Welcome to SaintSal™ | Hero Gateway",
      description: "Experience the SaintSal™ AI movement",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Welcome to SaintSal™",
      description: "Experience the SaintSal™ AI movement",
    },
  };
}
