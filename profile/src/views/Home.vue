<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div
      class="container d-flex flex-column align-items-center"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <h1>{{ home.name }}</h1>
      <h2>{{ home.profile }}</h2>
      <router-link to="about" class="btn-about">About me</router-link>
    </div>
  </section>
  <!-- End Hero -->
</template>
<script>
import dataObject from "@/data/data.json";
export default {
  name: "Home",
  data() {
    return {
      home: dataObject.home,
    };
  },
};
</script>
