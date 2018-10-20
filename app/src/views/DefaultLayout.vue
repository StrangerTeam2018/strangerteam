<template lang="pug">
v-app#alertify
  v-toolbar(color='#535354', dark, app)
    v-toolbar-title(style="margin: 0 auto;")
      span  A L E R T I F Y

  v-content
    router-view.view

  template
      v-bottom-nav(:active.sync='activeBtn', :value='showNav', fixed, color='white')
        v-btn(flat, color='rgb(137, 191, 57)', to='/alerts')
          span Alertas
          v-icon fa-skull-crossbones
        v-btn(flat, color='error', to='/request-help')
          span Solicitar Ayuda
          v-icon fa-ambulance
        v-btn(flat, color='rgb(137, 191, 57)', to='/first-aid')
          span Primeros Auxilios
          v-icon fa-medkit

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components : {
  },
  computed : {
    currentRoute() {
      // return this.$router.currentRoute;
    },
  },
  data() {
    return {
      activeBtn : 1,
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