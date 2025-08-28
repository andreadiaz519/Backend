const net = require('net');

const client = net.createConnection({ port: 5000 }, () => {
  console.log("Cliente conectado al servidor");
  client.write("Hola servidor, soy el cliente");
});

// Enviar mensaje automático cada 5 segundos
const interval = setInterval(() => {
  client.write("Mensaje automático");
  console.log("Cliente envió: Mensaje automático");
}, 5000);

// Mostrar mensajes recibidos del servidor
client.on('data', (data) => {
  console.log("Mensaje del servidor:", data.toString());
});

// Cerrar conexión tras 20 segundos
setTimeout(() => {
  clearInterval(interval); // detener los envíos
  console.log("20 segundos cumplidos, cerrando conexión...");
  client.end();
}, 20000);

// Cuando se cierre la conexión
client.on('end', () => {
  console.log("Cliente desconectado del servidor");
});

// Manejo de errores
client.on('error', (err) => {
  console.error("Error en la conexión:", err.message);
});
