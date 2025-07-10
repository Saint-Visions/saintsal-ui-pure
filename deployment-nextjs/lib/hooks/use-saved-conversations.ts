'use client'

type Chat = {
  id: string
  message: string
  // Add more fields here as needed
}

export function useSavedConversations() {
  const savedChats: Chat[] = [] // ✅ Explicitly typed
  const refreshSavedChats = () => {
    console.log('Refreshing chats...')
    // TODO: implement actual refresh logic
  }

  return { savedChats, refreshSavedChats }
}
