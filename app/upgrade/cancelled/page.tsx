"use client";

export default function UpgradeCancelledPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <div
          style={{
            width: "120px",
            height: "120px",
            background: "linear-gradient(45deg, #666, #888)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            fontSize: "60px",
          }}
        >
          ❌
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#ccc",
          }}
        >
          Upgrade Cancelled
        </h1>

        <p style={{ fontSize: "18px", color: "#999", marginBottom: "30px" }}>
          No worries! Your account remains unchanged.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            background: "linear-gradient(45deg, #ffd700, #ffed4e)",
            color: "#000",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
