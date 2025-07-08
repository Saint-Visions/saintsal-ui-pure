import { createContext } from "react";

// ChatbotUI Context
export interface ChatbotUIContextType {
  // User and authentication
  user: any;
  profile: any;

  // Chat related
  messages: any[];
  selectedChat: any;
  chats: any[];

  // AI Models and Assistants
  assistants: any[];
  assistantImages: any[];
  models: any[];

  // Tools and Files
  tools: any[];
  files: any[];
  collections: any[];

  // Prompts and Presets
  prompts: any[];
  presets: any[];

  // UI State
  focusPrompt: boolean;
  setFocusPrompt: (focus: boolean) => void;
  focusAssistant: boolean;
  setFocusAssistant: (focus: boolean) => void;
  focusFile: boolean;
  setFocusFile: (focus: boolean) => void;
  focusTool: boolean;
  setFocusTool: (focus: boolean) => void;

  // Folders
  folders: any[];

  // Workspaces
  selectedWorkspace: any;
  workspaces: any[];
}

export const ChatbotUIContext = createContext<ChatbotUIContextType>({
  user: null,
  profile: null,
  messages: [],
  selectedChat: null,
  chats: [],
  assistants: [],
  assistantImages: [],
  models: [],
  tools: [],
  files: [],
  collections: [],
  prompts: [],
  presets: [],
  focusPrompt: false,
  setFocusPrompt: () => {},
  focusAssistant: false,
  setFocusAssistant: () => {},
  focusFile: false,
  setFocusFile: () => {},
  focusTool: false,
  setFocusTool: () => {},
  folders: [],
  selectedWorkspace: null,
  workspaces: [],
});
