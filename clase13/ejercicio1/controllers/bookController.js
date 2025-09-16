const model = require('../models/bookModel');
const view = require('../views/bookView');

/**
 * handleRequest(rawData)
 * - rawData: lo que envía el cliente (se espera un ID como texto)
 * - devuelve una cadena JSON (ya formateada por la vista)
 */
function handleRequest(rawData) {
  const text = String(rawData).trim();         // limpiar espacios y saltos
  const id = parseInt(text, 10);               // convertir a número

  if (Number.isNaN(id)) {
    return view.formatError('ID inválido. Envía un número entero.');
  }

  try {
    const book = model.getBookById(id);
    if (book) {
      return view.formatSuccess(book);
    } else {
      return view.formatNotFound(id);
    }
  } catch (err) {
    return view.formatError(err.message || 'Error inesperado en el servidor.');
  }
}

module.exports = { handleRequest };
