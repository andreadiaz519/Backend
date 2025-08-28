// client.js
const net = require("net");

const HOST = "localhost";
const PORT = 5001;

// Crear el cliente TCP
const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log("Conectado al servidor ✅");
  client.write("¡Hola, servidor!");
});

// Escuchar datos del servidor
client.on("data", (data) => {
  console.log("Mensaje recibido del servidor:", data.toString());
  client.end(); // 🔹 Cierra la conexión después de recibir respuesta
});

// Configurar timeout de 5 segundos
client.setTimeout(5000, () => {
  console.log("⏰ Tiempo de espera agotado");
  client.end(); // cerrar conexión
});

// Manejar cierre de conexión
client.on("end", () => {
  console.log("Desconectado del servidor ❌");
});

// Manejar errores
client.on("error", (err) => {
  console.error("Error en la conexión:", err.message);
});
