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
    alert : {
      type : 'flood', // FIXME!
      where : { lat : 38.928, long : 0.322 },
      brief : 'Está todo inundado!! Vamos a morir todos!',
      description : 'this is what needs to be displayed on the other page'
    }
  },
  mutations: {
    [types.SET_INITIALIZED] : function (state) {
      state.page.initialized = true;
    },
    [types.SET_ALERT] : function (state, alertData) {
      if (!alertData)
        return

      Vue.set (state, 'alert', alertData);
    }
  },
  actions: {
    // -------------------------------------------------------------------------
    // initialize
    //
    // The idea is to initialize all the data needed to star the application
    // -------------------------------------------------------------------------
    async initialize (store) {
      await store.dispatch ('getAlertInfo', { lat: 42.589, long : -5.57});
      //await store.dispatch ('getAlertInfo', { lat: 42.99, long : -8.28});
      store.commit (types.SET_INITIALIZED);
    },

    // -------------------------------------------------------------------------
    // getAlertInfo
    // -------------------------------------------------------------------------
    async getAlertInfo ({commit}, { lat, long }) {
      const data = await AlertsApi.fetchAlert (lat, long);
      commit (types.SET_ALERT, data);
    }

  }
});
