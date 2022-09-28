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
  font-size: 1rem;
  outline: none;
  
  /* color: darkcyan; */

}

p{
  font-size: 15px;
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
    margin-bottom: 40px;
    border-bottom: 1px solid #728686;
    width: 100%;
    text-align: left;
    color: rgb(65, 64, 64);
}

.highlighted{
  color:red;
  animation-name: mymove;
  animation-duration: 2s;
animation-iteration-count: 1;
}

@keyframes mymove {
  
  50% {
    text-shadow: 0px 1px 1rem #f30000;
  }
}

</style>
