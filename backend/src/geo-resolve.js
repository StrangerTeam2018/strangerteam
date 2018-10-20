const geocoding = require('reverse-geocoding-google');

module.exports = {
  reverse: function (lat, lon, callback) {
    const GoogleApiKey = process.env.GOOGLE_API_KEY;
    assert(GoogleApiKey, 'Missing google api key');

    const config = {
      'latitude': lat,
      'longitude': lon,
      'key': GoogleApiKey
    }

    geocoding.location(config, function(err, data) {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}