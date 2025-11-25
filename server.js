const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
  let urlPath = req.url;
  let filePath = './html/';
  
  // Redirect root to /index.gmi
  if (urlPath === '/' || urlPath === '') {
    res.writeHead(301, { 'Location': '/index.gmi' });
    res.end();
    return;
  }
  
  // Remove .gmi extension to find the actual .html file
  if (urlPath.endsWith('.gmi')) {
    filePath += urlPath.replace('.gmi', '.html');
  } else {
    filePath += urlPath + '.html';
  }

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
