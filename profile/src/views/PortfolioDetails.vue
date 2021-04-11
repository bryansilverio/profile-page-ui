<template>
  <!-- ======= Portfolio Details ======= -->
  <div id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 offset-md-8">
          <button @click="goToBack()">
            <i class="bx bx-arrow-back"></i>
            Atras
          </button>
        </div>
      </div>
      <div class="row" v-if="project">
        <div class="col-lg-8">
          <h2 class="portfolio-title">
            {{ $t("sections.portfolio.title") }}
          </h2>
          <div class="portfolio-details-carousel">
            <img
              :src="project.image_preview"
              class="img-fluid"
              :alt="project.name"
            />
          </div>
        </div>

        <div class="col-lg-4 portfolio-info">
          <h3>{{ $t("sections.portfolio.project_information") }}</h3>
          <ul>
            <li>
              <strong>{{ $t("sections.portfolio.type") }}</strong
              >: {{ project.project_type }}
            </li>
            <li>
              <strong>{{ $t("sections.portfolio.name") }}</strong
              >: {{ project.name }}
            </li>
            <li>
              <strong>URL</strong>: <a href="#">{{ project.url }}</a>
            </li>
          </ul>
          <input-tag
            v-model="project.technologies"
            :read-only="true"
          ></input-tag>
        </div>
        <div class="col-lg-12 portfolio-info">
          <h3>{{ $t("sections.portfolio.description") }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Portfolio Details -->
</template>
<style>
.vue-input-tag-wrapper {
  background-color: transparent !important;
  border: transparent !important;
}
</style>
<script>
import data from "@/data/data";
import generalMixin from "@/mixins/index";
import InputTag from "vue-input-tag";
//import { Carousel, Slide } from "vue-carousel";
export default {
  name: "PortfolioDetails",
  components: { InputTag },
  mixins: [generalMixin],
  data() {
    return {
      project: null,
    };
  },
  created() {
    let projectId = this.$route.params.id;
    if (projectId) {
      this.findProject(projectId);
    }
  },
  methods: {
    findProject(id) {
      let collection = data.projects ? data.projects : [];
      if (!id) return;
      let findProject = collection.find((el) => el.id == id);
      if (findProject) {
        this.project = findProject;
      }
    },
    goToBack() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
