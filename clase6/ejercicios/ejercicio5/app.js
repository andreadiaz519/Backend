//PASO 1: Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

//PASO 2: Importamos readline para interactuar con el usuario
const readline = require('readline');

//PASO 3: Leemos el mensaje de bienvenida desde WELCOME_MESSAGE
const mensaje = process.env.WELCOME_MESSAGE || '¡Bienvenido al conversor de temperaturas!';

//PASO 4: Mostramos el mensaje inicial
console.log(mensaje);

//PASO 5: Creamos la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//PASO 6: Preguntamos la temperatura en grados Celsius
rl.question('Ingresa la temperatura en grados Celsius: ', (celsius) => {
  
  //PASO 7: Convertimos el valor a número y aplicamos la fórmula
  const fahrenheit = (parseFloat(celsius)*9)/5+32;

  //PASO 8: Mostramos el resultado
  console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);

  //PASO 9: Mensaje de despedida
  console.log('Gracias por usar el conversor. ¡Hasta la próxima!');

  //PASO 10: Cerramos la interfaz
  rl.close();
});

rl.on('close', () => {
    console.log('Gracias por utilizar el conversor');
    process.exit(0);
});
