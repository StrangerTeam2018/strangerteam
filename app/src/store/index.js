import Vue from 'vue';
import Vuex from 'vuex';
import AlertsApi from '../api/alerts';

Vue.use(Vuex);

// -------------------------------------------------------------------------
// Initialize types as name->name
// -------------------------------------------------------------------------

const types = {};
const typeNames = [
  'SET_INITIALIZED',
  'SET_ALERT',
  'SET_ALERT_MAP',
]
for (const name of typeNames) {
  types[name] = name;
}


export default new Vuex.Store({
  // FIXME! this should be parametrized to be FALSE in production
  strict: true,

  state: {
    // manages current page
    page : {
      initialized : false
    },
    position : {
      lat : 38.928,
      long : 0.322
    },
    alerts : [],
    alertMap: {
      url: ''
    }
  },
  mutations: {
    [types.SET_INITIALIZED] : function (state) {
      state.page.initialized = true;
    },
    [types.SET_ALERT] : function (state, alertData) {
      if (!alertData)
        return

      Vue.set (state, 'alerts', alertData);
    },
    [types.SET_ALERT_MAP] : function (state, mapData) {
      if (!mapData)
        return

      Vue.set (state, 'alertMap', mapData);
    }
  },
  actions: {
    // -------------------------------------------------------------------------
    // initialize
    //
    // The idea is to initialize all the data needed to star the application
    // -------------------------------------------------------------------------
    async initialize (store) {
      let position = await new Promise(function(resolve) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              resolve({ lat: position.coords.latitude, long: position.coords.longitude});
            });
        }
        else {
          resolve({ lat: 42.589, long : -5.57});
        }
      });
      await store.dispatch ('getAlertInfo', position);
      await store.dispatch ('getAlertMap', position);

      store.commit (types.SET_INITIALIZED);
    },

    // -------------------------------------------------------------------------
    // getAlertInfo
    // -------------------------------------------------------------------------
    async getAlertInfo ({commit}, { lat, long }) {
      const data = await AlertsApi.fetchAlert (lat, long);
      commit (types.SET_ALERT, data);
    },

    // -------------------------------------------------------------------------
    // getAlertMap
    // -------------------------------------------------------------------------
    async getAlertMap ({commit}, { lat, long }) {
      const data = await AlertsApi.fetchAlertMap (lat, long);
      commit (types.SET_ALERT_MAP, data);
    }
  }
});
