// client.js
const net = require("net");

const HOST = "localhost";
const PORT = 5002;

const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log("Conectado al servidor");
});

let firstMessage = true;

// Manejar los datos recibidos
client.on("data", (data) => {
  console.log("Mensaje recibido:", data.toString());

  if (firstMessage) {
    console.log("⏸Pausando recepción de datos por 3 segundos...");
    client.pause(); // Pausar recepción

    setTimeout(() => {
      console.log("▶Reanudando recepción de datos");
      client.resume(); // Reanudar recepción
    }, 3000);

    firstMessage = false;
  }
});

// Manejar desconexión
client.on("end", () => {
  console.log("Desconectado del servidor");
});

// Manejar errores
client.on("error", (err) => {
  console.error("Error en la conexión:", err.message);
});
