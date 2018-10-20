<!--
  This is where the main application would reside, it will load one component
  or other depending on the current state of the application:
 -->
<template lang="pug">
  component(:is="layout")
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/views/DefaultLayout'

export default {
  components: {
    DefaultLayout
  },
  computed : {
    ...mapState ({
      layout : state => {
        // NOTE: several layouts can be returned here if needed, we can even
        // show a loading page while we load all the data 
        return DefaultLayout;
      }
    })
  }
}
</script>