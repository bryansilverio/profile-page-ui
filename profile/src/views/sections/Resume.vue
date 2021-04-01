<template>
  <div>
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ $t("menu.resume") }}</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>{{ data.name }}</h4>
              <p>
                <em
                  >Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.</em
                >
              </p>
              <ul>
                <li>{{ data.about.location }}</li>
                <li>{{ data.about.phone }}</li>
                <li>{{ data.about.email }}</li>
              </ul>
            </div>

            <h3 class="resume-title">{{ $t("sections.resume.education") }}</h3>
            <EducationItem
              v-for="(item, index) in education"
              :key="index"
              :item="item"
            />
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">{{ $t("sections.resume.experience") }}</h3>
            <ExperienceItem
              v-for="(item, index) in experience"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//Components
import ExperienceItem from "@/views/components/ExperienceItem";
import EducationItem from "@/views/components/EducationItem";
export default {
  name: "Resume",
  components: { ExperienceItem, EducationItem },
  props: { data: Object },
  data() {
    return {
      experience: [],
      education: [],
    };
  },
  created() {
    this.getExperience();
    this.getEducation();
  },
  methods: {
    getExperience() {
      this.experience = this.data.experience;
    },
    getEducation() {
      this.education = this.data.education;
    },
  },
};
</script>
