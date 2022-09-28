<template  >
<div id="medicalCenter">
  <div id="equipment" class="section-container">
    <h3>Το Ιατρείο</h3>
    <p>To ιατρείο βρίσκεται στην Αναξαγόρα 5, κάτω από την Λεωφόρο Ελευθερίου Βενιζέλου. Βρίσκεται στον 2ο όροφο του κτιρίου, το οποίο διαθέτει ασανσέρ.</p>
    <p> Ο χώρος του ιατρείου είναι εξοπλισμένος με τα κατάλληλα εργαλεία για τον σωστή εξέταση του ασθενούς. 
    Με τον ΩΡΛ εξοπλισμό πραγματοποιούνται οι ακόλουθες εξετάσεις:
    </p>
    <ul >
      <li>Ενδοσκόπηση ώτων, ρινός, ρινοφάρυγγα, φάρυγγα και λάρυγγα</li>
      <li> Τυμπανομετρία </li>
      <li> Έλεγχο ρινορραγίας </li>
      <li> Video καταγραφή ενδοσκοπικών δεδομένων </li>
      
    </ul>
  </div>
<!-- <hr> -->
 <div id="imagesofMedicalCenter" class="imagesofMedicalCenter d-flex justify-content-space-between section-container"  >
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
    
    <div class="carousel-item" id="carousel1">
       <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/six.jpg')"  >
      
    </div>
    <div class="carousel-item" id="carousel2" >
      <button class="closeButton btn-close"  @click="closeModal">
     
     </button>
      <img v-bind:src="require('../../public/images/two.jpg')" >
    
      
    </div>
    <div class="carousel-item" id="carousel3">
      <button class="closeButton btn-close"  @click="closeModal">
  
     </button>
     
      <img v-bind:src="require('../../public/images/three.jpg')" >
       
    </div>
    <div class="carousel-item" id="carousel4">
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
     document.getElementById("equipment").classList.add("d-none");
  },
  closeModal() {
    var childDivs = document.getElementsByClassName('carousel-indicators')[0].getElementsByTagName('button');
    document.getElementById("carouselExampleIndicators").style.display="none";
    document.getElementById("imagesofMedicalCenter").classList.remove("d-none");
     document.getElementById("equipment").classList.remove("d-none");
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
 /* background-color: rgb(248, 249, 250); */
 background-color:rgba(187, 232, 232, 0.2);
  
  
}

#imagesofMedicalCenter > img{
  width:200px;
  height:200px;
  margin: 10px;
  
  border-radius: 3px;
  box-shadow: 5px 5px 5px lightgray;
  

  
}

#imagesofMedicalCenter > img:hover{
  transition: opacity 0.5s;
  opacity: 0.8;
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
    background-repeat: no-repeat;
   background-size: cover;
   
   /* opacity: 0.2; */
   
    
}

.carousel-item::before{
  content: "";
    
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
     
}

.carousel-item img{
  position:relative;
}

#carousel1::before{
   
 
  background-image:url('../../public/images/six - blurred.jpg');
  
  

}
#carousel2::before{
  background-image:url('../../public/images/two - blurred.jpg')
}
#carousel3::before{
  background-image:url('../../public/images/three - blurred.jpg')
}
#carousel4::before{
  background-image:url('../../public/images/four - blurred.jpg');
}

 



.carousel-indicators [data-bs-target]{
  background-color: rgb(106, 110, 110);
}


.carousel-item > img {
width:fit-content;
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
  top:30%;
  height:40%;
  
  
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' fill='black' viewBox='0 0 16 16'%3E%3Cpath d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'/%3E%3C/svg%3E");

}

.carousel-control-prev-icon{
   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' fill='black' viewBox='0 0 16 16'%3E%3Cpath d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'/%3E%3C/svg%3E");
}


.closeButton{
  width: 30px; 
  right:6vw;
  margin-top:10px;
  top:4px;
  z-index: 1;
  position: absolute;
  background: url("../../public/images/closeButton.png");
    
}

.btn-close{
  height:1.8em;
 
  
}



ul{

  margin:10px;
  padding-left: 0px;
  margin-left: 25px;
}
li{
  

  background-repeat: no-repeat;
    font-size: 15px;
   padding-bottom: 10px;
}

li::marker{
  color: darkcyan;
}

p{padding-left:10px;}

hr{
  margin:0;
}

#imagesofMedicalCenter{
  justify-content: center;
}

</style>
