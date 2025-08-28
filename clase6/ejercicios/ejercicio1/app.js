// Cargamos las variables de entorno desde el archivo .env
require('dotenv').config();

// Obtenemos el saludo desde la variable de entorno GREETING
// Si no existe, usamos "Hola" como valor predeterminado
const saludo = process.env.GREETING || 'Hola';

// Obtenemos el nombre desde los argumentos de la línea de comandos
// Si no se proporciona, usamos "Invitado" como valor predeterminado
const nombre = process.argv[2] || 'Invitado';

// Mostramos el saludo personalizado en la consola
console.log(`${saludo} ${nombre}`);
