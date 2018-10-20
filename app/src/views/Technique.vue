<template lang="pug">
  v-card
    v-img(src='https://2.bp.blogspot.com/-bUGWAPSSs-s/Vup0oMttlDI/AAAAAAAABbk/Axz1k4C0FEspjyYvsPwtEAfxYLcauZDGg/w1200-h630-p-k-no-nu/maniobra%2Bde%2Bheimlich.jpg', height='200px')
    v-card-title(primary-title='')
      div
        .headline Maniobra de Heimlich
    
      iframe(width='560', height='315', src='https://www.youtube.com/embed/PNTP8VKGou8', frameborder='0', allow='autoplay; encrypted-media', allowfullscreen='')
    
</template>

<script>


export default {
  name: 'Technique',
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.$route.params.title;
  }
};
</script>
<style>
</style>
