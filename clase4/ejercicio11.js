const fs = require("fs");

// Leer el archivo si existe
let contactos = [];

if (fs.existsSync("contactos.json")) {
  const texto = fs.readFileSync("contactos.json", "utf-8");
  contactos = JSON.parse(texto);
}

// Crear un nuevo contacto
const nombre = "Andrea";
const telefono = "3214567890";
const email = "andrea@email.com";

// Verificar si ya existe
let repetido = false;

for (let i = 0; i < contactos.length; i++) {
  if (contactos[i].nombre === nombre) {
    repetido = true;
  }
}

if (repetido) {
  console.log("⚠️ El contacto ya existe.");
} else {
  const nuevo = { nombre: nombre, telefono: telefono, email: email };
  contactos.push(nuevo);
  fs.writeFileSync("contactos.json", JSON.stringify(contactos, null, 2));
  console.log("✅ Contacto agregado.");
}

// Mostrar todos los contactos
console.log("📋 Lista de contactos:");
console.log(contactos);