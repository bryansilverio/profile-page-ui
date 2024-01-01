<template>
  <div>
    <div
      class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/sections/Header.vue"
import Footer from "@/sections/Footer.vue"

import { defineComponent } from "vue";
export default defineComponent({
  name: "AppLayout",
  components: {
    Header,
    Footer
  }
});
</script>
  