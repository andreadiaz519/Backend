const net = require('net');

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  // Descomenta esta línea si quieres que el cliente reciba algo
  // socket.write("Hola desde el servidor");

  socket.on('end', () => {
    console.log("Un cliente se ha desconectado");
  });
});

server.listen(5001, () => {
  console.log("Servidor escuchando en el puerto 5001");
});
