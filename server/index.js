const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  // connect 시 event
  console.log('a user connected');

  // client 로 부터 message 왔을 때
  socket.on('message', (message) => {
    // client 로 message 보내줌
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)} : ${message}`)
  })
})

const PORT = 8080;
http.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
})