function formatSuccess(hotel) {
  return JSON.stringify({
    status: 'ok',
    hotel: hotel.name,
    roomsAvailable: hotel.roomsAvailable
  });
}

function formatNotFound(id) {
  return JSON.stringify({
    status: 'not_found',
    message: `No se encontró el hotel con id ${id}`
  });
}

function formatError(message) {
  return JSON.stringify({
    status: 'error',
    message: String(message)
  });
}

module.exports = { formatSuccess, formatNotFound, formatError };
