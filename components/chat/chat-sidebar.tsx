'use client'

interface ChatSidebarProps {
  workspaceid: string;
}

export function ChatSidebar({ workspaceid }: ChatSidebarProps) {
  return <div className="w-64">Sidebar for {workspaceid}</div>
}

