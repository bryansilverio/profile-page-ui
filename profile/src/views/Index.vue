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
