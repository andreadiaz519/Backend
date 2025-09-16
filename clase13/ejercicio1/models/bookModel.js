const fs = require('fs');
const path = require('path');

// Ruta al archivo books.json (está en la raíz del proyecto)
const DATA_FILE = path.join(__dirname, '..', 'books.json');

/**
 * getBookById(id)
 * - Lee el archivo JSON (sincrónico para mantenerlo simple)
 * - Devuelve el libro con el id indicado o null si no existe
 */
function getBookById(id) {
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    const books = JSON.parse(content);
    // Buscar por id numérico
    return books.find(b => b.id === id) || null;
  } catch (err) {
    // Si hay error al leer/parsing → lanzar error claro
    throw new Error('Error al leer la base de datos (books.json).');
  }
}

module.exports = { getBookById };
