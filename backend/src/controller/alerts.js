const axios = require('axios');

module.exports = function() {

  const apiKey = '***REMOVED***';

  async function getAlertsLinkData(location) {
    const url = 'https://opendata.aemet.es/opendata/api/avisos_cap/ultimoelaborado/area/' +
      location +
      '?api_key=' + apiKey;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch(e) {
      console.error(e);
      return null;
    }
  }

  async function getAlertsData(urlData) {
    try {
      const resp = await axios.get(urlData, { responseType: 'stream' });


      // with tar-stream
      var tar = require('tar-stream')

      var extract = tar.extract();
      extract.on('entry', function(header, stream, callback) {
          // make directories or files depending on the header here...
          // call callback() when you're done with this entry
      });

      resp.data.pipe(extract);

      extract.on('finish', function() {
          console.log('done!')
      });

      // TODO:
      // - untar resp.data
      // - process all xml files in resp.data

      return [];

    } catch(e) {
      console.error(e);
      return null;
    }
  }

  async function getAlerts(location) {
    let alerts = null;
    const linkData = await getAlertsLinkData(location);
    if (linkData) {
      alerts = await getAlertsData(linkData.datos);
    }
    return alerts;
  }

  const alertByGeoLoc = async (req, res, next) => {
    const lat = req.params.lat;
    const long = req.params.long;

    const autcom = 'Comunitat Valenciana'; // TODO
    const autcomToAEMETCode = {
      'España': 'esp',
      'Andalucía': 61,
      'Aragón': 62,
      'Asturias, Principado de': 63,
      'Ballears, Illes': 64,
      'Ceuta': 78,
      'Canarias': 65,
      'Cantabria': 66,
      'Castilla y León': 67,
      'Castilla - La Mancha': 68,
      'Cataluña': 69,
      'Comunitat Valenciana': 77,
      'Extremadura': 70,
      'Galicia': 71,
      'Madrid, Comunidad de': 72,
      'Melilla': 79,
      'Murcia, Región de': 73,
      'Navarra, Comunidad Foral de': 74,
      'País Vasco': 75,
      'Rioja, La': 76
    }

    const alerts = await getAlerts(autcomToAEMETCode[autcom]);

    return res.json(alerts).end();
  }

  return {
    alertByGeoLoc: alertByGeoLoc
  }
}
