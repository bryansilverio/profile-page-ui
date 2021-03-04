<template>
  <div class="progress">
    <span class="skill"
      >{{ item.name }} <i class="val">{{ item.value }}+%</i></span
    >
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="item.value"
        :width="item.value + 'px'"
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
  watch: {
    item(value) {
      this.setValue(value);
    },
  },
  methods: {
    setValue(value) {
      let progressbar = document.getElementsByClassName("progress-bar");
      console.log(value)
      if (progressbar) {
        progressbar.forEach((element) => {
          console.log(element);
        });
      }
    },
  },
};
</script>
