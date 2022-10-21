<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <div class="contact-info" >Επικοινωνία: +306973398691 / marantosgiannis@gmail.com</div>
 <hr class="header-split">
  <div class="container-fluid">
    
   
    <router-link class="navbar-brand" to="/" > <img id="logo_image" v-bind:src="require('../../public/images/ent_logo_small.png')" ></router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          
        <router-link to="/"  aria-current="page">Αρχική</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/medicalcenter">Το Ιατρείο</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Χειρουργικές Επεμβάσεις
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Χειρουργική στοματικής κοιλότητας, φάρρυγος και λάρυγγος</a></li>
            <li><a class="dropdown-item" href="#">Ενδοσκοπική χειρουργική</a></li>
            <li><a class="dropdown-item" href="#">Ωτοχειρουργική</a></li>
            <li><a class="dropdown-item" href="#">Χειρουργική τραχήλου</a></li>
          </ul>
        </li> -->
         <li class="nav-item">
          
        <router-link to="/surgeries"  >Χειρουργικές Επεμβάσεις</router-link>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Υπηρεσίες Ιατρείου
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Διαγνωστικός Λαρυγγολογικός Έλεγχος</a></li>
            <li><a class="dropdown-item" href="#">Ακοομετρικός Έλεγχος</a></li>
            <li><a class="dropdown-item" href="#">Ενδοσκοπικός Έλεχγος</a></li>
            <li><a class="dropdown-item" href="#">Παιδολαρυγγολογία</a></li>
            
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Επισκέψεις κατ' οίκον</a></li>
          </ul>
        </li> -->
         <li class="nav-item">
          
        <router-link to="/services"  >Υπηρεσίες Ιατρείου</router-link>
        </li>
      <li class="nav-item">
          
        <router-link to="/bio"  >Βιογραφικό</router-link>
        </li>
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
<!--router-view will display the component that corresponds to the url. You can put it anywhere to adapt it to your layout.-->
  <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    
    <component :is="Component" />
  </transition>
</router-view> 
<!-- <router-view/> -->
</template>
<script>
export default {
name: 'TopNavbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dropdown-item:focus{
  background-color:darkcyan;
}

.dropdown-item{

  word-wrap: break-word;
  white-space:normal;
  min-width:250px;
}


.navbar-nav .nav-link:hover{
  color:darkcyan;
 
}

.router-link-exact-active{
  font-weight: bold;
  color:darkcyan;
}

a{color:rgba(0, 0, 0, 0.55);
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#logo_image{
  width: 200px;
  border-radius: 30px;
}

.navbar{
  flex-direction: column;
  padding-right: 10%;

 
    
    

}

@media (min-width: 767px) {

  .navbar{
    padding-left: 10%;
  }
}

.navbar > *:first-child{
  align-self: flex-end;
}

.header-split{
  width:100%;
  background-color: grey;
  margin: 0.5rem;
  
}

.contact-info{
  font-size: 12px;
  
}

.container-fluid{
  padding-top:2px;
}

@media only screen and (max-width: 400px){
  .navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {
    justify-content: center;

  }
}



@media only screen and (max-width:991px){
  .nav-item{
    width:100%;
    border-bottom:1px solid  rgba(51, 50, 50, 0.2);
  }

  .navbar-nav{
  margin-top:0.5rem;

}

#logo_image{
  margin-left:1rem;
}
}

</style>
