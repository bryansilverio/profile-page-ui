<template>
  <main id="main">
    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Resumen</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <h3 class="resume-title">Educación</h3>
            <ResumeItem
              v-for="(item, index) in education"
              :key="index"
              :value="item"
            />
          </div>
          <div class="col-lg-12">
            <h3 class="resume-title">Experiencia Profesional</h3>
            <ResumeItem
              v-for="(item, index) in experiences"
              :key="index"
              :value="item"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Resume Section -->
  </main>
  <!-- End #main -->
</template>
<script>
import dataObject from "@/data/data.json";

import ResumeItem from "@/components/ResumeItem";

export default {
  name: "Resume",
  components: { ResumeItem },
  data() {
    return {
      experiences: dataObject.experience,
      education: dataObject.education,
    };
  },
};
</script>
