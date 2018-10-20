<template lang="pug">
  v-card
    v-img(src='https://2.bp.blogspot.com/-bUGWAPSSs-s/Vup0oMttlDI/AAAAAAAABbk/Axz1k4C0FEspjyYvsPwtEAfxYLcauZDGg/w1200-h630-p-k-no-nu/maniobra%2Bde%2Bheimlich.jpg', height='200px')
    
    v-card-title(primary-title='')
      div(class="headline") Heimlich maneuver
      
    .video__container()
      iframe(width='560', height='315', src='https://www.youtube.com/embed/7CgtIgSyAiU', frameborder='0', allow='autoplay; encrypted-media', allowfullscreen='' style="display: block;margin: 0 auto; max-width: 80%;")

    
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
