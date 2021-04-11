<template>
  <div class="resume-item">
    <h4>{{ item.company }}</h4>
    <h5>{{ item.start_date }} - {{ item.start_date }}</h5>
    <p>
      <em>{{ getTechnologies(item) }}</em>
    </p>
    <div v-html="item.description"></div>
  </div>
</template>
<script>
export default {
  name: "ExperienceItem",
  props: { item: Object },
  methods: {
    getTechnologies(item) {
      let strResult = "";
      if (item.technologies) {
        strResult = item.technologies.toString();
      }
      return strResult;
    },
  },
};
</script>
