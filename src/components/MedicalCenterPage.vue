<template >

 <div id="imagesofMedicalCenter" class="d-flex justify-content-center"  >
 <img id="0" v-bind:src="require('../../public/images/six.jpg')" role="button" @click="openModal"/>
 <img id="1" v-bind:src="require('../../public/images/two.jpg')" role="button" @click="openModal" />
 <img id="2" v-bind:src="require('../../public/images/three.jpg')" role="button" @click="openModal"/>
 <img id="3" v-bind:src="require('../../public/images/four.jpg')" role="button" @click="openModal"/>


 </div>

<div id="carouselExampleIndicators"  style="display:none;" class="carousel slide carousel-fade" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" id="0"  aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" id="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" id="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" id="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
       <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/six.jpg')"  >
      
    </div>
    <div class="carousel-item">
      <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/two.jpg')" >
    
      
    </div>
    <div class="carousel-item">
      <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/three.jpg')" >
       
    </div>
    <div class="carousel-item">
      <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/four.jpg')" >
       
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    
  </button>
</div>
 
</template>

<script>
export default {
  name: 'TopNavbar',
  props: {
    msg: String
  },
  methods: {
  openModal($event) {
    // `this` inside methods points to the current active instance
    

    var childDivs = document.getElementsByClassName('carousel-indicators')[0].getElementsByTagName('button');

    for(let i=0; i< childDivs.length; i++ )
    {
      if($event.target.id=== childDivs[i].id){
          childDivs[i].classList.add("active");           //class="active"
      }
        }

      document.querySelectorAll('.carousel-item')[$event.target.id].classList.add('active'); //class="active"
    document.getElementById("carouselExampleIndicators").style.display="flex";
    document.getElementById("imagesofMedicalCenter").classList.add("d-none");
  },
  closeModal() {
    var childDivs = document.getElementsByClassName('carousel-indicators')[0].getElementsByTagName('button');
    document.getElementById("carouselExampleIndicators").style.display="none";
    document.getElementById("imagesofMedicalCenter").classList.remove("d-none");
      document.querySelectorAll('.carousel-item').forEach(e=> e.classList.remove('active'));
     for(let i=0; i< childDivs.length; i++ )
    {
     
          childDivs[i].classList.remove("active");           //class="active"
      
        }
  }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imagesofMedicalCenter{
  flex-wrap: wrap;
 padding:10px;
  
  
}

#imagesofMedicalCenter > img{
  width:350px;
  height:300px;
  margin: 10px;
  
  border-radius: 10px;
  

  
}

#carouselExampleIndicators{
 /* background-color: rgba(58, 57, 57, 0.9);*/
  background: rgba(58, 57, 57, 0.14);

backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
}

.carousel-item{

     display: flex;
    justify-content: center;
    
    
}


 



.carousel-indicators [data-bs-target]{
  background-color: darkcyan;
}


.carousel-item > img {
width:60vw;
 height:42vw;
 border:solid rgba(65, 64, 64, 0.123) 1px;
 border-radius: 15px;
 


 
}



@media only screen and (max-width: 850px) {
  .carousel-item > img {
width:100vw;
 height:100vw;

 
}
}

.carousel-control-prev, .carousel-control-next{
  top:30px;
  
  
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' fill='darkcyan' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E");

}

.carousel-control-prev-icon{
   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' fill='darkcyan' viewBox='0 0 16 16'%3E%3Cpath d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'/%3E%3C/svg%3E");
}


.closeButton{
  width: 30px; 
  right:5vw;

  top:4px;
    position: absolute;
    background-color: darkcyan;
}

</style>
