<template>
  <div :class="'col-lg-4 col-md-6 portfolio-item '">
    <div class="portfolio-wrap">
      <img :src="item.image_preview" class="img-fluid" alt="" />
      <div class="portfolio-info">
        <h4>{{ item.name }}</h4>
        <p>{{ item.project_type }}</p>
        <div class="portfolio-links">
          <a
            @click="goToProject(item)"
            class="portfolio-details-lightbox"
            data-glightbox="type: external"
            title="Portfolio Details"
            ><i class="bx bx-link"></i
          ></a>
        </div>
      </div>
    </div>
    <vue-shadow-box
      :media="[
        {
          src: item.image_preview,
          type: item.name,
        },
      ]"
      v-model="showShadowBox"
    ></vue-shadow-box>
  </div>
</template>
<script>
import generalMixin from "@/mixins/index";

import VueShadowBox from "vue-shadowbox";
// You need to import the CSS only once
import "vue-shadowbox/dist/vue-shadowbox.css";
export default {
  name: "PortfolioItem",
  components: { VueShadowBox },
  mixins: [generalMixin],
  data() {
    return {
      showShadowBox: false,
    };
  },
  props: {
    index: Number,
    item: Object,
  },
  methods: {
    goToProject(item) {
      this.$router.push({ path: "portfolio/" + item.id + "/details" });
    },
  },
};
</script>
