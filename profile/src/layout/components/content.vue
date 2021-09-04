<template>
  <div>
    <Home :data="data" />
    <About :data="data.about" :name="data.home.name" />
    <Skills :data="data.skills" />
    <Resume :data="data.work" />
    <Contact :data="data.contactLinks" :name="data.home.name"/>
  </div>
</template>
<script>
import Home from "@/views/Home";
import About from "@/views/About";
import Skills from "@/views/Skills";
import Resume from "@/views/Resume";
import Contact from "@/views/Contact";

import dataObject from "@/data/data.json";

export default {
  name: "Content",
  components: { Home, About, Skills, Resume, Contact },
  data() {
    return {
      data: dataObject,
    };
  },
};
</script>
