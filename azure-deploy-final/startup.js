// 🚀 AZURE STARTUP SCRIPT - GUARANTEED TO WORK
const { spawn } = require('child_process');

console.log('🔥 SAINTSAL™ Azure Startup - ACTIVATING...');
console.log('🎯 Port:', process.env.PORT || '8080');
console.log('🌐 Environment:', process.env.NODE_ENV || 'production');

// Set production environment
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || '8080';

// Start the server
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  env: process.env
});

server.on('error', (err) => {
  console.error('🚨 Server error:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  console.log('🛑 Server exited with code:', code);
  if (code !== 0) {
    process.exit(code);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Graceful shutdown initiated...');
  server.kill('SIGTERM');
});
