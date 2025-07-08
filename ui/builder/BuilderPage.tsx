import { Content } from "@builder.io/sdk-react";

interface BuilderPageProps {
  model?: string;
  content: any;
  apiKey: string;
}

export function BuilderPage({
  model = "page",
  content,
  apiKey,
}: BuilderPageProps) {
  return <Content model={model} content={content} apiKey={apiKey} />;
}
