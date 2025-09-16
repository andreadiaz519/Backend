const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("=== Normalizador de Rutas ===");

rl.question("Escribe una ruta: ", (ruta) => {
  const normalizada = path.normalize(ruta);
  console.log("Ruta normalizada:", normalizada);
  rl.close();
});
