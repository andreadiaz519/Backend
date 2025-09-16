/*Ejercicio 1: Servidor TCP que Valida Rutas
Objetivo: Crear un servidor TCP que acepte comandos desde el
cliente para validar si una ruta es absoluta o relativa, y responder con
la información correspondiente.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico
(por ejemplo, 8080).
2. Comando para Validar Rutas:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.isAbsolute para verificar si la ruta es
absoluta o relativa.
3. Responder al Cliente:
o Envía una respuesta al cliente indicando si la ruta es
absoluta o relativa.
Instrucciones:
• Ejecuta el servidor y conecta un cliente
• Envía diferentes rutas para verificar la funcionalidad.
• IMPORTANTE: Cuando la consigna menciona que el servidor
debe poder recibir "comandos" desde el cliente, se refiere a
que el cliente enviará datos (en este caso, rutas) al servidor, y el
servidor deberá procesar esos datos para determinar si son
rutas absolutas o relativas. En el contexto de un servidor TCP,
un "comando" puede ser cualquier tipo de dato que el cliente
envíe al servidor para que lo procese. En este caso, el
"comando" es una ruta de archivo que el cliente envía al
servidor. */


const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== Validador de Rutas ===");
rl.question("Escribe una ruta: ", (ruta) => {
  if (path.isAbsolute(ruta)) {
    console.log(`"${ruta}" es ABSOLUTA`);
  } else {
    console.log(`"${ruta}" es RELATIVA`);
  }
  rl.close();
});
