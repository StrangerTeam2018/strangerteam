<template lang="pug">
  v-layout.mb-5(row, wrap, justify-center)
    v-flex(v-if='loading', xs12, sm12)
      v-card
        v-card-title
          v-flex(text-xs-center)
            v-progress-circular(indeterminate color="#6cf" size="80")

    v-flex(v-else-if='alert.type == "flood"', xs12, sm12)
      v-card
        v-img(src='https://media2.giphy.com/media/u0l83hl7HZYKBNeuGB/giphy.gif?cid=3640f6095bcb055074624e6c4d1fc437', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div {{ $t('alerts.title_flooding_alert') }}
            span.grey--text Explicación de donde y cuando las inundaciones
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info', to='/protect-yourself/flooding') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else-if='alert.type == "rain"', xs12, sm12)
      v-card
        v-img(src='https://media1.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif?cid=3640f6095bcb45d448522e486feb664f', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Alerta de lluvias
            span.grey--text Explicación de donde y cuando llueve
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.


    v-flex(v-else-if='alert.type == "wind"', xs12, sm12)
      v-card
        v-img(src='https://media0.giphy.com/media/zixAjO2PqwujK/giphy.gif', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Alerta de rachas de vientos fuertes
            span.grey--text Explicación de donde y cuando llueve
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else-if='alert.type == "eruption"', xs12, sm12)
      v-card
        v-img(src='https://media0.giphy.com/media/wJqcBmCtGy8ik/giphy.gif?cid=3640f6095bcb28555758737555c5c7f3', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Peligro Erupción Volcánica
            span.grey--text Explicación de donde y cuando las inundaciones
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else, xs12, sm12)
      v-card
        v-img(src='https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif?cid=3640f6095bcb38e55a6467776f95e749', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div You are safe!
            span.grey--text Estás a salvo, no hay nada de qué preocuparse

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
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
      alert : state => {
        return state.alert
      }
    })
  }
};
</script>
