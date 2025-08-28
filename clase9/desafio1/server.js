const net = require('net');

// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log("Nuevo cliente conectado");

    // Enviar mensaje de bienvenida
    socket.write("Bienvenido, cliente!");

    // Escuchar mensajes del cliente
    socket.on('data', (data) => {
        console.log("Cliente dice:", data.toString());
    });

    // Cuando el cliente se desconecta
    socket.on('end', () => {
        console.log("Cliente desconectado");
    });
});

// Escuchar en el puerto 5000
server.listen(5000, () => {
    console.log("Servidor TCP escuchando en el puerto 5000");
});
