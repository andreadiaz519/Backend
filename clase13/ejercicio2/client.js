const net = require('net');
const prompt = require('prompt-sync')();

const id = prompt('Ingrese el ID del hotel a consultar: ');

const client = net.createConnection({ host: '127.0.0.1', port: 4001 }, () => {
  console.log('Conectado al servidor. Enviando ID...');
  client.write(id);
});

client.on('data', (data) => {
  console.log('Respuesta del servidor:', data.toString());
  client.end();
});

client.on('end', () => console.log('Desconectado del servidor.'));
client.on('error', (err) => console.error('Error:', err.message));
