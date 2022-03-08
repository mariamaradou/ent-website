<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <router-link class="navbar-brand" to="/" style="color:black; font-weight:bold;">Ιατρείο Ιωάννης Μαράντος</router-link>
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
        <li class="nav-item dropdown">
          <a class="dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Παθήσεις
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">παθηση</a></li>
            <li><a class="dropdown-item" href="#">αλλη παθηση</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
<router-view/>
</template>
<script>
export default {
name: 'TopNavbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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

 .container-fluid{                             /*   to menou na einai pio aristera kai na mi pigainei katw se merikes suskeues */
  padding-right: var(--bs-gutter-x, 0.5rem);
}

.ms-auto{
  padding-right: 100px;
}

</style>
