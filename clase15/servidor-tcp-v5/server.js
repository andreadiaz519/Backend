const net = require("net");
const { v5: uuidv5 } = require("uuid");


const NOMBRE_FIJO = "mi-nombre-fijo";
const NAMESPACE = uuidv5.DNS;

// Crear servidor TCP
const server = net.createServer((socket) => {
  console.log("Cliente conectado.");

  // Generar UUID v5 (determinista para el mismo nombre+namespace)
  const id = uuidv5(NOMBRE_FIJO, NAMESPACE);

  // Enviar un objeto JSON con el UUID
  const respuesta = JSON.stringify({ uuid: id });
  socket.write(respuesta);

  // Cerrar la conexión después de enviar
  socket.end();

  console.log("Enviado JSON con UUID v5:", respuesta);
});

// Escuchar en el puerto 3001
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor TCP (v5) escuchando en puerto ${PORT}...`);
});
