"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KnowledgeCapsule {
  id: string;
  title: string;
  content: string;
  messages: any[];
  tags: string[];
  created: Date;
  helpedCount: number;
  isPublic: boolean;
  shareUrl?: string;
}

interface KnowledgeCapsulesProps {
  currentMessages?: any[];
  onSave?: (capsule: KnowledgeCapsule) => void;
  onLoad?: (capsule: KnowledgeCapsule) => void;
}

export function KnowledgeCapsules({
  currentMessages = [],
  onSave,
  onLoad,
}: KnowledgeCapsulesProps) {
  const [capsules, setCapsules] = useState<KnowledgeCapsule[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCapsules, setShowCapsules] = useState(false);
  const [newCapsuleTitle, setNewCapsuleTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockCapsules: KnowledgeCapsule[] = [
      {
        id: "1",
        title: "AI Assistant Setup Guide",
        content: "Complete walkthrough for building custom AI assistants",
        messages: [],
        tags: ["AI", "Development", "Guide"],
        created: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        helpedCount: 128,
        isPublic: true,
        shareUrl: "/capsule/ai-assistant-setup",
      },
      {
        id: "2",
        title: "Funding Strategy Session",
        content: "Grant applications and investor pitch strategies",
        messages: [],
        tags: ["Funding", "Business", "Strategy"],
        created: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        helpedCount: 67,
        isPublic: true,
        shareUrl: "/capsule/funding-strategy",
      },
      {
        id: "3",
        title: "CRM Optimization Playbook",
        content: "Advanced CRM setup and automation workflows",
        messages: [],
        tags: ["CRM", "Automation", "Sales"],
        created: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        helpedCount: 89,
        isPublic: true,
        shareUrl: "/capsule/crm-optimization",
      },
    ];
    setCapsules(mockCapsules);
  }, []);

  const availableTags = [
    "AI",
    "Development",
    "Business",
    "Funding",
    "CRM",
    "Strategy",
    "Marketing",
    "Sales",
    "Automation",
    "Guide",
    "Tutorial",
    "Advanced",
  ];

  const handleSaveCapsule = () => {
    if (!newCapsuleTitle.trim()) return;

    const newCapsule: KnowledgeCapsule = {
      id: Date.now().toString(),
      title: newCapsuleTitle,
      content: generateSummary(currentMessages),
      messages: currentMessages,
      tags: selectedTags,
      created: new Date(),
      helpedCount: 0,
      isPublic: false,
      shareUrl: `/capsule/${newCapsuleTitle.toLowerCase().replace(/\s+/g, "-")}`,
    };

    setCapsules((prev) => [newCapsule, ...prev]);
    if (onSave) onSave(newCapsule);

    setShowSaveModal(false);
    setNewCapsuleTitle("");
    setSelectedTags([]);
  };

  const generateSummary = (messages: any[]) => {
    if (messages.length === 0) return "New knowledge capsule";

    const lastFewMessages = messages.slice(-3);
    return lastFewMessages
      .map((m) => m.content?.substring(0, 100))
      .join(" ... ");
  };

  const handleLoadCapsule = (capsule: KnowledgeCapsule) => {
    if (onLoad) onLoad(capsule);
    setShowCapsules(false);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const copyShareUrl = (capsule: KnowledgeCapsule) => {
    const fullUrl = `${window.location.origin}${capsule.shareUrl}`;
    navigator.clipboard.writeText(fullUrl);
    // You could add a toast notification here
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 right-20 z-40 flex flex-col space-y-3">
        <motion.button
          onClick={() => setShowSaveModal(true)}
          className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Save Knowledge Capsule"
        >
          <span className="text-white text-xl">💾</span>
        </motion.button>

        <motion.button
          onClick={() => setShowCapsules(true)}
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="View Knowledge Capsules"
        >
          <span className="text-white text-xl">📑</span>
        </motion.button>
      </div>

      {/* Save Modal */}
      <AnimatePresence>
        {showSaveModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-6 max-w-md w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">📑</span>
                <h3 className="text-xl font-bold text-white">
                  Save Knowledge Capsule
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Capsule Title
                  </label>
                  <input
                    type="text"
                    value={newCapsuleTitle}
                    onChange={(e) => setNewCapsuleTitle(e.target.value)}
                    placeholder="e.g., AI Setup Guide, Funding Strategy..."
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${
                          selectedTags.includes(tag)
                            ? "bg-purple-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Preview:</p>
                  <p className="text-sm text-gray-300">
                    {generateSummary(currentMessages)}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCapsule}
                  disabled={!newCapsuleTitle.trim()}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-2 rounded-lg transition-all"
                >
                  Save Capsule
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Capsules Library */}
      <AnimatePresence>
        {showCapsules && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-xl font-bold text-white">
                    Knowledge Capsules
                  </h3>
                </div>
                <button
                  onClick={() => setShowCapsules(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4">
                {capsules.map((capsule) => (
                  <motion.div
                    key={capsule.id}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:bg-gray-800/70 transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleLoadCapsule(capsule)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1">
                          {capsule.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {capsule.content}
                        </p>

                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>🔥 {capsule.helpedCount} helped</span>
                          <span>📅 {capsule.created.toLocaleDateString()}</span>
                          {capsule.isPublic && <span>🌐 Public</span>}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyShareUrl(capsule);
                          }}
                          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                          title="Copy share link"
                        >
                          <span className="text-sm">🔗</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {capsule.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  💡 Click any capsule to resume that conversation thread
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default KnowledgeCapsules;
