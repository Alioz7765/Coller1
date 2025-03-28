// server.js (الخادم الذي يعمل مع Socket.io)
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A player connected');
  socket.on('disconnect', () => {
    console.log('A player disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});
