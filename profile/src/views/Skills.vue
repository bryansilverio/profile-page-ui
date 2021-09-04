<template>
  <section class="skills" id="skills">
    <div class="max-width">
      <h2 class="title">Conocimientos</h2>
      <div class="skills-content">
        <div class="column right">
          <div class="bars" v-for="(item, index) in sideLeft" :key="index">
            <div class="info">
              <span>{{ item.name }}</span>
              <span>90%</span>
            </div>
            <div :class="'line ' + item.name"></div>
          </div>
        </div>
        <div class="column right">
          <div class="bars" v-for="(item, index) in sideRigth" :key="index">
            <div class="info">
              <span>{{ item.name }}</span>
              <span>90%</span>
            </div>
            <div :class="'line ' + item.name"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Skills",
  props: {
    data: Array,
  },
  data() {
    return {
      sideLeft: [],
      sideRigth: [],
    };
  },
  created() {
    this.getSkills(this.data);
  },
  methods: {
    getSkills(items = []) {
      items.forEach((element, index) => {
        if (index % 2 == 0) {
          this.sideLeft.push(element);
        } else {
          this.sideRigth.push(element);
        }
      });
    },
  },
};
</script>
