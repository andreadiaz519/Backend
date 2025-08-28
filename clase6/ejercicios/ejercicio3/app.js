//Importamos el módulo readline para poder interactuar con el usuario desde la consola
const readline = require('readline');

//PASO 1: Creamos la interfaz readline para entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//PASO 2: Pedimos el primer número al usuario
rl.question('Ingresa el primer número: ', (num1) => {
  
  //PASO 3: Pedimos el segundo número
  rl.question('Ingresa el segundo número: ', (num2) => {
    
    //PASO 4: Convertimos los valores a números y calculamos la suma
    const suma = Number(num1) + Number(num2);

    //PASO 5: Mostramos el resultado en consola
    console.log('La suma de los dos números es:', suma);

    //PASO 6: Cerramos la interfaz y mostramos mensaje final
    console.log('Gracias por usar el programa. ¡Hasta luego!');
    rl.close();
  });
});

rl.on('close',() => {
    console.log('Gracias por entrar.');
    process.exit(0);
});
