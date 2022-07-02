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
  font-size: 0.9rem;
  outline: none;
  
  /* color: darkcyan; */

}

.section-container{
   padding: 30px 10% 30px 10%;
}

.btn-close:focus,.btn-close:active {
   outline: none ;
   box-shadow: none;
   opacity:0.3;
  
}

.navbar-toggler:active, .navbar-toggler:focus{
  outline: none ;
   box-shadow: none;

}

.btn-close:hover{
   opacity:0.75;
}



h3{
    padding: 10px;
    width: 100%;
    text-align: center;
    font-weight:600;
    color: rgb(65, 64, 64);
}


</style>
