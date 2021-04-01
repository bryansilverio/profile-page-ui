<template>
  <div class="resume-item">
    <h4>{{ item.company }}</h4>
    <h5>{{ item.start_date }} - {{ item.start_date }}</h5>
    <p><em>{{}} </em></p>
    <div v-html="item.description"></div>
  </div>
</template>
<script>
export default {
  name: "ExperienceItem",
  props: { item: Object },
};
</script>
