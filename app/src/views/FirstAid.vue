<template lang="pug">
  div.first-aid(style="text-align: center;")
    v-toolbar(color='#89bf39' style="color: white !important")
      v-toolbar-title Primeros Auxilios
      v-spacer
      v-btn(icon='' style="color: white !important")
        v-icon fa-search

    v-list(two-line='')
      template(v-for='(item, index) in items')
        v-subheader(v-if='item.header', :key='item.header')
          | {{ item.header }}
        v-divider(v-else-if='item.divider', :inset='item.inset', :key='index')
        v-list-tile(v-else='', :key='item.title', avatar='', @click='')
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
      items : [
        { header: '¿Qué ocurre?' },
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
  }
};
</script>
