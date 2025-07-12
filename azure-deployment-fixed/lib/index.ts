// Library utilities

// Blob to base64 conversion
export function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// OpenAPI validation
export function validateOpenAPI(spec: any): boolean {
  // Stub implementation
  return true;
}

// Build prompt
export function buildFinalMessages(messages: any[]): any[] {
  return messages;
}

// Consume stream
export async function consumeReadableStream(
  stream: ReadableStream,
): Promise<string> {
  const reader = stream.getReader();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }

  return result;
}

// Models list
export const LLM_LIST = [
  {
    modelId: "gpt-4",
    modelName: "GPT-4",
    provider: "openai" as const,
    hostedId: "gpt-4",
    platformLink: "https://openai.com",
    imageInput: false,
  },
];

// Hotkey hook
export default function useHotkey(key: string, callback: () => void) {
  // Stub implementation
}

// Supabase client
export const supabase = {
  // Stub implementation
};
