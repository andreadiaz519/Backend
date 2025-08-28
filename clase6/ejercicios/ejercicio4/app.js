//PASO 1: Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

//PASO 2: Importamos readline para interactuar con el usuario
const readline = require('readline');

//PASO 3: Leemos la variable START_MESSAGE desde process.env
const saludo = process.env.START_MESSAGE || '¡Hola! Bienvenido al programa.';

//PASO 4: Mostramos el saludo inicial
console.log(saludo);

//PASO 5: Creamos la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//PASO 6: Preguntamos el nombre del usuario
rl.question('¿Cuál es tu nombre? ', (nombre) => {
  
  //PASO 7: Mostramos el mensaje de despedida personalizado
  console.log(`Gracias por participar, ${nombre}. ¡Que tengas un excelente día!`);

  //PASO 8: Cerramos la interfaz
  rl.close();
});

rl.on('close' , () => {
    process.exitCode(0);
});
