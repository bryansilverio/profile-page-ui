<template>
  <div>
    <router-view />
    <div class="credits" v-show="false">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</template>
<script>
//Components
//import Index from "@/views/Index";

export default {
  name: "App",
  //components: { Index },
};
</script>
