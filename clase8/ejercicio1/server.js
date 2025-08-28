/*Ejercicio 1: Conectar y enviar un mensaje al servidor
 Consigna
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
 Pistas
• Usa net.createConnection() para conectar al servidor.
• Maneja el evento 'connect' para saber cuándo la conexión está
lista.
• Usa client.write() para enviar el mensaje.
• Captura los datos con el evento 'data' */


const net = require("net");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  // Responder al cliente apenas se conecte
  socket.write("¡Hola, cliente!");

  // Mostrar lo que envía el cliente
  socket.on("data", (data) => {
    console.log("Cliente dice:", data.toString());
  });

  // Detectar desconexión del cliente
  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

// El servidor escucha en localhost:5000
server.listen(5000, "localhost", () => {
  console.log("Servidor escuchando en localhost:5000");
});
