#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8888;
const BASE_DIR = __dirname;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml'
};

const server = http.createServer((req, res) => {
  // Parse URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // Default to index.html for directories
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }
  
  // Remove leading slash
  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1);
  }
  
  // Construct file path
  const filePath = path.join(BASE_DIR, pathname);
  
  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
      return;
    }
    
    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
        return;
      }
      
      // Get file extension
      const ext = path.extname(filePath).toLowerCase();
      const mimeType = mimeTypes[ext] || 'application/octet-stream';
      
      // Send response
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
      
      // Log request
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - 200 OK`);
    });
  });
});

server.listen(PORT, () => {
  console.log(`
🚀 SEO Library Test Server
==========================
Server running at: http://localhost:${PORT}

Test URLs:
- http://localhost:${PORT}/biblioteca/ (Portuguese)
- http://localhost:${PORT}/library/ (English)
- http://localhost:${PORT}/libreria/ (Spanish)

Test Articles:
- http://localhost:${PORT}/biblioteca/agendamento-online-barbearia.html
- http://localhost:${PORT}/library/barbershop-online-booking.html
- http://localhost:${PORT}/libreria/reservas-online-barberia.html

Press Ctrl+C to stop the server
`);
  
  // Open browser automatically
  const { exec } = require('child_process');
  const openCommand = process.platform === 'darwin' ? 'open' : 
                      process.platform === 'win32' ? 'start' : 'xdg-open';
  
  exec(`${openCommand} http://localhost:${PORT}/biblioteca/`);
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
  console.log('\n\nShutting down server...');
  server.close(() => {
    console.log('Server stopped.');
    process.exit(0);
  });
});