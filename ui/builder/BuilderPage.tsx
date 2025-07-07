// ui/builder/BuilderPage.tsx
import { BuilderComponent } from "@builder.io/react";

export function BuilderPage({ model = "page", content }: { model?: string; content: any }) {
  return <BuilderComponent model={model} content={content} />;
}

