<template>
  <div class="container-wrap">
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <i></i>
    </a>
    <NavDesktop />
    <router-view />
  </div>
</template>
<script>
import NavDesktop from "@/sections/NavDesktop.vue"

import { defineComponent } from "vue";
export default defineComponent({
  name: "AppLayout",
  components: {
    NavDesktop
  }
});
</script>
  