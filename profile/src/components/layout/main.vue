<template>
  <div>
     <Preloader/>
     <Header/>
     <Content/>
     <Footer/>
  </div>
</template>
<script>
/*

import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";

import WorkExperience from "@/components/WorkExperience.vue";
import Skills from "@/components/Skills.vue";
*/
import Preloader from "@/components/layout/Preloader.vue";
import Header from "@/components/layout/Header.vue";
import Content from "@/components/layout/Content.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Main",
  components:{Preloader, Header, Content, Footer}
};
</script>
