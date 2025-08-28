/*Ejercicio 4: ¿Existe tu perfil?
Consigna: Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json existe. Si no existe, crea uno nuevo con un perfil básico.
Pista: Usa fs.existsSync para verificar la existencia del archivo.
*/

const fs = require("fs");

// Verificar si el archivo existe
if (fs.existsSync("perfil.json")) {
  console.log("✅ El archivo perfil.json ya existe.");
} else {
  // Crear perfil básico
  const perfil = {
    nombre: "Andrea",
    edad: 38,
    ciudadFavorita: "Calarcá"
  };

  // Guardar el archivo
  fs.writeFileSync("perfil.json", JSON.stringify(perfil, null, 2), (err) => {
    if(err) {
        console.log("No se pudo crear el perfil.", err)
    } else {
        console.log ("Perfil creado")
    }
  });
}
