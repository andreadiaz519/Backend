/**
 * La vista devuelve cadenas JSON ya formateadas.
 * El servidor solo enviará la cadena al cliente.
 */

function formatSuccess(book) {
  return JSON.stringify({ status: 'ok', book });
}

function formatNotFound(id) {
  return JSON.stringify({ status: 'not_found', message: `No se encontró el libro con id ${id}` });
}

function formatError(message) {
  return JSON.stringify({ status: 'error', message: String(message) });
}

module.exports = { formatSuccess, formatNotFound, formatError };
