<template>
  <div>
    <!-- Home -->
    <Home :data="data" />

    <!-- About -->
    <About :data="data" />

    <!-- Resume -->
    <Resume :data="data" />

    <!-- Services -->
    <Services :data="data" />

    <!-- Portfolio -->
    <Portfolio :data="data" />

    <!-- Contact -->
    <Contact :data="data" />

    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</template>
<script>
//components
import Home from "./sections/Home";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

//data
import data from "@/data/data";

export default {
  name: "Index",
  components: { Home, About, Resume, Services, Portfolio, Contact },
  computed: {
    data() {
      return data;
    },
  },
};
</script>
