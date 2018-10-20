import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    app: {
      title: 'Alertify',
    },
  },
  es: {
    app: {
      title: 'Alertify',
    },
  },
};

export default new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
});
