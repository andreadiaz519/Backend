const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'hotels.json');

function getHotelById(id) {
  try {
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    const hotels = JSON.parse(content);
    return hotels.find(h => h.id === id) || null;
  } catch (err) {
    throw new Error('Error al leer el archivo hotels.json');
  }
}

module.exports = { getHotelById };
