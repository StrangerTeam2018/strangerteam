import axios from 'axios';


function delay (data) {
  return new Promise (function (resolve, reject) {
    setTimeout (function () { resolve (data) }, 10);
  })
}


export default {
  // async /api/alerts/38.2453898/-0.5611931
  async fetchAlert(latitude, longitude) {
    try {
      // const response = await axios.post (`/api/alerts/${latitude}/${longitude}`);
      // FIXME!
      const response = {
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
      return await delay (response.data);
    }
    catch(e) {
      return false;
    }
  }
}