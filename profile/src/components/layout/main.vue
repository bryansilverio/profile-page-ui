<template>
  <div>
    <Preloader />
    <Header/>
    <Content />
    <Footer />
  </div>
</template>
<script>

import Preloader from "@/components/layout/Preloader.vue";
import Header from "@/components/layout/Header.vue";
import Content from "@/components/layout/Content.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Main",
  components: { Preloader, Header, Content, Footer },
  created() {
  }
};
</script>
