<template>
  <div class="resume-item">
    <h4>{{ item.carrer }}</h4>
    <h5>{{ item.start_date }} - {{ item.end_date }}</h5>
    <p>
      <em>{{ item.university }}</em>
    </p>
    <p v-html="item.description"></p>
  </div>
</template>
<script>
export default {
  name: "EducationItem",
  props: { item: Object },
};
</script>
