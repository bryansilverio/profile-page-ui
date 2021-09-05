<template>
  <nav class="navbar">
    <div class="max-width">
      <div class="logo">
        <a v-show="false" href="#">Portfo<span>lio.</span></a>
      </div>
      <ul class="menu" :class="menuActive ? 'active' : ''">
        <li><a href="#home" class="menu-btn">Inicio</a></li>
        <li><a href="#about" class="menu-btn">Sobre mi</a></li>
        <li><a href="#services" class="menu-btn">Servicios</a></li>
        <li><a href="#skills" class="menu-btn">Conocimientos</a></li>
        <li><a href="#contact" class="menu-btn">Contacto</a></li>
      </ul>
      <div class="menu-btn" @click="openMenu()">
        <i class="fas fa-bars"></i>
      </div>
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
