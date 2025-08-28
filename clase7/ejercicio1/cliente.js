const net = require('net');

const cliente = net.createConnection({ port: 3001, host: 'localhost' }, () => {
  console.log('Conectado al servidor');
  cliente.write('Hola servidor, soy el cliente');
});

cliente.on('data', (datos) => {
  console.log('Eco recibido del servidor:', datos.toString());
  cliente.end(); // Cerramos después de recibir el eco
});

cliente.on('end', () => {
  console.log('Conexión cerrada por el servidor');
});

cliente.on('error', (err) => {
  console.error('Error en el cliente:', err.message);
});

