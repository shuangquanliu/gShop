<template>
  <div id='title'>
   <FooterGuide/>
     <router-view/>
  </div>

</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #title
    color red

</style>
