const NodeGeocoder = require('node-geocoder');
const assert = require('assert');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY
}

const geocoder = NodeGeocoder(options);

const decode = function(input) {
  switch(input) {
    case 'Comunidad Valenciana': return 'Comunitat Valenciana';
    case 'Castilla-La Mancha': return 'Castilla - La Mancha';
    case 'Región de Murcia': return 'Murcia, Región de';
    case 'Catalunya': return 'Cataluña';
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