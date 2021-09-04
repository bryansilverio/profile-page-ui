<template>
  <section class="home" id="home">
    <div class="max-width">
      <div class="home-content">
        <div class="text-1">Hello, my name is</div>
        <div class="text-2">{{ data.home.name }}</div>
        <div class="text-3">And I'm a <span class="typing"></span></div>
        <a href="#contact">Contacto</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>
