<template lang="pug">
  div.first-aid(style="text-align: center;")
    v-toolbar(color='light-green darken-1' style="color: white !important")
      v-toolbar-title First Aid
      v-spacer
      v-btn(icon='' style="color: white !important")
    
    v-tabs(v-model='active', color='light-green lighten-2', dark, slider-color='yellow')
      v-tab
        | Risk situations
      v-tab
        | All first aid tecnhiques

    v-list(two-line v-if="active === 0")
      template(v-for='(item, index) in cases')
        v-subheader(v-if='item.header', :key='item.header')
          | {{ item.header }}
        v-divider(v-else-if='item.divider', :inset='item.inset', :key='index')
        router-link(v-else, :to="{ name: 'technique', params: {id: index.id} }")
          v-list-tile(:key='item.title', avatar, @click)
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

        router-link(v-else, :to="{ name: 'technique', params: {id: index.id} }")
          v-list-tile( :key='item.title', avatar, @click='' )
            v-list-tile-avatar
              img(:src='item.avatar')
            v-list-tile-content
              v-list-tile-title(v-html='item.title')
              v-list-tile-sub-title(v-html='item.subtitle')
</template>

<style>
a {
  text-decoration: none;
  color: rgba(0,0,0,.87);
}
</style>
<script>

export default {
  name: 'FirstAid',
  data() {
    return {
      text: '',
      active: null,
      cases : [
        { header: 'Real situations' },
        {
          avatar: 'https://static.thenounproject.com/png/25487-200.png',
          title: 'A person is choking',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Heimlich maneuver</span></span>`
        },
        {
          avatar: 'https://banner2.kisspng.com/20180403/xte/kisspng-cardiopulmonary-resuscitation-computer-icons-ameri-cdr-5ac3c2ebd8fe37.1164082815227788598888.jpg',
          title: 'A person is drowning',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Cardiopulmonary reanimation</span></span>`
        },
        {
          avatar: 'https://static.thenounproject.com/png/635143-200.png',
          title: 'A person has fainted',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Security position</span></span>`
        },
        {
          avatar: 'https://image.shutterstock.com/mosaic_250/0/0/379710073.jpg',
          title: 'A person has freezing symptoms',
          subtitle: `<span tabindex="0" class="v-chip theme--light"><span class="v-chip__content">Security position</span></span>`
        },
      ],
      techniques : [
        { header: 'All techniques' },
        {
          avatar: 'https://static.thenounproject.com/png/25487-200.png',
          title: 'Heimlich maneuver',
          id: 1
        },
        { divider: true, inset: true },
        {
          avatar: 'https://static.thenounproject.com/png/635143-200.png',
          title: 'Fainting',
          id: 2
        },
        { divider: true, inset: true },
        {
          avatar: 'https://financialtribune.com/sites/default/files/field/image/ordi/12_Heart%20Attacks.png',
          title: 'Heart attack',
          id: 3
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
