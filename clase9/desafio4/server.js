const net = require('net');

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on('data', (data) => {
    console.log("Servidor recibió:", data.toString());
    // Opcional: responder
    socket.write("Recibido: " + data.toString());
  });

  socket.on('end', () => {
    console.log("Cliente desconectado");
  });
});

server.listen(5002, () => {
  console.log("Servidor escuchando en el puerto 5002");
});
