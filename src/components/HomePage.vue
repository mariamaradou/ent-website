<template>
  <div class="mainPage section-container">
<div>Καλωσήρθατε. Σας ευχαριστώ που επισκέφθεστε την ιστοσελίδα μου.</div>
<div id="main-image">
   <img  v-bind:src="require('../../public/images/dad_surgeon_circle.png')"/>
   </div>
  <!-- <div class="bg-text">
  <h1>Ιωάννης Μαράντος</h1>
  <h2>Χειρουργός Ωτορινολαρυγγολόγος</h2>
  <p>Πανεπιστήμιο Αθηνών</p>
  
</div> -->

   <button type="button" class="btn-close" id="scrollButton" @click="scrollDown"></button>
   
  </div>

</template>

<script>
export default {
  name: 'TopNavbar',
  props: {
    msg: String
  },
  methods:{
  scrollDown(){
    window.scrollBy(0,400);
   
  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;1,300;1,400&display=swap');

.mainPage{
 
  display: flex;
  justify-content: space-between;
 
}
#main-image{
  /* width: 98vw;
  height:35vw; */
  /* filter: blur(6px);
  -webkit-filter: blur(6px); */

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
   /* width:50%;
  height:50%; */
}

#main-image >img {
    
  width:400px;
  height:400px;
}

.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  font-family:  'Roboto Condensed', sans-serif;
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
 
  border-radius: 10px;
  position: relative;
 /* top: 60%;*/
  left: 65%;
  transform: translate(-30%, -50%);
  z-index: 2;
  width: 40vw;
  animation-name: width-adjust;
  animation-duration: 3s;
  padding: 15px;
  text-align: left;
  
}

h1{
  font-size: 2vw;
}
h2{
  font-size: 1.5vw;
}
p{
  font-size: 1.3vw;
  font-weight:200;
}

@keyframes width-adjust {
  from {
    width: 10vw;
  }
  to {
    width: 40vw;}

    
}

#scrollButton{
  position:absolute;
  left:10px;
  bottom:5%;
  background:url("../../public/images/arrowDown.png");
  width:95px;
  height:95px;
  border:0;
  
}

@media only screen and (max-width:600px){
  h1{
  font-size: 5vw;
  
}
h2{
  font-size: 3.8vw;
}
p{
  font-size: 3.5vw;
}

.bg-text{
  position: relative;
  top: 50%;
  left: 60%;
  width:60vw;
  transform: translate(-50%, -50%);
 
  
}

#main-image{
  height:60vw;
  position:relative;
  
  
}

@keyframes width-adjust {
  from {
    width: 10vw;
  }
  to {
    width: 60vw;}

    
}





}

@media only screen and (max-width:1000px){

  #scrollButton{
    display: none;
  }
}











</style>
