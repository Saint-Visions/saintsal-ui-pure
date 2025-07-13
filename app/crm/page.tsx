"use client";

export default function CRMPage() {
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
      {/* CRM Header */}
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
          SaintSal™ CRM Dashboard
        </h1>
        <p style={{ color: "#ccc", fontSize: "18px" }}>
          Elite customer relationship management for the SaintVisionAI™
          ecosystem.
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
          ✅ CRM MODULE ACCESSIBLE!
        </div>
        <div>Your CRM system is now online after 39 days!</div>
      </div>

      {/* CRM Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "800px",
          margin: "40px auto",
        }}
      >
        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{ fontSize: "32px", fontWeight: "bold", color: "#ffd700" }}
          >
            127
          </div>
          <div style={{ color: "#ccc" }}>Active Partners</div>
        </div>

        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{ fontSize: "32px", fontWeight: "bold", color: "#ffd700" }}
          >
            $847K
          </div>
          <div style={{ color: "#ccc" }}>Monthly Revenue</div>
        </div>

        <div
          style={{
            background: "rgba(255, 215, 0, 0.1)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{ fontSize: "32px", fontWeight: "bold", color: "#ffd700" }}
          >
            94%
          </div>
          <div style={{ color: "#ccc" }}>Success Rate</div>
        </div>
      </div>

      {/* CRM Interface Placeholder */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
          border: "2px solid #ffd700",
          padding: "60px",
          margin: "40px auto",
          maxWidth: "800px",
          textAlign: "center",
        }}
      >
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
          💼
        </div>
        <h3
          style={{
            color: "#ffd700",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          CRM Module Online
        </h3>
        <p style={{ color: "#ccc" }}>
          Elite partner management system ready for deployment!
        </p>
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
