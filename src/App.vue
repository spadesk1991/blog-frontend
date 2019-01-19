<template>
  <div id="app">
    <base-header></base-header>
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

</style>
