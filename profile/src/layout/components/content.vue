<template>
  <div>
    <Home :data="data" class="bg-home"/>
    <About :data="data.about" :name="data.home.name" />
    <Services :data="data.work" />
    <Contact :data="data.contactLinks" :name="data.home.name" />
  </div>
</template>
<script>
import Home from "@/views/Home";
import About from "@/views/About";
import Services from "@/views/Services";
import Contact from "@/views/Contact";

import dataObject from "@/data/data.json";

export default {
  name: "Content",
  components: { Home, About, Services, Contact },
  data() {
    return {
      data: dataObject,
    };
  },
};
</script>
