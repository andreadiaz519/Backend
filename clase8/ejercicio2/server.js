/*Ejercicio 2: Implementar un timeout en la conexión
 Consigna
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de
cerrar.
 Pistas
• Usa client.setTimeout() con 5000 milisegundos.
• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.*/

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  // Responder al cliente
  socket.write("¡Hola, cliente!");

  // Mostrar lo que envía el cliente
  socket.on("data", (data) => {
    console.log("Cliente dice:", data.toString());
  });

  // Detectar desconexión
  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

// El servidor escucha en localhost:5000
server.listen(5001, "localhost", () => {
  console.log("Servidor escuchando en localhost:5000");
});
