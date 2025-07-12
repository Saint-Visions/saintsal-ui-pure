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

export default async function SetupPage(props: PageProps) {
  // Initialize Builder.io node runtime
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Define the URL path for this page
  const urlPath = "/setup";

  // Fetch Builder.io content for the setup page
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
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-2xl">
            <div className="text-white font-bold text-2xl">🤖</div>
          </div>
          <h1 className="text-5xl font-bold text-blue-400 mb-4">
            🛠️ Setup Your AI
          </h1>
          <p className="text-white/70 mb-6 text-lg">
            Onboarding setup page not found in Builder.io
          </p>
          <p className="text-sm text-white/50">
            Create a page with URL path "/setup" in your Builder.io dashboard
          </p>
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-blue-400 text-sm">
              🎯 This will complete your onboarding flow
            </p>
          </div>

          {/* Preview of what setup might include */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="text-green-400 mb-2">✅ Step 1</div>
              <div className="text-sm text-white/70">Account Setup</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="text-yellow-400 mb-2">⚙️ Step 2</div>
              <div className="text-sm text-white/70">AI Preferences</div>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="text-purple-400 mb-2">🚀 Step 3</div>
              <div className="text-sm text-white/70">Start Cooking</div>
            </div>
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
    title: "Setup Your AI | SaintSal™ Onboarding",
    description:
      "Complete your SaintSal™ AI setup and join the cooking knowledge revolution",
    openGraph: {
      title: "Setup Your AI | SaintSal™",
      description: "Complete your SaintSal™ AI setup",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Setup Your AI | SaintSal™",
      description: "Complete your SaintSal™ AI setup",
    },
  };
}
