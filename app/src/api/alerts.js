import axios from 'axios';

const KNOWN_ALERTS = ',avalanche,dust,eruption,flood,fog,heatwave,rain,safe,storm,wind,';

export default {
  // async /api/alerts/38.2453898/-0.5611931
  async fetchAlert(latitude, longitude) {
    const ALERT_SAFE = {
      type     : 'safe',
      headline : 'Yay! You are safe!',
    };

    try {
      const response = await axios.get (`/api/alerts/${latitude}/${longitude}`);
      if (response.data.lenght == 0)
        return ALERT_SAFE;

      // filter out unknown alerts and prepare internal alert.id
      const knownAlerts = [];
      for (let i = 0; i < response.data.length; i++) {
        const alert = response.data[i];

        if (KNOWN_ALERTS.indexOf(',' + alert.type + ',') >= 0) {
          alert.id = knownAlerts.length;
          knownAlerts.push (alert);
        }
      }

      // prepare images for the frontend
      return knownAlerts;
    }
    catch(e) {
      console.log (e)
      return ALERT_SAFE;
    }
  },

  async fetchAlertMap(latitude, longitude) {
    try {
      const response = await axios.get (`/api/alerts/map/${latitude}/${longitude}`);
      if (response.data.lenght == 0)
        return { url : '' };

      return response.data;
    }
    catch(e) {
      console.log (e)
      return { url : '' };
    }
  }
}
