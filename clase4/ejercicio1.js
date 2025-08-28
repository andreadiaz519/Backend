const fs = require("fs");

const perfil = {
  nombre: "Andrea",
  edad: 22,
  ciudadFavorita: "Calarcá"
};

fs.writeFileSync("perfil.json", JSON.stringify(perfil, null, 2));

console.log("Perfil creado exitosamente.");
