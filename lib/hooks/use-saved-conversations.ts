'use client'

export function useSavedConversations() {
  const savedChats = []
  const refreshSavedChats = () => {
    console.log('Refreshing chats...')
  }

  return { savedChats, refreshSavedChats }
}

