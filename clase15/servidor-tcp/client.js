// 1) Importar módulo net
const net = require("net");

// 2) Conectarse al servidor
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Conectado al servidor.");
});

// 3) Cuando el servidor envíe datos, mostrarlos en consola
client.on("data", (data) => {
  console.log("UUID recibido:", data.toString());
  client.end(); // Cerrar la conexión después de recibir el UUID
});

// 4) Avisar cuando la conexión se cierre
client.on("end", () => {
  console.log("Conexión cerrada.");
});
