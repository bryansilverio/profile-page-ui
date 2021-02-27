<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="header-tops">
      <div class="container">
        <h1>
          <a href="/">{{ data.name }}</a>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> -->
        <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active" @click="changeSection(1)">
              <a href="#header">{{ $t("menu.home") }}</a>
            </li>
            <li @click="changeSection(2)">
              <a href="#about">{{ $t("menu.about") }}</a>
            </li>
            <li @click="changeSection(3)">
              <a href="#resume">{{ $t("menu.resume") }}</a>
            </li>
            <li @click="changeSection(4)">
              <a href="#services">{{ $t("menu.services") }}</a>
            </li>
            <li @click="changeSection(5)">
              <a href="#portfolio">{{ $t("menu.portfolio") }}</a>
            </li>
            <li @click="changeSection(6)">
              <a href="#contact">{{ $t("menu.contact") }}</a>
            </li>
          </ul>
        </nav>
        <!-- .nav-menu -->

        <div class="social-links">
          <SocialNetworkItem
            v-for="(item, index) in data.social_network"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>
<style>
.header-index {
  background-color: rgba(0, 0, 0, 0.9);
  opacity: 1;
}
</style>
<script>
//Components
import SocialNetworkItem from "@/views/components/SocialNetworkItem";

export default {
  name: "Home",
  components: { SocialNetworkItem },
  props: { data: Object },
  mounted() {
    this.changeSection(1);
  },
  methods: {
    changeSection(section = 1) {
      var item = document.getElementById("header");
      if (!item) return;

      if (section == 1) item.classList.add("header-index");
      else item.classList.remove("header-index");
    },
  },
};
</script>
