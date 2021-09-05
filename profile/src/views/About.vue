<template>
  <section class="about" id="about">
    <div class="max-width">
      <h2 class="title">Sobre mi</h2>
      <div class="about-content">
        <div class="column left">
          <img src="assets/images/profile-1.jpeg" alt="" />
        </div>
        <div class="column right">
          <div class="text">{{ name }}<span class="typing-2"></span></div>
          <p>
            {{ data.description }}
          </p>
          <a href="#">Descargar CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    data: Object,
    name: String,
  },
  data() {
    return {};
  },
};
</script>
