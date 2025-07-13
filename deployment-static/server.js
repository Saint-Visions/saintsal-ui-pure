const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, url);
  
  if (url === '/index.html' || url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
  } else if (url === '/style.css') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.end(fs.readFileSync(path.join(__dirname, 'style.css')));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(\`✅ Static server running on port \${port}\`);
});
