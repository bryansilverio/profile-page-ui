<template>
  <div class="resume-item">
    <h4>{{ value.position }}</h4>
    <h5>{{ value.startDate }} - {{ value.endDate }}</h5>
    <p>
      <em>{{ value.company }} </em>
    </p>
    <p v-html="value.descripcion"></p>
  </div>
</template>
<script>
export default {
  name: "ResumeItem",
  props: {
    value: Object,
  },
};
</script>
