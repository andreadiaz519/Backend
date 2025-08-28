// Importamos el módulo readline para trabajar con entrada y salida de datos más interactivos
const readline = require('readline');

// Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

// Establecemos un saludo predeterminado usando nuestra variable de entorno
const defaultGreeting = process.env.defaultGreeting || 'Hola';

// Procesamos los argumentos de la línea de comandos
const args = process.argv.slice(2);
const userName = args[0] || 'Invitado';

// Mostramos el saludo personalizado y el nombre del usuario 
console.log(`${defaultGreeting} ${userName} !`);

// Información sobre el entorno de ejecución
console.log('Información sobre el entorno de ejecución:');
console.log('Directorio actual: ', process.cwd());
console.log('Plataforma: ', process.platform);

// Creación de una interfaz readline para poder interactuar con el usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Usamos el método rl.question para mostrar una pregunta al usuario
rl.question('¿Cuántos años tienes? ', (age) => {
  console.log(`Wow, ${age} años es una gran edad!`);
  rl.close(); // Cerramos la interfaz readline después de obtener la respuesta
});

// Manejo del evento close que se emite cuando se cierra la interfaz readline
rl.on('close', () => {
  console.log('Gracias por usar este programa, ¡adiós!');
  process.exit(0);
});
