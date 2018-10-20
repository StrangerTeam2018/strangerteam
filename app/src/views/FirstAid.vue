<template lang="pug">
  div.first-aid(style="text-align: center;")
    v-toolbar(color='#89bf39' style="color: white !important")
      v-toolbar-title Primeros Auxilios
      v-spacer
      v-btn(icon='' style="color: white !important")
    v-tabs(v-model='active', color='cyan', dark, slider-color='yellow')
      v-tab
        | ¿Qué ocurre?
      v-tab
        | Todas las técnicas
      v-tab-item(v-for='n in 3', :key='n')
        v-card(flat)
          v-card-text {{ text }}

    v-list(two-line v-if="active === 0")
      template(v-for='(item, index) in cases')
        v-subheader(v-if='item.header', :key='item.header')
          | {{ item.header }}
        v-divider(v-else-if='item.divider', :inset='item.inset', :key='index')
        v-list-tile(v-else, :key='item.title', avatar, @click)
          v-list-tile-avatar
            img(:src='item.avatar')
          v-list-tile-content
            v-list-tile-title(v-html='item.title')
            v-list-tile-sub-title(v-html='item.subtitle')

    v-list(two-line v-if="active === 1")
      template(v-for='(item, index) in techniques')
        v-subheader(v-if='item.header', :key='item.header')
          | {{ item.header }}
        v-divider(v-else-if='item.divider', :inset='item.inset', :key='index')
        v-list-tile(v-else, :key='item.title', avatar, @click='')
          v-list-tile-avatar
            img(:src='item.avatar')
          v-list-tile-content
            v-list-tile-title(v-html='item.title')
            v-list-tile-sub-title(v-html='item.subtitle')
</template>

<script>

export default {
  name: 'FirstAid',
  data() {
    return {
      text: '',
      active: null,
      cases : [
        { header: 'Casos prácticos' },
        {
          avatar: 'https://okdiario.com/img/2017/07/31/maniobra-de-heimlich-655x368.jpg',
          title: 'Una persona se está atragantando',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Maniobra de Heimlich</span></span>`
        },
        {
          avatar: 'https://e.rpp-noticias.io/medium/2015/07/30/1506571.jpg',
          title: 'Una persona se está ahogando',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Reanimación cardiopulmonar</span></span>`
        },
        {
          avatar: 'https://www.desdelaplaza.com/wp-content/uploads/2015/03/desmayo.jpg',
          title: 'Una persona se ha desmayado',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Posición de seguridad</span></span>`
        },
        {
          avatar: 'https://album.mediaset.es/eimg/2017/05/30/0Msko292dNEdmf8SANYkM1.jpg',
          title: 'Una persona tiene síntomas de congelación',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Posición de seguridad</span></span>`
        },
      ],
      techniques : [
        { header: 'Técnicas' },
        {
          avatar: 'https://okdiario.com/img/2017/07/31/maniobra-de-heimlich-655x368.jpg',
          title: 'Maniobra de heimlich',
          subtitle: "<span class='text--primary'>¿Cuándo?</span> &mdash; Si alguien ..."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://t2.uc.ltmcdn.com/images/9/5/5/img_como_actuar_ante_un_desmayo_23559_600.jpg',
          title: 'Desmayos',
          subtitle: "<span class='text--primary'>¿Cuándo?</span> &mdash; Si alguien ..."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://www.ecestaticos.com/imagestatic/clipping/b23/c8d/b23c8d958075f6459c5f7e9f46f90a22/sintomas-de-infarto-senales-que-te-avisan-de-que-estas-a-punto-de-sufrir-un-ataque.jpg?mtime=1428823698',
          title: 'Ataque al corazón',
          subtitle: "<span class='text--primary'>¿Cuándo?</span> &mdash; Si alguien ..."
        },
        { divider: true, inset: true },
      ]
    }
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
};
</script>
