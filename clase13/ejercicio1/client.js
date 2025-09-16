const net = require('net');
const readline = require('readline');

const HOST = '127.0.0.1';
const PORT = 4000;


function sendId(id) {
  const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log(`Conectado a ${HOST}:${PORT} — enviando ID: ${id}`);
    client.write(String(id));
  });

  client.on('data', (data) => {
    // Intentamos parsear JSON para mostrarlo bonito
    try {
      const obj = JSON.parse(data.toString());
      console.log('Respuesta del servidor:');
      console.log(JSON.stringify(obj, null, 2));
    } catch (e) {
      console.log('Respuesta (raw):', data.toString());
    }
    client.end();
  });

  client.on('end', () => {
    console.log('Desconectado del servidor.');
  });

  client.on('error', (err) => {
    console.error('Error de conexión:', err.message);
  });
}

// Permitir pasar ID por línea de comandos: node client.js 2
const arg = process.argv[2];
if (arg) {
  sendId(arg);
} else {
  // Si no pasó por args, pedimos por consola
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Ingrese el ID del libro a consultar: ', (answer) => {
    sendId(answer.trim());
    rl.close();
  });
}
