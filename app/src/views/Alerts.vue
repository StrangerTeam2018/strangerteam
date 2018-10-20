<template lang="pug">
  v-layout(row, wrap, justify-center)
    v-flex(v-if='loading', xs12, sm12)
      v-card
        v-card-title
          v-flex(text-xs-center)
            v-progress-circular(indeterminate color="#6cf" size="80")

    v-flex(v-else-if='alert.type == "heatwave"', xs12, sm12)
      v-card
        v-img(src='https://media1.giphy.com/media/xT0wlvGLHmojbeu5vq/giphy.gif', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Peligro de ola de calor
                v-chip(color="success" text-color="white") Low

        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info', to='/protect-yourself/heatwave') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.


    v-flex(v-else-if='alert.type == "avalanche"', xs12, sm12)
      v-card
        v-img(src='https://media0.giphy.com/media/ZTjQgJGDiuJZS/giphy.gif', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Peligro de Avalancha
            span.grey--text Aalancha
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info', to='/protect-yourself/avalanche') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else-if='alert.type == "flood"', xs12, sm12)
      v-card
        v-img(src='https://media2.giphy.com/media/u0l83hl7HZYKBNeuGB/giphy.gif', height='200px')
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
        v-img(src='https://media1.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Alerta de lluvias
            span.grey--text Explicación de donde y cuando llueve
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info', to='/protect-yourself/rain') ¿Cómo protegerte?
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
          v-btn(flat, color='info', to='/protect-yourself/wind') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else-if='alert.type == "eruption"', xs12, sm12)
      v-card
        v-img(src='https://media0.giphy.com/media/wJqcBmCtGy8ik/giphy.gif', height='200px')
        v-card-title(primary-title)
          div
            .headline
              div Peligro Erupción Volcánica
            span.grey--text Explicación de donde y cuando las inundaciones
        v-card-actions
          v-btn(flat, color='info') Más información
          v-btn(flat, color='info', to='/protect-yourself/eruption') ¿Cómo protegerte?
          v-spacer
          v-btn(icon, @click='show = !show')
            v-icon {{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}
        v-slide-y-transition
          v-card-text(v-show='show')
            | I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.

    v-flex(v-else, xs12, sm12)
      v-card
        v-img(src='https://media1.giphy.com/media/11sBLVxNs7v6WA/giphy.gif', height='200px')
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
