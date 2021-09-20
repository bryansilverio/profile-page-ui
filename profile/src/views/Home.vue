<template>
  <!--hero header-->
  <section class="pt-7 pt-md-8" id="home">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto my-auto text-center">
          <h1 class="white">Desarrollo de aplicaciones web.</h1>
          <p class="lead mt-4 mb-5">
            Desarrollo de aplicaciones web para tu negocio.
          </p>
          <p v-show="false"><img class="img-fluid" src="assets/img/mockup.png" alt="Mockup" /></p>
        </div>
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
