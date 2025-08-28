/*Ejercicio 1: Servidor de Eco
Consigna:
Crea un servidor TCP que actúe como un servidor de eco. Cuando un
cliente se conecte, el servidor debe recibir los datos enviados por el
cliente y devolverlos exactamente igual (hacer un "eco"). Además, el
servidor debe imprimir en la consola cada vez que un cliente se conecta,
desconecta o envía datos.
Requisitos:
• Usa el evento connection para detectar nuevas conexiones.
• Usa el evento data para recibir datos del cliente.
• Usa el método socket.write() para enviar los datos de vuelta al
cliente.
• Usa los eventos end y close para manejar la desconexión del
cliente.*/


// Importamos el módulo 'net' para crear el servidor TCP
const net = require('net');

// Creamos el servidor
const servidor = net.createServer((socket) => {
  console.log('📡 Cliente conectado');

  // Evento cuando el cliente envía datos
  socket.on('data', (datos) => {
    console.log('📨 Datos recibidos del cliente:', datos.toString());
    socket.write(datos); // Enviamos de vuelta los mismos datos (eco)
  });

  // Evento cuando el cliente termina la conexión
  socket.on('end', () => {
    console.log('🔌 Cliente desconectado (end)');
  });

  // Evento cuando el socket se cierra completamente
  socket.on('close', () => {
    console.log('❎ Conexión cerrada (close)');
  });
});

// El servidor escucha en el puerto 3000
servidor.listen(3001, () => {
  console.log('🚀 Servidor de eco escuchando en el puerto 3000');
});
