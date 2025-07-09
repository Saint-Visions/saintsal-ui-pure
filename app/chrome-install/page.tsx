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

export default async function ChromeInstallPage(props: PageProps) {
  // Initialize Builder.io node runtime
  const { initializeNodeRuntime } = await import(
    "@builder.io/sdk-react/node/init"
  );
  initializeNodeRuntime();

  // Define the URL path for this page
  const urlPath = "/chrome-install";

  // Fetch Builder.io content for the chrome install page
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
        <div className="text-center max-w-4xl px-4">
          {/* Chrome Extension Icon */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl">
            <div className="text-6xl">🧩</div>
          </div>

          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-4">
            Chrome Companion
          </h1>
          <p className="text-white/70 mb-8 text-xl">
            SaintSal™ Chrome extension installation page not found in
            Builder.io
          </p>

          {/* Preview Installation Steps */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-blue-500/30 mb-8">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              🚀 Installation Preview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📥</span>
                </div>
                <h4 className="text-white font-bold mb-2">Step 1</h4>
                <p className="text-gray-400 text-sm">
                  Download from Chrome Web Store
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h4 className="text-white font-bold mb-2">Step 2</h4>
                <p className="text-gray-400 text-sm">
                  Configure your preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔥</span>
                </div>
                <h4 className="text-white font-bold mb-2">Step 3</h4>
                <p className="text-gray-400 text-sm">Start cooking with AI</p>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-yellow-400 font-bold mb-3">
                🤖 AI Companion
              </h4>
              <p className="text-gray-300 text-sm">
                Get instant cooking help on any webpage
              </p>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-green-400 font-bold mb-3">📋 Recipe Saver</h4>
              <p className="text-gray-300 text-sm">
                Save recipes from any website instantly
              </p>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-blue-400 font-bold mb-3">🔍 Smart Search</h4>
              <p className="text-gray-300 text-sm">
                Enhanced search for cooking content
              </p>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
              <h4 className="text-purple-400 font-bold mb-3">
                ⚡ Quick Actions
              </h4>
              <p className="text-gray-300 text-sm">
                One-click cooking tools everywhere
              </p>
            </div>
          </div>

          <p className="text-sm text-white/50">
            Create a page with URL path "/chrome-install" in your Builder.io
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
    title: "Install Chrome Companion | SaintSal™",
    description:
      "Get the SaintSal™ Chrome extension for instant cooking AI assistance on any webpage",
    openGraph: {
      title: "SaintSal™ Chrome Companion",
      description: "Install the Chrome extension for cooking AI everywhere",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "SaintSal™ Chrome Companion",
      description: "Install the Chrome extension for cooking AI everywhere",
    },
  };
}
