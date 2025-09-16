/*Ejercicio 4: Hash de Contraseña con Sal
Crea un script en Node.js que permita al usuario ingresar una contraseña
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
genera un hash de la contraseña combinada con el "sal" usando el
algoritmo SHA-256. Muestra el hash generado. */

const crypto = require("crypto");

// Contraseña y sal fijos
const contrasena = "miSuperClave";
const sal = "12345"; // podrías usar un valor aleatorio si quieres

// Combinar contraseña y sal
const combinacion = contrasena + sal;

// Crear el hash SHA-256
const hash = crypto.createHash("sha256").update(combinacion).digest("hex");
// Mostrar resultados
console.log("Contraseña:", contrasena);
console.log("Sal:", sal);
console.log("Hash (SHA-256):", hash);
