"use client";

export default function DashboardPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      {/* Dashboard Header */}
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "16px",
            background: "linear-gradient(45deg, #ffd700, #ffed4e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Welcome to Your Elite Sanctuary
        </h1>
        <p style={{ color: "#ccc", fontSize: "18px" }}>
          Your SaintVisionAI™ dashboard is ready for divine execution.
        </p>
      </div>

      {/* Success Message */}
      <div
        style={{
          background: "rgba(0, 255, 136, 0.1)",
          border: "2px solid #00ff88",
          borderRadius: "15px",
          padding: "30px",
          margin: "30px auto",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#00ff88",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          ✅ DASHBOARD ONLINE!
        </div>
        <div>Your dashboard is accessible after 39 days!</div>
      </div>

      {/* Dashboard Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "10px" }}>🔍</span>
            <h3 style={{ color: "#ffd700", fontWeight: "bold" }}>
              Lead Discovery
            </h3>
          </div>
          <p style={{ color: "#ccc", marginBottom: "15px" }}>
            AI-powered lead generation and discovery tools.
          </p>
          <button
            style={{
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              color: "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Launch Tool
          </button>
        </div>

        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "10px" }}>🤝</span>
            <h3 style={{ color: "#ffd700", fontWeight: "bold" }}>
              Referral Network
            </h3>
          </div>
          <p style={{ color: "#ccc", marginBottom: "15px" }}>
            Manage your partner network and referral tracking.
          </p>
          <button
            onClick={() => (window.location.href = "/crm")}
            style={{
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              color: "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Open CRM
          </button>
        </div>

        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "10px" }}>🧠</span>
            <h3 style={{ color: "#ffd700", fontWeight: "bold" }}>AI Chat</h3>
          </div>
          <p style={{ color: "#ccc", marginBottom: "15px" }}>
            Your personal SaintSal™ AI companion.
          </p>
          <button
            onClick={() => (window.location.href = "/chat")}
            style={{
              background: "linear-gradient(45deg, #ffd700, #ffed4e)",
              color: "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Start Chat
          </button>
        </div>
      </div>

      {/* Patent Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          background: "rgba(255, 215, 0, 0.1)",
          border: "1px solid #ffd700",
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "40px auto",
        }}
      >
        <div style={{ color: "#ffd700", fontWeight: "bold" }}>
          🏆 U.S. Patent No. 10,290,222
        </div>
      </div>
    </div>
  );
}
