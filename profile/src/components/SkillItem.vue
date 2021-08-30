<template>
  <div class="progress">
    <span class="skill"
      >{{ name }} <i class="val">{{ value }}%</i></span
    >
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        :aria-valuemax="value"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillItem",
  props: {
    name: String,
    value: Number,
  },
};
</script>
