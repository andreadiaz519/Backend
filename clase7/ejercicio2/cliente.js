const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cliente = net.createConnection({ port: 3002, host: 'localhost' }, () => {
  console.log('✅ Conectado al servidor');
  preguntar();
});

function preguntar() {
  rl.question('📤 Escribe un mensaje: ', (mensaje) => {
    if (mensaje.toLowerCase() === 'salir') {
      cliente.end();
      rl.close();
    } else {
      cliente.write(mensaje);
    }
  });
}

cliente.on('data', (datos) => {
  console.log('📩 Respuesta del servidor:', datos.toString());
  preguntar();
});

cliente.on('end', () => {
  console.log('🔚 Conexión cerrada por el servidor');
  rl.close();
});

cliente.on('error', (err) => {
  console.error('❌ Error en el cliente:', err.message);
  rl.close();
});
