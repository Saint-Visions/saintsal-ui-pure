// Core types for the application
export type ContentType =
  | "chat"
  | "folder"
  | "assistant"
  | "model"
  | "prompt"
  | "file"
  | "tool"
  | "preset"
  | "collection";

export type DataItemType = {
  id: string;
  name: string;
  type: ContentType;
};

export type DataListType = DataItemType[];

export type LLMID = string;
export type ModelProvider =
  | "openai"
  | "azure"
  | "anthropic"
  | "google"
  | "mistral";

export type LLM = {
  modelId: string;
  modelName: string;
  provider: ModelProvider;
  hostedId: string;
  platformLink: string;
  imageInput: boolean;
};

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp?: Date;
};

export type ChatPayload = {
  messages: ChatMessage[];
  model: string;
  temperature?: number;
  maxTokens?: number;
};

export type MessageImage = {
  messageId: string;
  path: string;
  base64: string;
  url: string;
  file: File;
};

export type ChatFile = {
  id: string;
  name: string;
  type: string;
  file: File;
};

export type CollectionFile = {
  id: string;
  name: string;
  type: string;
};
