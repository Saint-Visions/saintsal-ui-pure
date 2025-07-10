const http = require("http");
const port = process.env.PORT || 8080;

console.log("🔥 ULTRA SIMPLE SERVER STARTING");
console.log("Port:", port);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>SaintVisionAI - SUCCESS!</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            background: #667eea; 
            color: white; 
            padding: 50px; 
        }
        h1 { font-size: 3em; }
        .success { 
            background: rgba(255,255,255,0.1); 
            padding: 30px; 
            border-radius: 15px; 
            margin: 20px; 
        }
    </style>
</head>
<body>
    <h1>🔥 SaintVisionAI 🔥</h1>
    <div class="success">
        <h2>🎉 SUCCESS! YOUR SITE IS LIVE! 🎉</h2>
        <p><strong>16 DAYS ENDS TODAY!</strong></p>
        <p>✅ Azure deployment successful</p>
        <p>✅ Container running</p>
        <p>✅ Captain DevOps mission complete</p>
        <p>🚀 U.S. Patent No. 10,290,222 - LIVE!</p>
    </div>
</body>
</html>
  `);
});

server.listen(port, () => {
  console.log("✅ SERVER RUNNING ON PORT", port);
  console.log("🎉 16 DAYS ENDS NOW!");
});
