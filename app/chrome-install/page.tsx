export default function ChromeInstallPage() {
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
      <div style={{ textAlign: "center", maxWidth: "800px" }}>
        <div
          style={{
            width: "120px",
            height: "120px",
            background: "linear-gradient(45deg, #4285f4, #34a853)",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            fontSize: "60px",
          }}
        >
          🧩
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(45deg, #4285f4, #34a853)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Chrome Companion
        </h1>

        <p style={{ color: "#ccc", fontSize: "20px", marginBottom: "40px" }}>
          SaintSal™ Chrome Extension
        </p>

        <div
          style={{
            background: "rgba(0, 255, 136, 0.1)",
            border: "2px solid #00ff88",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
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
            ✅ CHROME EXTENSION PAGE READY!
          </div>
          <div>Your extension page is accessible after 40 days!</div>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "40px",
            border: "2px solid #4285f4",
          }}
        >
          <h3
            style={{
              color: "#4285f4",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            🚀 Installation Ready
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#4285f4",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                  fontSize: "24px",
                }}
              >
                📥
              </div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Download
              </h4>
              <p style={{ color: "#ccc", fontSize: "14px" }}>
                From Chrome Web Store
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#34a853",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                  fontSize: "24px",
                }}
              >
                ⚙️
              </div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Configure
              </h4>
              <p style={{ color: "#ccc", fontSize: "14px" }}>Set preferences</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#ea4335",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                  fontSize: "24px",
                }}
              >
                🔥
              </div>
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Cook
              </h4>
              <p style={{ color: "#ccc", fontSize: "14px" }}>Start with AI</p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "rgba(255, 215, 0, 0.1)",
            border: "1px solid #ffd700",
            borderRadius: "10px",
            color: "#ffd700",
            fontWeight: "bold",
          }}
        >
          🏆 U.S. Patent No. 10,290,222
        </div>
      </div>
    </div>
  );
}
