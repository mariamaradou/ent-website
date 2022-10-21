<template>
  <div class="mainPage section-container">
    <div class="welcome">
      <div class="welcome-message">
        <h3>Καλωσήρθατε</h3>
        <h4>Σας ευχαριστώ που επισκέφθεστε την ιστοσελίδα μου.</h4>
      </div>
      <!-- <p>Tο πρωί θα με βρείτε στο γραφείο μου στο Ιατρικό Κέντρο Αθηνών στο Μαρούσι ενώ το απόγευμα εργάζομαι στο ιατρείο μου στην Νέα Ερυθραία</p> -->
      <p>
        Το πρωί δέχομαι επισκέψεις κατόπιν ραντεβού είτε στο Ιατρικό Κέντρο
        Αθηνών στο Μαρούσι είτε στο ιατρείο μου στην Νέα Ερυθραία.
      </p>
      <p>
        Το απόγευμα δέχομαι επισκέψεις, επίσης με ραντεβού, στο ιατρείο μου στη
        Νέα Ερυθραία.
      </p>
      <p>
        Για να κλείσετε ραντεβού, μπορείτε να με καλέσετε στο
        <a href="#contact" id="center-phone_anchor" @click="markContact($event)"
          >σταθερό</a
        >
        ή
        <a href="#contact" id="cellphone_anchor" @click="markContact($event)"
          >κινητό</a
        >.
      </p>
      <div class="signature">
        <p>Ιωάννης Μαράντος</p>
        <p>Χειρουργός Ωτορινολαρυγγολόγος</p>
        <p>Επιστημονικός Συνεργάτης Ιατρικού Κέντρου Αθηνών</p>
      </div>
    </div>
    <div id="main-image">
      <img v-bind:src="require('../../public/images/dad_surgeon_circle.png')" />
    </div>
    <!-- <div class="bg-text">
  <h1>Ιωάννης Μαράντος</h1>
  <h2>Χειρουργός Ωτορινολαρυγγολόγος</h2>
  <p>Πανεπιστήμιο Αθηνών</p>
  
</div> -->

    <!-- <button type="button" class="btn-close" id="scrollButton" @click="scrollDown"></button> -->
  </div>
</template>

<script>
export default {
  name: "TopNavbar",
  props: {
    msg: String,
  },
  methods: {
    markContact(event) {
      var cellphone = document.getElementById("cellphone");
      var center_phone = document.getElementById("center-phone");
      console.log(event.currentTarget.id);
      if (event.currentTarget.id === "cellphone_anchor") {
        cellphone.classList.add("highlighted");
        setTimeout(() => {
          cellphone.classList.remove("highlighted");
        }, 2000);
      } else {
        center_phone.classList.add("highlighted");
        setTimeout(() => {
          center_phone.classList.remove("highlighted");
        }, 2000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;1,300;1,400&display=swap");

.mainPage {
  padding-top: 60px;
  padding-bottom: 60px;
}
.mainPage {
  display: flex;
  justify-content: space-between;
}

.mainPage > div:first-child {
  margin-right: 30px;
}
#main-image {
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

#main-image > img {
  width: 400px;
  height: 400px;
  border: 16px double #f0e9e9b5;
  border-radius: 400px;
}

.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  font-family: "Roboto Condensed", sans-serif;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
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

h1 {
  font-size: 2vw;
}
h2 {
  font-size: 1.5vw;
}

h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  font-weight: 550;
  color: #000000c4;
}

.welcome-message {
  margin-bottom: 1.5rem;
}

.signature {
  margin-top: 50px;
}

/* .signature p:first-child{
  font-weight: 700;
} */

.signature p:not(:first-child) {
  margin-bottom: 0.5rem;
  font-style: italic;
  color: #4f5153;
}

#scrollButton {
  /* position:absolute;
  left:10px;
  bottom:5%;
  background:url("../../public/images/arrowDown.png");
  width:95px;
  height:95px;
  border:0; */
  cursor: pointer;
}

a, a:hover{
  color: #048b80;
}



@media only screen and (max-width: 767px) {
  .mainPage {
    flex-direction: column;
  }
  .mainPage > div {
    width: 100%;
  }

  .welcome {
    margin-bottom: 40px;
  }

  .bg-text {
    position: relative;
    top: 50%;
    left: 60%;
    width: 60vw;
    transform: translate(-50%, -50%);
  }

  #main-image {
    position: relative;
  }

  #main-image > img {
    height: 100%;
    width: 100%;
  }
}

/* @media only screen and (max-width:1000px){

  #scrollButton{
    display: none;
  }
} */
</style>
