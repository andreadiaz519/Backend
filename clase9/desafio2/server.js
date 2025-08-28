// server.js
const net = require('net');

const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    // Enviar solo 3 mensajes
    socket.write("Mensaje 1");
    socket.write("Mensaje 2");
    socket.write("Mensaje 3");

    // Cerrar conexión después de enviar los 3
    socket.end();
});

server.listen(5000, () => {
    console.log("Servidor escuchando en el puerto 5000");
});
