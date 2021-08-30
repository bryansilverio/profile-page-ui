<template>
  <main id="main">
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Sobre mí</h2>
          <p>{{ about.description }}</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/about_01.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{{ about.profile }}</h3>
            <p class="fst-italic"></p>
            <div class="row">
              <div class="col-lg-12"></div>
              <div class="col-lg-6">
                <ul>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Correo:</strong> bryansilverio12@gmail.com
                  </li>
                  <li>
                    <i class="bi bi-rounded-right"></i>
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Conocimientos</h2>
          <p></p>
        </div>

        <div class="row skills-content">
          <div class="col-lg-6">
            <SkillItem
              v-for="(item, index) in leftSide"
              :key="index"
              :name="item.name"
            />
          </div>

          <div class="col-lg-6">
            <SkillItem
              v-for="(item, index) in rigthSide"
              :key="index"
              :name="item.name"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Skills Section -->
  </main>
  <!-- End #main -->
</template>

<script>
import dataObject from "@/data/data.json";

import SkillItem from "@/components/SkillItem";

export default {
  name: "About",
  components: { SkillItem },
  data() {
    return {
      about: dataObject.about,
      contactLinks: dataObject.contactLinks,
      technologies: dataObject.technologies,

      leftSide: [],
      rigthSide: [],
    };
  },
  mounted() {
    this.getSkills();
  },
  methods: {
    getSkills() {
      this.leftSide = [];
      this.rigthSide = [];
      this.technologies.forEach((element, index) => {
        if (index % 2 == 0) {
          this.leftSide.push(element);
        } else {
          this.rigthSide.push(element);
        }
      });
    },
  },
};
</script>
