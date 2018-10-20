const _ = require('lodash')
const axios = require('axios');
const geocoder = require('../geo-resolve');
const inside = require('point-in-polygon');
const nodexml = require('nodexml');

module.exports = function() {

  const apiKey = '***REMOVED***';

  async function getAlertsLinkData(location) {
    const url = 'https://opendata.aemet.es/opendata/api/avisos_cap/ultimoelaborado/area/' +
      location +
      '?api_key=' + apiKey;
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch(err) {
      console.error(err);
      return null;
    }
  }

  function makePoligon(input) {
    if (!input) {
      return false;
    }
    const output = [];
    const pointList = input.split(' ');
    for(point of pointList) {
      const strCoord = point.split(',');
      output.push([parseFloat(strCoord[0]), parseFloat(strCoord[1])]);
    }
    return output;
  }

  async function getAlertsData(urlData, location) {
    try {
      const resp = await axios.get(urlData);

      let xml = resp.data;
      var position = xml.toString().indexOf('\n');
      if (position != -1) {
         xml = xml.substr(position + 1);
       }

      // TODO:
      // - untar resp.data
      // - process all xml files in resp.data

      const obj = nodexml.xml2obj(xml);

      // return obj.alert;
      const alerts = [];
      let i = 0;
      for(alert of obj.alert) {
        let isAffected = false;
        const alerta = {
          status: alert.status
        };
        for (info of alert.info) {
          if (info.language !== 'es-ES') {
            continue;
          }
          alerta.urgency = info.urgency;
          alerta.event = info.event;
          console.log(alerta.event);
          // alert.type = decodeEventCodeType(info.eventCode);
          // alert.level = decodeEventCodeLevel(info.eventCode);
          alerta.effective = info.effective;
          alerta.onset = info.onset;
          alerta.expires = info.expires;
          console.log(info)
          console.log(info.eventCode)
          alerta.areas = [];
          let areas = info.area;
          // AREA CAN BE AN ARRAY
          if (!Array.isArray(areas)) {
            areas = [areas]
          }
          areas.forEach(function(area) {
            let polygons = area.polygon;
            if (!Array.isArray(polygons)) {
              polygons = [polygons];
            }

            polygons.forEach(function(polygonStr) {
              const polygon = makePoligon(polygonStr);
              alerta.areas.push({polygon: polygon});
              if (inside([location.lat, location.long], polygon)) {
                isAffected = true;
              }
            })
          })

          isAffected = true;

          if (isAffected) {
            alerts.push(alerta);
          }
          // alerts.push(alerta);
        }
      }
      
      return alerts;

    } catch(e) {
      console.error(e);
      return null;
    }
  }

  async function getAlerts(location) {
    let alerts = null;
    console.log(location);
    const linkData = await getAlertsLinkData(location);
    if (linkData) {
      alerts = await getAlertsData(linkData.datos, location);
    }
    return alerts;
  }

  const alertByGeoLoc = async (req, res, next) => {
    const lat = req.params.lat;
    const long = req.params.long;

    const resolved = await geocoder.reverse(lat, long);
    const autcom = await geocoder.administrativeLevel(resolved[0]);
    if (!autcom) {
      console.error('Unable to get administrative level from', resolved[0]);
      // Return error
    }

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
