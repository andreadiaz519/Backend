const net = require('net');

// Crear servidor TCP
const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Cuando llega un mensaje del cliente
  socket.on('data', (data) => {
    console.log('Mensaje del cliente:', data.toString());
    // Responder al cliente
    socket.write('Mensaje recibido');
  });

  // Cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  // Manejar errores
  socket.on('error', (err) => {
    console.error('Error en el cliente:', err.message);
  });
});

// Iniciar servidor en el puerto 5000
server.listen(5004, () => {
  console.log('Servidor escuchando en el puerto 5004');
});
