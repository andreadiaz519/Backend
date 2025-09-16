/*Ejercicio 3: Cifrado y Descifrado Básico con crypto
Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado */

const crypto = require("crypto");

// Mensaje
const texto = "hola chicas";

// --- Clave y vector de inicialización ---
// Para AES-256-CBC necesitamos una clave de 32 bytes y un IV de 16 bytes.
const clave = crypto.randomBytes(32); // clave aleatoria
const iv = crypto.randomBytes(16);    // vector de inicialización aleatorio

// --- CIFRAR ---
const cifrador = crypto.createCipheriv("aes-256-cbc", clave, iv);
let textoCifrado = cifrador.update(texto, "utf8", "hex");
textoCifrado += cifrador.final("hex");

// --- DESCIFRAR ---
const descifrador = crypto.createDecipheriv("aes-256-cbc", clave, iv);
let textoDescifrado = descifrador.update(textoCifrado, "hex", "utf8");
textoDescifrado += descifrador.final("utf8");

// --- Mostrar resultados ---
console.log("Texto original:", texto);
console.log("Texto cifrado:", textoCifrado);
console.log("Texto descifrado:", textoDescifrado);
