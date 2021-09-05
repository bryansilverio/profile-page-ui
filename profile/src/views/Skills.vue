<template>
  <section class="skills" id="skills">
    <div class="max-width">
      <h2 class="title">Conocimientos</h2>
      <div class="skills-content">
        <div class="card" v-for="(item, index) in data" :key="index">
          <div class="box">
            <i :class="item.icon"></i>
            <div class="text">{{ item.name }}</div>
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
    return {};
  },
};
</script>
