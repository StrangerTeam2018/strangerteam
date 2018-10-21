<template lang="pug">
  v-flex(xs12, sm12)
    v-card()
      v-img(:src='require(`@/assets/${alert.type}.gif`)', height='200px')

      v-card-title(primary-title,xs12)
        div(xs12 style='display: block; width:100%;')
          .headline(style='float: left;')
            div {{ title }}
          div(style='float: right;')
            v-chip(v-if='alert.level == "low"' color="success" text-color="white" small) low risk
            v-chip(v-else-if='alert.level == "medium"' color="orange" text-color="white" small) medium risk
            v-chip(v-else-if='alert.level == "high"' color="error" text-color="white" small) high risk
        span.grey--text {{ alert.headline }} {{ alert.type }}

      v-card-actions
        v-btn(flat, color='info' :to='"/alert-more-info/" + alert.id') {{ $t('alerts.more_info_text') }}
        v-btn(flat, color='info', :to='"/protect-yourself/" + alert.type') {{ $t('alerts.keep_safe') }}
        v-spacer
        v-btn(icon, @click='show = !show')
          v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}

      v-slide-y-transition
        v-card-text(v-show='show')
          div(v-for='line in alert.more_lines')
            | {{ line }}
</template>

<script>
export default {
  name: 'VAlertEvent',
  data() {
    return {
      show : false
    }
  },
  props: {
    title : String,
    alert : Object
  },
};
</script>