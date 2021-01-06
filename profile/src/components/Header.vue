<template>
  <!-- Header -->
  <div
    class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
    style="
      min-height: 600px;
      background-image: url(assets/images/background/pexels-scott-webb-532571.jpg);
      background-size: cover;
      background-position: center top;
    "
  >
    <!-- Mask -->
    <span class="mask bg-gradient-default opacity-8"></span>
    <!-- Header container -->
    <div class="container-fluid d-flex align-items-center">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <h1 class="display-2 text-white">
            {{ data ? data.name : '' }}
          </h1>
          <p class="text-white mt-0 mb-5">
            {{ $t('welcome') }}
          </p>
          <a href="#!" class="btn btn-info">{{ $t('contact') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    data: Object,
  },
  data() {
    return {}
  },
}
</script>
