const net = require('net');
const controller = require('./controllers/hotelController');

const PORT = 4001;

const server = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', (chunk) => {
    const request = chunk.toString().trim();
    console.log('Solicitud recibida:', request);

    const response = controller.handleRequest(request);

    socket.write(response);
    socket.end();
  });

  socket.on('end', () => console.log('Cliente desconectado.'));
  socket.on('error', (err) => console.error('Error:', err.message));
});

server.listen(PORT, () => {
  console.log(`Servidor de hoteles escuchando en puerto ${PORT}`);
});
