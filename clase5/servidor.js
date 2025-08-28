/*Ejercicio 1: Crear el servidor básico
Objetivo: Configurar un servidor TCP que escuche en el puerto 5000.
Guía paso a paso:
1. Crea un archivo llamado servidor.js.
2. Importa el módulo que te permite trabajar con servidores TCP
(net).
3. Usa el método que crea un servidor.
o Pista: Este método necesita una función que se ejecuta
cuando alguien se conecta.
4. Configura el servidor para que escuche en el puerto 5000.
o Pista: Usa el método que pone al servidor "a escuchar".
5. Agrega un mensaje en la consola para confirmar que el servidor
está listo.*/



// Importar el módulo 'net'
const net = require('net');

// Crear el servidor
const servidor = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Escuchar datos del cliente
  socket.on('data', (data) => {
    console.log('Mensaje del cliente:', data.toString());
    socket.write('Servidor recibió: ' + data.toString());
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// Escuchar en el puerto 5000
servidor.listen(5001, () => {
  // Mensaje de confirmación
  console.log('Servidor TCP escuchando en el puerto 5001');
});
