<template lang="pug">
  v-flex(v-if="alert !== null")
    v-toolbar(color='light-green darken-1' style="color: white !important")
      v-toolbar-title {{ $t('alerts.title_' + alert.type + '_alert') }}
      v-spacer
      v-btn(icon='' style="color: white !important")

    v-card(style="text-align: left")
      v-card-text
        div(v-for="line in alert.more_lines")
          | {{ line }}

      v-card-text(id="map")
        | this is the map

</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex'

export default {
  name: 'AlertMoreInfo',
  data() {
    return {
      id : 0
    }
  },
  computed : {
    alert () {
      if (this.$store.state.alerts.length == 0)
        return null;
      return this.$store.state.alerts[this.id]
    }
  },

  created() {
    this.id = this.$route.params.id || 0;
  }
};
</script>
<style>
</style>