/*Ejercicio 2: Servidor con Timeout
Consigna:
Crea un servidor TCP que cierre automáticamente la conexión con un
cliente si no recibe datos en un período de 10 segundos. Si el cliente
envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
el contador de tiempo.
Requisitos:
• Usa el método socket.setTimeout() para establecer un tiempo de
espera.
• Usa el evento timeout para cerrar la conexión si se alcanza el
tiempo límite.
• Usa el evento data para reiniciar el contador de tiempo cada vez
que se reciben datos */

const net = require('net');

// Creamos el servidor TCP
const servidor = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Establecemos el timeout en 10 segundos (10,000 milisegundos)
  socket.setTimeout(10000);

  // Evento cuando el cliente envía datos
  socket.on('data', (datos) => {
    console.log('Datos recibidos:', datos.toString());
    socket.write(`Eco: ${datos}`); // Respondemos con eco
    socket.setTimeout(10000); // Reiniciamos el contador de tiempo
  });

  // Evento cuando se alcanza el timeout sin recibir datos
  socket.on('timeout', () => {
    console.log('Tiempo agotado. Cerrando conexión...');
    socket.end(); // Cerramos la conexión
  });

  // Evento cuando el cliente se desconecta
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  // Evento cuando se cierra el socket
  socket.on('close', () => {
    console.log('Conexión cerrada');
  });
});

// El servidor escucha en el puerto 3000
servidor.listen(3000, () => {
  console.log(' Servidor con timeout escuchando en el puerto 3000');
});
