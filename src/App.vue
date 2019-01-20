<template>
  <div id="app">
    <base-header class="b-header"></base-header>
    <div>
     <router-view/>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/conmom/components/Header'
export default {
  name: 'App',
  components: {
    BaseHeader
  }
}
</script>

<style>
#app{
    background: gray;
    /* height: 100vh; */
    color:rgb(241, 238, 232);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }

#app .b-header {
  position:sticky;
  z-index: 10;
  top:0
  }

</style>
