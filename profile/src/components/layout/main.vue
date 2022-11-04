<template>
  <div>
    <Header/>
    <Content />
    <Footer />
  </div>
</template>
<script>

import Header from "@/components/layout/Header.vue";
import Content from "@/components/layout/Content.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Main",
  components: { Header, Content, Footer },
  created() {
  }
};
</script>
