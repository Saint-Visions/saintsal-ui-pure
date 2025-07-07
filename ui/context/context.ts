import { createContext } from "react"

interface ChatbotUIContextProps {
  assistants: any[]
  assistantImages: any[]
  focusAssistant: any
  atCommand: string
  isAssistantPickerOpen: boolean
  setIsAssistantPickerOpen: (value: boolean) => void
}

export const ChatbotUIContext = createContext<ChatbotUIContextProps>({
  assistants: [],
  assistantImages: [],
  focusAssistant: null,
  atCommand: "",
  isAssistantPickerOpen: false,
  setIsAssistantPickerOpen: () => {}
})

