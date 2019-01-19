<template>
  <div class="home">
      <home-left class="h-left"></home-left>
      <hello-detail></hello-detail>
  </div>
</template>

<script>
import HomeLeft from '@/pages/home/components/HomeLeft'
import HelloWorld from '@/conmom/components/HelloWorld'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeLeft
  }
}
</script>

<style scoped>
.home {
   margin-top:.5rem;
   display: flex
}
.home .h-left{
}
</style>
