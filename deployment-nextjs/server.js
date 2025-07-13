import { createServer } from "http";
import { parse } from "url";
import next from "next";

const dev = false;
const hostname = "localhost";
const port = process.env.PORT || 8080;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

console.log("🔥 SaintVisionAI Production Server Starting...");

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
});
