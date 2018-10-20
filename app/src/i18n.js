import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Translations from './i18n/index.js'

Vue.use(VueI18n);

export default new VueI18n({
  locale : 'es', // set locale
  messages : Translations, // set locale messages
});
