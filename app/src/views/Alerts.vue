<template lang="pug">
  v-layout(row, wrap, justify-center)
    v-flex(v-if='loading', xs12, sm12)
      v-card
        v-card-title
          v-flex(text-xs-center)
            v-img(src="https://i.pinimg.com/originals/e9/e9/90/e9e99039ad9f8445e9b747f8e0b159ab.gif" height="200") 
            p(style="margin-top: 2rem") Loading ...
            <!--v-progress-circular(indeterminate color="#6cf" size="80")-->

    template(v-else, v-for="alert in alerts")
      v-alert-event(:title="$t('alerts.title_' + alert.type + '_alert')", :alert="alert", :alertMap="alertMap")

</template>

<script>
import { mapState } from 'vuex'
import VAlertEvent from '@/components/VAlertEvent.vue'

export default {
  name: 'Dashboard',
  components : {
    VAlertEvent
  },
  data() {
    return {
      show : false
    }
  },
  computed : {
    ...mapState ({
      loading : state => {
        return !state.page.initialized
      },
      alerts : state => {
        return state.alerts
      },
      alertMap : state => {
        return state.alertMap
      }
    })
  }
};
</script>
