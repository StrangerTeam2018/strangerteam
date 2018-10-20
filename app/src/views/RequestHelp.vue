<template lang="pug">
  div.request-help(style="text-align: center;")
    v-toolbar(color='#89bf39' style="color: white !important;")
      v-toolbar-title Solicitar Ayuda
      v-spacer
    v-btn(color="error" style="margin-top: 30%;" large href="tel:000") LLAMAR 112
</template>

<script>


export default {
  name: 'RequestHelp',
  data() {
    return {
    }
  }
};
</script>
<style>
  .v-toolbar__title {
    margin: 0 auto;
    display: block;
    width: 100%;
  }
</style>
