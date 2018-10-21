<template lang="pug">
  v-layout(row, wrap, justify-center)
    v-flex(v-if='loading', xs12, sm12)
      v-card
        v-card-title
          v-flex(text-xs-center)
            v-progress-circular(indeterminate color="#6cf" size="80")

    template(v-else, v-for="alert in alerts")
      v-alert-event(:title="$t('alerts.title_' + alert.type + '_alert')", :alert="alert")

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
      }
    })
  }
};
</script>
