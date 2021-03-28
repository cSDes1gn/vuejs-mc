<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="container">
    <page-home/>
  </div>
</template>

<script>
import PageHome from '@/components/PageHome.vue'

export default {
  name: 'App',
  components: {
    PageHome
  }
}
</script>

<style>
@import "assets/style.css";
</style>
