import axios from 'axios';

export default {
  // async /api/alerts/38.2453898/-0.5611931
  async fetchAlert(latitude, longitude) {
    try {
      const response = await axios.get (`/api/alerts/${latitude}/${longitude}`);
      if (response.data.lenght == 0)
        return { type : 'safe' };

      return response.data;

      // try to get the level with the highest alert level
      let result = response.data[0];

      for (let i = 0; i < response.data.lenght; i++) {
        const level = response.data[i].level;

        if (
          (level == 'high')
          || ((level == 'medium') && (result.level == 'low'))
          || ((level == 'low') && (result.level == 'low'))
        ) {
          result = response[i];
        }
      }
      result.area = [];

      return result;
/*        "event": "Aviso de polvo en suspensión de nivel verde",
        "headline": "Aviso de polvo en suspensión de nivel verde. CCAA",
        "level": "low",
        "more_lines": [],
        "status": "Actual",
        "type": "dust",
        "urgency": "Future",
        "when": {
            "activated": "2018-10-22T00:00:00+02:00",
            "expires": "2018-10-22T23:59:59+02:00"
        }
    }*/

      response = {
        data : {
          type : 'flood',
          level : 'high',
          when : {
            activated : 'iso-date',
            expires : 'iso-date'
          },
          headline : 'Está todo inundado!! Vamos a morir todos!',
          more_info : [
            // ... strings ...
          ],
          area : [],
        }
      };
      return response.data;
    }
    catch(e) {
      console.log (e)
      return { type : 'safe' };
    }
  }
}