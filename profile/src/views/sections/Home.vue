<template>
  <div>
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>{{ data.name }}</h1>
        <p>
          I'm
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div class="social-links">
          <SocialNetworkItem
            v-for="(item, index) in data.social_network"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>
    <!-- End Hero -->
  </div>
</template>
<script>
//components
import SocialNetworkItem from "@/views/components/SocialNetworkItem";

export default {
  name: "Home",
  components: { SocialNetworkItem },
  props: { data: Object },
};
</script>
