// Importamos el modulo para crear el cliente TCP

const net = require('net');

//Configuraciond e la conexion
const PORT = 5000;
const HOST = 'localhost';

//Creamos la conexion con el servidor usando net.createConnection()
const client = net.createConnection({ port: PORT, host: HOST },() => {
    //Mensaje de conexiton exitosa
    console.log('Conectado al servidor');

    //Enviamos un mensaje inicial al servidor
    client.write('Hola, servidor');

    //Configuramos un tiempo de espera de 10 segundos utilizando setTimeout()
    client.setTimeout(10000, () => {
        console.log('Tiempo de espera alcanzado, cerrando la conexion...')
        client.end(); //Finaliza la concexion si se agota el tiempo
    });
    
    //Pausamos la recepcion de datos despues de 2 segundos
    setTimeout(() => {
        console.log('Pausando la recepcion de datos ...');
        client.pause();

        //Reanudar la recepcion de datos despues de 3 segundos
        setTimeout(() => {
            console.log('Renudando la recepcion de datos ...');
            client.resume();
            }, 3000);
        }, 2000);
});

//Manejo de eventos lo vemos en clase 9

//Manejo el evento 'data' para recibir mensajes del servidor
client.on('data', (data) => {
    console.log('Datos recibidos del servidor: ' , data.toString());
});

//Manejo del evento 'end' cuando el servidor cierra la conexion
client.on('end', () => {
    console.log('El servidor cerro la conexion.');
});

//Manejo del evento 'error'
client.on('error', (err) => {
    console.error('Error en la conexion:' , err.message);
});

//Manejo del evento 'close' cuando la conexion se cierra
client.on('close' ,() => {
    console.log('Conexion cerrada');
});


//Destruimos el socket despues de 15 segundos con destroy() para liberar recursos
setTimeout(() => {
    console.log('Destruyendo el socket ...');
    client.destroy();
    }, 15000);
    