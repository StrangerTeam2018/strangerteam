<template lang="pug">
v-app#alertify
  v-toolbar(color='blue darken-1', dark, app)
    v-toolbar-title
      v-icon.mr-3 fa-skull-crossbones
      span  Alertify: You are not alone!

    // v-text-field.hidden-sm-and-down(flat, solo-inverted, hide-details, prepend-inner-icon='search', label='Search')
    // v-spacer
    // v-btn(icon, flat)
    //   v-icon fa-door-open

  v-content
    router-view.view

  template
      v-bottom-nav(:active.sync='activeBtn', :value='showNav', absolute, color='transparent')
        v-btn(flat, color='teal')
          span Alertas
          v-icon fa-skull-crossbones
        v-btn(flat, color='error')
          span Pedir Ayuda!
          v-icon fa-ambulance
        v-btn(flat, color='info')
          span Primeros Auxilios
          v-icon fa-medkit
</template>

<script>
import { mapState } from 'vuex'
import AppSidebar from '@/components/AppSidebar';

export default {
  name: 'App',
  components : {
    AppSidebar
  },
  computed : {
    currentRoute() {
      // return this.$router.currentRoute;
    },
  },
  data() {
    return {
      activeBtn : 1, // FIXME!
      showNav : true,
      title: this.$t('app.title')
    };
  },
};
</script>

<style lang="stylus" scoped>
.logo
  text-align     : left
  font-family    : Serif
  font-size      : 24pt
  font-weight    : bold
  letter-spacing : 8px
  color          : black
  text-shadow    : 3px 2px 1px #aaa
  margin-top     : -3px
</style>