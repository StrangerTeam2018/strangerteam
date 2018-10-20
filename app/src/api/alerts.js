import axios from 'axios';


function delay (data) {
  return new Promise (function (resolve, reject) {
    setTimeout (function () { resolve (data) }, 1500);
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
          where : { lat : 38.928, long : 0.322 },
          brief : 'Está todo inundado!! Vamos a morir todos!',
          description : 'this is what needs to be displayed on the other page'
        }
      };
      return await delay (response.data);
    }
    catch(e) {
      return false;
    }
  }
}