<template>
  <div>
    <header id="header" class="d-flex flex-column justify-content-center">
      <nav id="navbar" class="navbar nav-menu">
        <ul>
          <li>
            <a href="#hero" class="nav-link scrollto active"
              ><i class="bx bx-home"></i> <span>{{ $t("menu.home") }}</span></a
            >
          </li>
          <li>
            <a href="#about" class="nav-link scrollto"
              ><i class="bx bx-user"></i> <span>{{ $t("menu.about") }}</span></a
            >
          </li>
          <li>
            <a href="#resume" class="nav-link scrollto"
              ><i class="bx bx-file-blank"></i>
              <span>{{ $t("menu.resume") }}</span></a
            >
          </li>
          <li>
            <a href="#portfolio" class="nav-link scrollto"
              ><i class="bx bx-book-content"></i>
              <span>{{ $t("menu.portfolio") }}</span></a
            >
          </li>
          <li>
            <a href="#contact" class="nav-link scrollto"
              ><i class="bx bx-envelope"></i>
              <span>{{ $t("menu.contact") }}</span></a
            >
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->
    </header>
    <!-- End Header -->
  </div>
</template>
<script>
//Components

export default {
  name: "Home",
  mounted() {},
  methods: {},
};
</script>
