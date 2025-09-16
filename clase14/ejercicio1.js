/*Actividades:
Ejercicio 1: Cálculo de Hash Simple
Escribe un script en Node.js que use el módulo crypto para generar un
hash SHA-256 de un texto ingresado por el usuario. Muestra el hash en
la consola.*/

const crypto = require("crypto");

// Mensaje
const texto = "hola chicas";

// Crear el hash
const hash = crypto.createHash("sha256").update(texto).digest("hex");

// Mostrar en consola
console.log("Texto:", texto);
console.log("SHA-256:", hash);
