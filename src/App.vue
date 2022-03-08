<template>
  
  <TopNavbar />
  
  <FooterMenu/>
</template>

<script>

import TopNavbar from './components/TopNavbar.vue'

import FooterMenu from './components/FooterMenu.vue'

export default {
  name: 'App',
  
  components: {
    TopNavbar,
   
    FooterMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: darkcyan;

}
</style>
