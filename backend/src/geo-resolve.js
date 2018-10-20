const NodeGeocoder = require('node-geocoder');
const assert = require('assert');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY
}

const geocoder = NodeGeocoder(options);

const decode = function(input) {
  switch(input) {
    case 'Andalucía': return 'Andalucía';
    case 'Aragón': return 'Aragón';
    case 'Canarias': return 'Canarias';
    case 'Cantabria': return 'Cantabria';
    case 'Castilla-La Mancha': return 'Castilla - La Mancha';
    case 'Castilla y León': return 'Castilla y León';
    case 'Catalunya': return 'Cataluña';
    case 'Ceuta': return 'Ceuta';
    case 'Comunidad de Madrid': return 'Madrid, Comunidad de';
    case 'Comunidad Valenciana': return 'Comunitat Valenciana';
    case 'Euskadi': return 'País Vasco';
    case 'Extremadura': return 'Extremadura';
    case 'Galicia': return 'Galicia';
    case 'Islas Baleares': return 'Ballears, Illes';
    case 'La Rioja': return 'Rioja, La';
    case 'Melilla': return 'Melilla';
    case 'Principado de Asturias': return 'Asturias, Principado de';
    case 'Región de Murcia': return 'Murcia, Región de';
    default:
  }
  console.log('Unknown administrative level', input);
  return false;
}

module.exports = {
  reverse: async function(lat, lon) {
    assert(process.env.GOOGLE_API_KEY, 'Missing google api key');
    return await geocoder.reverse({ lat: lat, lon: lon})
  },
  administrativeLevel: function(res) {
    const levels = res.administrativeLevels
    if (levels) {
      for(const level of Object.keys(levels)) {
        const decoded = decode(levels[level]);
        if (decoded) {
          return decoded;
        }
      }
    }

    if (res.countryCode === 'ES') {
      return 'España';
    }

    return false;
  }
}