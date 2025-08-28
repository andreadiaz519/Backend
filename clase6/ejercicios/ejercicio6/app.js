//PASO 1: Importamos readline
const readline = require('readline');

//PASO 2: Creamos la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//PASO 3: Configuramos el mensaje personalizado con setPrompt
rl.setPrompt('Escribe una palabra (o "salir" para terminar): ');

//PASO 4: Mostramos el prompt inicial
rl.prompt();

//PASO 5: Usamos el evento 'line' para procesar cada entrada
rl.on('line', (input) => {
  //Si el usuario escribe "salir", cerramos el programa
  if (input.trim().toLowerCase() === 'salir') {
    console.log('Gracias por participar. ¡Hasta luego!');
    rl.close();
  } else {
    //Mostramos la palabra en mayúsculas
    console.log('→', input.toUpperCase());
    rl.prompt(); //Volvemos a mostrar el prompt
  }
});

rl.on('close', () => {
    console.log('Gracias por utilizarnos nos vemos pronto!');
    process.exit(0);
});
