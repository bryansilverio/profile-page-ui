<template>
  <div class="progress">
    <span class="skill"
      >{{ item.name }} <i class="val">{{ item.value }}%</i></span
    >
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillItem",
  props: { item: Object },
};
</script>
