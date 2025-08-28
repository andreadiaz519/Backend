const net = require('net');

const HOST = 'localhost';
const PORT = 5000;
let client;

// Función para conectarse al servidor
function connectToServer() {
    client = net.createConnection({ host: HOST, port: PORT }, () => {
        console.log("Conectado al servidor");
        client.write("¡Hola, servidor!");
    });

    // Mensajes recibidos del servidor
    client.on('data', (data) => {
        console.log("Servidor dice:", data.toString());
    });

    // Cuando el servidor cierra la conexión
    client.on('close', () => {
        console.log("Conexión cerrada, reconectando en 3 segundos...");
        setTimeout(connectToServer, 3000);
    });

    // Manejo de errores
    client.on('error', (error) => {
        console.error("Error en la conexión:", error.message);
    });
}

// Iniciar conexión
connectToServer();
