<template>
  <section class="skills" id="skills">
    <div class="max-width">
      <h2 class="title">Conocimientos</h2>
      <div class="skills-content">
        <template v-for="(item, index) in data">
          <div class="card" :key="index" v-if="item.icon">
            <div class="box">
              <i :class="item.icon"></i>
              <div class="text" v-show="false">{{ item.name }}</div>
            </div>
          </div>
        </template>
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
