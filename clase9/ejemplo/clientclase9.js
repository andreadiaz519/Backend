//Importar el modulo 'net'

const net = require('net');

//Creamos la conexxion TCP con el servidor en el puerto 5000
const client = net.createConnection({ port: 5000});
    
    //Evento 'connect': para manejar la conexion con el servidor
    client.on('connect', () => {
        console.log("Conectado al servidor!");

    //Enviamos un mensaje al servidor al conectarse
    client.write("Hola, servidor! Soy el cliente");
    });

    //Evento "data": maneja datos recibidos del servidor
    client.on('data', (data) =>{
        console.log("Mensaje recibido del servidor: ", data.toString());
    });

    //Evento 'end': este evento se ejecuta cuando el servidor cierra la conexion
    client.on('end', () => {
        console.log("El servidor ha cerrado la conexion");
    });

    //Evento 'close': se ejecuta cuando la conexion se cierra completamente
    client.on('close', () =>{
        console.log("Conexion cerrada con el servidor");
    });

    // Evento 'error': sirve para manejar errores en la conexion
    client.on('error', (error) =>{
    console.error("Error en la conexion:", error.message);
});

    //Cerramos la conexion si no hay respuesta en 10 segundos
    client.setTimeout(10000, () => {
        console.log("Tiempo de espera agotado, Cerramos la conexion...");
        client.end(); //Finalizamos la conexion de manera ordenada
    });

    //client.pause(): Pausar la recepecion de datos (simjlacion de uso de el metodo)
    setTimeout(() =>{
        console.log("Pausando la recepcion de datos...");
        client.pause();
    }, 5000);

    //client.resume(): reanudar la recepcion de los datos despues de una pausa
    setTimeout(() =>{
        console.log("Reanudando la recepcion de datos...");
        client.resume();
    }, 7000);

    // cliente.destroy(): Cerrar y liberar todos los recursos inmediatamente
    setTimeout(() =>{
        console.log("Destruyendo la conexion...");
        client.destroy();
    }, 12000);

    // client.end(): Finaliza la conexion automaticamente
    setTimeout(() =>{
        console.log("Finalizando la conexion correctamente...");
        client.end();
    }, 17000);


    


