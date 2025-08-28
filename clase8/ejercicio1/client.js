// client.js
const net = require("net");

const HOST = "localhost";
const PORT = 5000;

// Crear el cliente TCP
const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log("Conectado al servidor ✅");

  // Enviar mensaje al servidor
  client.write("¡Hola, servidor!");
});

// Escuchar datos que envía el servidor
client.on("data", (data) => {
  console.log("Mensaje recibido del servidor:", data.toString());
  client.end(); // 🔹 Cierra la conexión después de recibir respuesta
});

// Manejar cierre de conexión
client.on("end", () => {
  console.log("Desconectado del servidor ❌");
});

// Manejar errores con detalle
client.on("error", (err) => {
  console.error("Error en la conexión:", err.message);
});
