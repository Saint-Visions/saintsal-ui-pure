"use client";

import React, { useState, useEffect } from "react";
import {
  Plus,
  MessageSquare,
  Settings,
  Crown,
  Trash2,
  Edit3,
} from "lucide-react";
import Link from "next/link";

interface ChatSidebarProps {
  workspaceid: string;
}

interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
}

export function ChatSidebar({ workspaceid }: ChatSidebarProps) {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      title: "Welcome to SaintSal™",
      lastMessage:
        "Welcome to SaintSal™ AI! I'm your elite cooking companion...",
      timestamp: new Date(),
      messageCount: 1,
    },
  ]);
  const [activeChat, setActiveChat] = useState("1");

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Conversation",
      lastMessage: "Start cooking with SaintSal™...",
      timestamp: new Date(),
      messageCount: 0,
    };
    setChats([newChat, ...chats]);
    setActiveChat(newChat.id);
  };

  const deleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (chats.length > 1) {
      setChats(chats.filter((chat) => chat.id !== chatId));
      if (activeChat === chatId) {
        setActiveChat(chats[0].id);
      }
    }
  };

  const renameChat = (chatId: string, newTitle: string) => {
    setChats(
      chats.map((chat) =>
        chat.id === chatId ? { ...chat, title: newTitle } : chat,
      ),
    );
  };

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <div className="text-black font-bold text-xs">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-xs font-medium">
                SAINTSAL™
              </div>
              <div className="text-white text-sm">AI Chat</div>
            </div>
          </div>
          <Link href="/upgrade">
            <Crown className="w-5 h-5 text-yellow-500 hover:text-yellow-400 cursor-pointer" />
          </Link>
        </div>

        <button
          onClick={createNewChat}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium py-2 px-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm">New Chat</span>
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`group relative p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                activeChat === chat.id
                  ? "bg-yellow-500/20 border border-yellow-500/30"
                  : "hover:bg-gray-800"
              }`}
            >
              <div className="flex items-start space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-sm font-medium truncate">
                    {chat.title}
                  </h4>
                  <p className="text-gray-400 text-xs truncate mt-1">
                    {chat.lastMessage}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500 text-xs">
                      {chat.timestamp.toLocaleDateString()}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {chat.messageCount} msgs
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Actions */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="flex space-x-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const newTitle = prompt("Rename chat:", chat.title);
                      if (newTitle) renameChat(chat.id, newTitle);
                    }}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <Edit3 className="w-3 h-3" />
                  </button>
                  {chats.length > 1 && (
                    <button
                      onClick={(e) => deleteChat(chat.id, e)}
                      className="p-1 text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            <Settings className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="text-center text-xs text-gray-500">
            <div className="text-yellow-400 font-medium">
              Workspace: {workspaceid}
            </div>
            <div>SaintSal™ Elite AI</div>
          </div>
        </div>
      </div>
    </div>
  );
}
