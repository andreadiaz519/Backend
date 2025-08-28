/*Ejercicio 3: Pausar y reanudar la recepción de datos
 Consigna
Crea un cliente TCP que:
1. Reciba mensajes continuamente del servidor.
2. Al recibir el primer mensaje, pause la recepción durante 3
segundos.
3. Luego de los 3 segundos, reanude la recepción y siga mostrando
los mensajes.
 Pistas
• Usa client.pause() y client.resume().
• Un setTimeout() puede ayudarte a reanudar después de 3
segundos.*/

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  let counter = 1;

  // Enviar un mensaje cada segundo
  const interval = setInterval(() => {
    socket.write(`Mensaje #${counter}`);
    counter++;
  }, 1000);

  // Manejar desconexión del cliente
  socket.on("end", () => {
    console.log("Cliente desconectado");
    clearInterval(interval);
  });
});

// Servidor escuchando en localhost:5000
server.listen(5002, "localhost", () => {
  console.log("Servidor escuchando en localhost:5002");
});
