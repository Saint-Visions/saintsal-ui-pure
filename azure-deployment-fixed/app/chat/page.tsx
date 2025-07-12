"use client";

import React from "react";
import { ChatPanel } from "../../components/chat/chat-panel";
import { ChatSidebar } from "../../components/chat/chat-sidebar";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Chat Sidebar */}
      <ChatSidebar workspaceid="main-workspace" />

      {/* Main Chat Area */}
      <ChatPanel
        locale="en"
        workspaceid="main-workspace"
        chats={[]}
        refreshChats={() => {}}
      />
    </div>
  );
}
