<template>

<div id="cv" class="section-container" >
    <h3>Βιογραφικό</h3>
<div id="image_profile" >
<img  name="profile" v-bind:src="require('../../public/images/marantos-ioannis-profile.jpg')">
<p><i>ΩΡΛ, Επιστημονικός Συνεργάτης, Ιατρικό Κέντρο Αθηνών</i></p>
</div>
<div>
<hr>
</div>
<div id="details" >

<p style="padding-top:10px"> Ονομάζομαι Ιωάννης Μαράντος.</p>
   <p> Είμαι απόφοιτος της Ιατρικής Σχολής Αθηνών. </p>
<p> Ειδικεύτηκα στην ωτορινολαρρυγολογία στο Λαϊκό Νοσοκομείο Αθηνών. </p>
<p> Έχω συμμετάσχει σε σεμινάρια και συνέδρια πάνω στην ωτορινολαρρυγολογία στην Ελλάδα και στο εξωτερικό.</p>
<p> Από το 2001 μέχρι το 2008, ανέλαβα ως επιμελητής στο Λαρυγγολογικό Τμήμα του <span><a href="https://www.iatriko.gr/el/iatriko-kentro-athinon?cl=610" target="_blank">Ιατρικού Κέντρου Αθηνών</a></span>.
    Έκτοτε, παραμένω εκεί ως επιστημονικός συνεργάτης. </p>


</div>
</div>
</template>

<script >

export default {
    
    name: "BioPage"
}
</script>

<style scoped>


a{
    color:#048b80;
}

p{
    color:rgba(0, 0, 0, 0.7);
    padding-left: 10px;
    overflow-wrap: break-word;
    width:100%;
   
}



#cv{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

   
    
    
}

hr{
    display: none;
}



hr{
    width:100%;
  background-color: grey;
  margin: 0.5rem;
}

#details{
    flex:50%;
    margin: 20px;
}

img{
    padding:10px;
    width:fit-content;
    border-radius: 30px;
}

#image_profile{
    display: flex;
    flex-direction: column;

  
   
}

#image_profile p{
    max-width:280px;
}

@media screen and (max-width: 800px) {

    hr{
        display: block;
    }

    #cv{
        flex-direction: column;
    }

    #image_profile{
        align-self: center;
    }

    #details{
        margin:auto;
    }
    
}



</style>