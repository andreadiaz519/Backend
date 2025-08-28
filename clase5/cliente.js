// cliente.js

const net = require('net');

// Conectarse al servidor
const cliente = net.createConnection({ port: 5001 }, () => {
  console.log('Conectado al servidor');
  cliente.write('Hola servidor, soy el cliente!');
});

// Escuchar respuesta del servidor
cliente.on('data', (data) => {
  console.log('Respuesta del servidor:', data.toString());
  cliente.end();
});

cliente.on('end', () => {
  console.log('Desconectado del servidor');
});
