const model = require('../models/hotelModel');
const view = require('../views/hotelView');

function handleRequest(rawData) {
  const id = parseInt(String(rawData).trim(), 10);

  if (isNaN(id)) {
    return view.formatError('ID inválido. Ingresa un número.');
  }

  try {
    const hotel = model.getHotelById(id);
    if (hotel) {
      return view.formatSuccess(hotel);
    } else {
      return view.formatNotFound(id);
    }
  } catch (err) {
    return view.formatError(err.message || 'Error en el servidor.');
  }
}

module.exports = { handleRequest };
