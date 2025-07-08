"use client";
import React, { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/use-auth";

// Initialize Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

// Register custom components with Builder
builder.registerComponent(() => <div>Loading...</div>, {
  name: "ProOnlyBlock",
  inputs: [
    { name: "content", type: "blocks", defaultValue: [] },
    {
      name: "upgradeMessage",
      type: "text",
      defaultValue: "Upgrade to Pro to access this feature",
    },
  ],
});

interface BuilderWrapperProps {
  model: string;
  content: any;
  url?: string;
}

export function BuilderWrapper({ model, content, url }: BuilderWrapperProps) {
  const { user, isProUser, isAdmin, loading } = useAuth();
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  const [builderContent, setBuilderContent] = useState(content);

  // Register user context with Builder
  useEffect(() => {
    if (user) {
      builder.setUserAttributes({
        id: user.id,
        email: user.email,
        plan: user.plan,
        role: user.role,
        isProUser,
        isAdmin,
      });
    }
  }, [user, isProUser, isAdmin]);

  // Handle dynamic routing for Builder content
  const handleBuilderRoute = (path: string) => {
    const validRoutes = [
      "/console",
      "/partnertech",
      "/dashboard",
      "/login",
      "/signup",
    ];
    if (validRoutes.includes(path)) {
      router.push(path);
    }
  };

  // Custom component visibility based on user plan
  const ProOnlyBlock = ({ content, upgradeMessage }: any) => {
    if (loading) return <div className="animate-pulse">Loading...</div>;

    if (!user) {
      return (
        <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 text-center">
          <h3 className="text-yellow-400 font-bold mb-2">Sign In Required</h3>
          <p className="text-white/70 mb-4">
            Please sign in to access this feature
          </p>
          <button
            onClick={() => router.push("/login")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg"
          >
            Sign In
          </button>
        </div>
      );
    }

    if (!isProUser && !isPreviewing) {
      return (
        <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6 text-center">
          <h3 className="text-yellow-400 font-bold mb-2">Pro Feature</h3>
          <p className="text-white/70 mb-4">{upgradeMessage}</p>
          <button
            onClick={() => router.push("/upgrade")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg"
          >
            Upgrade to Pro
          </button>
        </div>
      );
    }

    return <BuilderComponent model="page" content={content} />;
  };

  // Register the component
  useEffect(() => {
    builder.registerComponent(ProOnlyBlock, {
      name: "ProOnlyBlock",
      inputs: [
        { name: "content", type: "blocks", defaultValue: [] },
        {
          name: "upgradeMessage",
          type: "text",
          defaultValue: "Upgrade to Pro to access this feature",
        },
      ],
    });
  }, []);

  if (!builderContent && !isPreviewing) {
    return null;
  }

  return (
    <div className="builder-wrapper">
      <BuilderComponent
        model={model}
        content={builderContent}
        options={{
          includeRefs: true,
          noTrack: false,
        }}
        context={{
          user,
          isProUser,
          isAdmin,
          onRoute: handleBuilderRoute,
        }}
      />
    </div>
  );
}
