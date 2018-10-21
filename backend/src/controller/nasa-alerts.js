const _ = require('lodash')
const axios = require('axios');
//
// Links:
//   - https://eonet.sci.gsfc.nasa.gov/howto
//   - https://eonet.sci.gsfc.nasa.gov/docs/v2.1
//
module.exports = function() {
  const NASA_EVENT_DAYS = 14;

  // ---------------------------------------------------------------------------
  // alertByGeoLoc
  //
  // Return normalized alerts from NASA
  // ---------------------------------------------------------------------------
  async function alertByGeoLoc(lat, long) {
    try {
      const limit = 20;
      const apiUrl = `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open&days=${NASA_EVENT_DAYS}&limit=${limit}`;
      const events = await axios.get (apiUrl);
      const eventData = events.data.events;

      // normalize nasa events
      const normalized = [];
      for (const event of eventData) {
        let eventType = null;
        let nameLower = event.title.toLowerCase();

        // normalize event type
        if (nameLower.indexOf('volcano') >= 0)  { eventType = 'eruption'; }
        if (nameLower.indexOf('flood') >= 0)    { eventType = 'flood'; }
        if (nameLower.indexOf('ice') >= 0)      { eventType = 'coldwave'; }
        if (nameLower.indexOf('wildfire') >= 0) { eventType = 'wildfire'; }

        if (eventType === null)
          continue;

        normalized.push ({
          type : eventType,
          level : 'high',
          headline : event.title,
          more_lines : [event.description]
          // area
        })
      }

      return normalized;
    } catch (err) {
      console.log (err);
      return null;
    }
  }

  return {
    alertByGeoLoc: alertByGeoLoc
  }
}
