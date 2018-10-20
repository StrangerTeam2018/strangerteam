import '@babel/polyfill';
import Vue from 'vue';

import './plugins/vuetify';
import MainApp from './views/MainApp.vue';
import i18n from './i18n';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(MainApp),
  created() {
    // initialize store
    this.$store.dispatch('initialize', { lat: 0, long : 0 });
 }
}).$mount('#app');
