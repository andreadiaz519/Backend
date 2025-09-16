const net = require('net');
const controller = require('./controllers/bookController');

const PORT = 4000;

const server = net.createServer((socket) => {
  console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort);

  // Cuando el socket envía datos (el ID)
  socket.on('data', (chunk) => {
    const requestText = chunk.toString().trim();
    console.log('Solicitud recibida:', requestText);

    // Usamos el controlador para obtener la respuesta (JSON string)
    const response = controller.handleRequest(requestText);

    // Enviamos respuesta y cerramos la conexión
    socket.write(response);
    socket.end();
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });

  socket.on('error', (err) => {
    console.error('Error de socket:', err.message);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});
