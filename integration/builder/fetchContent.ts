// integration/builder/fetchContent.ts
import { builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

export async function getBuilderContent(model: string, urlPath: string) {
  return await builder.get(model, { url: urlPath }).toPromise();
}

