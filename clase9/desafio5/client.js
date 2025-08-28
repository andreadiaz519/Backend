const net = require('net');

const client = net.createConnection({ port: 5003 }, () => {
  console.log("Cliente conectado al servidor");
  client.write("Hola servidor, soy el cliente");
});

// Escuchar evento data
client.on('data', (data) => {
  console.log("Mensaje del servidor:", data.toString());
});

// Escuchar evento end
client.on('end', () => {
  console.log("El servidor cerró la conexión (evento end)");
});

// Escuchar evento close
client.on('close', () => {
  console.log("Conexión cerrada (evento close)");
});

// Escuchar evento error
client.on('error', (err) => {
  console.error("Error en la conexión:", err.message);
});

// A los 10 segundos -> unref()
setTimeout(() => {
  console.log("Ejecutando client.unref(): el proceso puede terminar si no hay más tareas activas.");
  client.unref();
}, 10000);

// A los 15 segundos -> ref()
setTimeout(() => {
  console.log("Ejecutando client.ref(): el proceso se mantiene activo nuevamente.");
  client.ref();
}, 15000);

// A los 20 segundos -> cerrar conexión
setTimeout(() => {
  console.log("20 segundos cumplidos, cerrando conexión...");
  client.end();
}, 20000);
