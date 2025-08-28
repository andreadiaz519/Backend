// client.js
const net = require('net');

const HOST = 'localhost';
const PORT = 5000;

const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log("Conectado al servidor");
    client.write("Hola, servidor!");
});

// Escuchar datos del servidor
client.on('data', (data) => {
    console.log("Servidor dice:", data.toString());
});

// Pausar recepción de datos a los 3 segundos
setTimeout(() => {
    console.log("Pausando recepción de datos...");
    client.pause();
}, 3000);

// Reanudar recepción de datos a los 8 segundos
setTimeout(() => {
    console.log("Reanudando recepción de datos...");
    client.resume();
}, 8000);

// Finalizar conexión a los 12 segundos
setTimeout(() => {
    console.log("Cerrando conexión con el servidor...");
    client.end();
}, 12000);

// Manejo de cierre
client.on('end', () => {
    console.log("El servidor cerró la conexión");
});
