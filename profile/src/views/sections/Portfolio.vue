<template>
  <div>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t("menu.portfolio") }}</h2>
          <p class="mt-3">{{ $t("menu.portfolio") }}</p>
        </div>

        <div class="row" v-show="false">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
          <PortfolioItem
            v-for="(item, index) in data.projects"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </div>
</template>
<script>
import mixins from "@/mixins/index";

import PortfolioItem from "@/views/components/PortfolioItem";

export default {
  name: "Portfolio",
  mixins: [mixins],
  components: { PortfolioItem },
  props: { data: Object },
};
</script>
