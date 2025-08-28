const fs = require ('fs')

if(fs.existsSync('perfil.son')){
    fs.unlink('perfil.json',(err) => {
        if(err){
            console.error("No se puede eliminar tu perfil", error)
        } else {
            console.log("Perfil eliminado")
        }
    })
} else {
    console.log("El archivo no existe")
}