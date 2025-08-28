const net = require('net');

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on('data', (data) => {
    console.log("Servidor recibió:", data.toString());
    socket.write("Recibido: " + data.toString());
  });

  socket.on('end', () => {
    console.log("Cliente desconectado");
  });
});

server.listen(5003, () => {
  console.log("Servidor escuchando en el puerto 5003");
});
