<template>
  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
    <div class="portfolio-wrap">
      <img :src="item.image_preview" class="img-fluid" alt="" />
      <div class="portfolio-info">
        <h4>{{ item.name }}</h4>
        <p>{{ item.project_type }}</p>
        <div class="portfolio-links">
          <a
            :href="item.image_preview"
            data-gall="portfolioGallery"
            class="venobox"
            :title="item.name"
            target="_blank"
            ><i class="bx bx-plus"></i
          ></a>
          <a
            @click="redirectToPage('/portfolio/1/details')"
            data-gall="portfolioDetailsGallery"
            data-vbtype="iframe"
            class="venobox"
            title="Portfolio Details"
            ><i class="bx bx-link"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PortfolioItem",
  props: {
    item: Object,
  },
};
</script>
