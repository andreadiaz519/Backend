const net = require("net");
const { v1: uuidv1 } = require("uuid");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  const id = uuidv1();
  const data = { uuid: id };

  socket.write(JSON.stringify(data));
  socket.end();
});

server.listen(3002, () => {
  console.log("Servidor TCP escuchando en el puerto 3002");
});
