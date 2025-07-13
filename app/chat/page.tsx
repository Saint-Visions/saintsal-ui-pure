"use client";

import { useState } from "react";

interface Message {
  role: string;
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: "user", content: inputMessage };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Simulate API call for now
      setTimeout(() => {
        const aiMessage = {
          role: "assistant",
          content:
            "SaintSal AI is ready to help with your cooking questions! (Azure Functions will be connected soon)",
        };
        setMessages([...newMessages, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "Sorry, SaintSal AI is temporarily unavailable. Please try again.",
      };
      setMessages([...newMessages, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        display: "flex",
      }}
    >
      {/* Chat Sidebar */}
      <div
        style={{
          width: "300px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRight: "1px solid #333",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "#ffd700", marginBottom: "20px" }}>
          💬 SaintSal AI
        </h2>
        <div style={{ color: "#ccc", fontSize: "14px" }}>
          <p>🔥 Ready for Azure Functions</p>
          <p>🎯 Elite AI Cooking Assistant</p>
          <p>📡 Coming Soon</p>
        </div>
      </div>

      {/* Main Chat Area */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Success Message */}
        <div
          style={{
            background: "rgba(0, 255, 136, 0.1)",
            border: "2px solid #00ff88",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              color: "#00ff88",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            ✅ CHAT INTERFACE READY!
          </div>
          <div>Your AI chat interface is working after 40 days!</div>
        </div>

        {/* Messages Container */}
        <div
          style={{
            flex: 1,
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            overflowY: "auto",
            maxHeight: "400px",
          }}
        >
          {messages.length === 0 ? (
            <div style={{ textAlign: "center", color: "#888" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "linear-gradient(45deg, #ffd700, #ffed4e)",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "40px",
                }}
              >
                🤖
              </div>
              <h3 style={{ color: "#ffd700", marginBottom: "10px" }}>
                SaintSal™ AI Ready
              </h3>
              <p>Ask me anything about cooking!</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "12px",
                  borderRadius: "10px",
                  background:
                    message.role === "user"
                      ? "rgba(255, 215, 0, 0.1)"
                      : "rgba(255, 255, 255, 0.1)",
                  border:
                    message.role === "user"
                      ? "1px solid #ffd700"
                      : "1px solid #333",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "5px",
                    color: message.role === "user" ? "#ffd700" : "#00ff88",
                  }}
                >
                  {message.role === "user" ? "👤 You" : "🤖 SaintSal AI"}
                </div>
                <div>{message.content}</div>
              </div>
            ))
          )}

          {isLoading && (
            <div
              style={{
                textAlign: "center",
                color: "#ffd700",
                fontStyle: "italic",
              }}
            >
              🔥 SaintSal AI is cooking up a response...
            </div>
          )}
        </div>

        {/* Input Area */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "15px",
            padding: "15px",
          }}
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask SaintSal AI about cooking..."
            style={{
              flex: 1,
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "12px",
              color: "white",
              fontSize: "16px",
            }}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            style={{
              background: isLoading
                ? "rgba(255, 215, 0, 0.3)"
                : "linear-gradient(45deg, #ffd700, #ffed4e)",
              color: isLoading ? "#999" : "#000",
              border: "none",
              borderRadius: "10px",
              padding: "12px 24px",
              fontWeight: "bold",
              cursor: isLoading ? "not-allowed" : "pointer",
              fontSize: "16px",
            }}
          >
            {isLoading ? "🔥" : "➤"}
          </button>
        </div>

        {/* Status */}
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          🎯 SaintVisionAI™ Chat Interface - Ready for Azure Functions
        </div>
      </div>
    </div>
  );
}
