<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <!-- <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Ιατρειο Ιωαννης Μαραντος
          </h6>
        
        </div> -->

          <!-- Grid column -->
          <div id="contact" class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Επικοινωνια</h6>
            <p id="center-phone">Σταθερό: 210 6252299</p>
            <p id="cellphone">Κινητό: +306973398691</p>
            <a href="mailto:marantosgiannis@gmail.com">
              <p id="btnOutlook">Email: <span>marantosgiannis@gmail.com</span></p>
            </a>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Διευθυνση Ιατρειου</h6>
            <a
              class="text-reset"
              href="https://goo.gl/maps/L31HUFMjqgBK1sgXA"
              target="blank"
            >
              Αναξαγόρα 5, Νέα Ερυθραία</a
            >
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.039600199595!2d23.81797692921256!3d38.08997659873148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfda622458bb66988!2zzpzOsc-BzqzOvc-Ezr_PgiDOmc-JzqzOvc69zrfPgg!5e0!3m2!1sen!2sgr!4v1648639714647!5m2!1sen!2sgr"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
    <hr class="footer-split" />
    <section class="designer-info">
      <a href="https://www.linkedin.com/in/maria-maradou/" target="_blank">
        <span>
          © 2022 Κατασκευή Ιστοσελίδας - <strong>mariamaradou</strong></span
        ></a
      >
    </section>
  </footer>
</template>

<script>
export default {
  name: "TopNavbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #6c757d;
  text-decoration: none;
}

a:hover{
  color: #6c757d;

}

h6 {
  letter-spacing: 1px;
}

#map {
  padding-bottom: 10px;
}

.footer-split {
  background-color: grey;
}

.designer-info {
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
}

@media (min-width: 767px) {
footer {
  
  
  padding-left: 10%;
  padding-right: 10%;
  }
}

footer section {
  padding-top: 1px;
}

#btnOutlook span{
  text-decoration: underline;
}
</style>
