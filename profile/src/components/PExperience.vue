<template>
  <v-card flat color="transparent" class="white--text">
    <v-timeline>
      <v-timeline-item v-for="(item, i) in experience" :key="i" small>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold`"
            v-text="item.startDate"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4`">
            <v-icon left class="white--text">
              mdi-briefcase
            </v-icon>
            <span class="aligh-left">
              {{ item.company }}
            </span>
            <br />
            {{ item.startDate }} - {{ validateEndDate(item.endDate) }}
          </h2>
          <div v-html="item.descripcion"></div>
          <v-btn @click="selectItem(item)" text>Detalle</v-btn>
        </div>
      </v-timeline-item>
    </v-timeline>
    <ExperienceDetail
      :show="showModal"
      :company="itemCompany"
      :technologies="technologies"
    />
  </v-card>
</template>
<script>
import ExperienceDetail from "@/components/ExperienceDetails";
export default {
  name: "PExperience",
  components: { ExperienceDetail },
  props: {
    experience: Array,
  },
  data() {
    return {
      showModal: false,
      itemCompany: null,
      technologies: [],
    };
  },
  methods: {
    selectItem(item) {
      this.itemCompany = item.company;
      this.technologies = item.technologies;
      this.showModal = true;
      
    },
    validateEndDate(endDate) {
      if (endDate) {
        return endDate;
      } else {
        return "Presente";
      }
    },
  },
};
</script>
<style scoped>
.v-tab {
  justify-content: start;
}
</style>
