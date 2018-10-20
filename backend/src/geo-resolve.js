const NodeGeocoder = require('node-geocoder');
const assert = require('assert');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY
}

const geocoder = NodeGeocoder(options);

module.exports = {
  reverse: function (lat, lon, callback) {
    assert(process.env.GOOGLE_API_KEY, 'Missing google api key');

    const config = {
      lat: lat,
      lon: lon
    }

    geocoder
      .reverse(config, function (err, res){
        if (err) {
          console.log('ERROR');
          console.error(err);
          callback(err);
        } else {
          console.log(res);
          callback(undefined, res);
        }
      });
  }
}