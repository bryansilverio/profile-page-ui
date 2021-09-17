<template>
  <!--navigation-->
  <nav
    class="navbar navbar-expand-md navbar-light bg-white fixed-top sticky-navigation"
  >
    <a class="navbar-brand mx-auto" href="index.html">
      Bsilverio
    </a>
    <button
      class="navbar-toggler navbar-toggler-right border-0"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span data-feather="grid"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#about">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#services">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#process">Proceso</a>
        </li>
        <li class="nav-item">
          <a class="nav-link page-scroll" href="#blog">Blog</a>
        </li>
      </ul>
      <form class="form-inline">
        <p class="mb-0 mx-3">
          <a class="page-scroll font-weight-bold" href="#contact">Contacto</a>
        </p>
      </form>
    </div>
  </nav>
</template>
<script>
import dataObject from "@/data/data.json";
import menuObject from "@/data/menu.json";

export default {
  name: "NavBar",
  data() {
    return {
      contactLinks: dataObject.contactLinks,
      menu: menuObject.menu,
      menuActive: false,
    };
  },
  methods: {
    openMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>
