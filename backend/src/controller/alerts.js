const _ = require('lodash')
const axios = require('axios');

const geolib = require('geolib');
const nodexml = require('nodexml');

module.exports = function(config) {
  const AemetAlerts = require('./aemet-alerts.js')(config);
  const NasaAlerts = require('./nasa-alerts.js')(config);

  const alertByGeoLoc = async (req, res, next) => {
    const lat = req.params.lat;
    const long = req.params.long;

    try {
      const aemetAlerts = []; //await AemetAlerts.alertByGeoLoc (lat, long);
      const nasaAlerts = await NasaAlerts.alertByGeoLoc (lat, long);

      const allAlerts = [].concat (aemetAlerts, nasaAlerts);

      // TODO: sort by severity and recentness

      // FIXME! get NASA alerts and normalize them
      return res.json(allAlerts).end();
    }
    catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }

  const mapByGeoLoc = async (req, res, next) => {
    const lat = req.params.lat;
    const long = req.params.long;
    try {
      const mapUrl = await AemetAlerts.mapByGeoLoc (lat, long);
      return res.json(mapUrl).end();
    }
    catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }

  return {
    alertByGeoLoc: alertByGeoLoc,
    mapByGeoLoc: mapByGeoLoc
  }
}
