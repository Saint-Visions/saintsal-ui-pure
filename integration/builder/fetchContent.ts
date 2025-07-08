// integration/builder/fetchContent.ts
import { fetchOneEntry } from "@builder.io/sdk-react";

export async function getBuilderContent(model: string, urlPath: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

  return await fetchOneEntry({
    apiKey,
    model,
    userAttributes: { urlPath },
  });
}
