<template>
  <div>
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ $t("menu.portfolio") }}</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li @click="findProjectsByCategory('all')">
                {{ $t("sections.portfolio.category.all") }}
              </li>
              <li @click="findProjectsByCategory('company')">
                {{ $t("sections.portfolio.category.company") }}
              </li>
              <li @click="findProjectsByCategory('personal')">
                {{ $t("sections.portfolio.category.personal") }}
              </li>
              <li @click="findProjectsByCategory('freelance')">
                {{ $t("sections.portfolio.category.freelance") }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <PortfolioItem
            v-for="(item, index) in projects"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>
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
  data() {
    return {
      visible: true,
      projects: [],
    };
  },
  watch: {
    data(value) {
      console.log(value);
    },
  },
  created() {
    this.findProjectsByCategory();
  },
  methods: {
    findProjectsByCategory(category = "all") {
      this.projects = [];
      if (category == "all") {
        this.projects = this.data.projects;
      } else {
        this.projects = this.data.projects.filter(
          (x) => x.category == category
        );
      }
    },
  },
};
</script>
