<template>
<div class='section-container'>
  <h3>Υπηρεσίες Ιατρείου</h3>
  <p>Οι υπηρεσίες που προσφέρει το ιατρείο είναι οι ακόλουθες:</p>
  <li>Διαγνωστικός Λαρυγγολογικός Έλεγχος</li>
  <li>Ακοομετρικός Έλεγχος</li>
  <li>Ενδοσκοπικός Έλεχγος</li>
  <li>Παιδολαρυγγολογία</li>
</div>
</template>


<script>
export default {
  name: 'ServicesPage',
 
}
</script>

<style scoped>
 li{
    font-size: 15px;
 }

 li:not(:last-child){
    padding-bottom: 10px;
 }
</style>
