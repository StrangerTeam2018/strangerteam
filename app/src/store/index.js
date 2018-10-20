import Vue from 'vue';
import Vuex from 'vuex';
import AuthApi from '../api/auth';

Vue.use(Vuex);

// -------------------------------------------------------------------------
// Initialize types as name->name
// -------------------------------------------------------------------------

const types = {};
const typeNames = [
  'SET_INITIALIZED',
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
      initialized : false,
      isUserLogged : false
    },
  },
  mutations: {
    [types.SET_INITIALIZED] : function (state) {
      state.page.initialized = true;
    },
  },
  actions: {
    // -------------------------------------------------------------------------
    // initialize
    //
    // The idea is to initialize all the data needed to star the application
    // -------------------------------------------------------------------------
    async initialize (store) {
    }
  }
});
