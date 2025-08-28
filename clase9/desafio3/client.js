const net = require('net');

const client = net.createConnection({ port: 5001 }, () => {
  console.log("Cliente conectado al servidor");
  client.write("Hola servidor, soy el cliente");
});

// Timeout de 10 segundos si no hay datos
let timeout = setTimeout(() => {
  console.log("No se recibieron datos en 10 segundos. Destruyendo conexión...");
  client.destroy(); // cerrar inmediatamente
}, 10000);

// Si recibe datos, mostrar y cancelar el timeout
client.on('data', (data) => {
  console.log("Mensaje del servidor:", data.toString());
  clearTimeout(timeout); // cancelar timeout porque llegaron datos
});

// Cuando se cierre la conexión
client.on('end', () => {
  console.log("Cliente desconectado del servidor");
});

// Si ocurre un error
client.on('error', (err) => {
  console.error("Error en la conexión:", err.message);
});
