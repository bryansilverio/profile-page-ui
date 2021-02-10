<template>
  <div class="resume-item">
    <h4>{{ item.position }}</h4>
    <h5>{{ item.start_date }} - {{ item.end_date }}</h5>
    <p>
      <em>{{ item.company }}</em>
    </p>
    <p v-html="item.description"></p>
  </div>
</template>
<script>
export default {
  name: "ExperienceItem",
  props: { item: Object },
};
</script>
