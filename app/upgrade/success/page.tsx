"use client";

export default function UpgradeSuccessPage() {
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
            background: "linear-gradient(45deg, #00ff88, #34a853)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            fontSize: "60px",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #ffd700, #ffed4e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Upgrade Successful!
        </h1>

        <div
          style={{
            background: "rgba(0, 255, 136, 0.1)",
            border: "2px solid #00ff88",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{ color: "#00ff88", fontSize: "20px", fontWeight: "bold" }}
          >
            🎉 Your SaintVisionAI™ upgrade is complete!
          </div>
        </div>

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
          🔥 Continue
        </button>
      </div>
    </div>
  );
}
