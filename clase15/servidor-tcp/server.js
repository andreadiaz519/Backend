// 1) Importar módulos
const net = require("net");
const { v4: uuidv4 } = require("uuid");

// 2) Crear el servidor TCP
const server = net.createServer((socket) => {
  // Cuando un cliente se conecta
  console.log("Cliente conectado.");

  // 3) Generar un UUID v4
  const id = uuidv4();

  // 4) Enviar el UUID al cliente
  socket.write(id);

  // 5) Cerrar la conexión después de enviar el UUID
  socket.end();

  // Avisar en consola
  console.log("UUID enviado al cliente:", id);
});

// 6) Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor TCP escuchando en puerto 3000...");
});
