const net = require('net');
const readline = require('readline-sync'); // aquí sí usamos readline-sync

// Crear conexión con el servidor
const client = net.createConnection({ host: 'localhost', port: 5000 }, () => {
  console.log('Conectado al servidor');
  client.write('Hola servidor'); // primer mensaje
  enviarMensaje();
});

// Cuando el servidor responde
client.on('data', (data) => {
  console.log('Servidor:', data.toString());
  enviarMensaje(); // pedir otro mensaje
});

// Cuando se cierra la conexión
client.on('end', () => {
  console.log('Desconectado del servidor');
});

// Manejar errores
client.on('error', (err) => {
  console.error('Error en la conexión:', err.message);
});

// Función para enviar mensajes desde la consola
function enviarMensaje() {
  let mensaje = readline.question('\nEscribe un mensaje (0 para salir): ');
  if (mensaje === '0') {
    console.log('Cerrando cliente...');
    client.end();
  } else {
    client.write(mensaje);
  }
}
