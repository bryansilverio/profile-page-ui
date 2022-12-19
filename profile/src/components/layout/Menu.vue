<template>
  <div>
    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
    <aside id="fh5co-aside" role="complementary" class="border js-fullheight bg-menu">

      <h1 id="fh5co-logo">
        <a href="index.html">
          <img src="assets/images/logo.png" alt="Free HTML5 Bootstrap Website Template">
        </a>
      </h1>
      <h4 class="fh5co-heading-orange text-center" style="color: white;">Bryan Silverio</h4>
      <ul class="fh5co-social">
        <li v-for="(v, i) in socialNetworkItems" :key="i">
          <a :href="v.url" target="_blank">
            <i :class="v.icon" style="color: #fff;"></i>
          </a>
        </li>
      </ul>

      <nav id="fh5co-main-menu" role="navigation">
        <ul>
          <li :class="menuIsActive.home">
            <a @click="goToPage('/')" style="color: #fff;cursor: pointer;">Inicio</a>
          </li>
          <li :class="menuIsActive.about">
            <a @click="goToPage('/about')" style="color: #fff;cursor: pointer;">
              Sobre mi
            </a>
          </li>
          <li :class="menuIsActive.projects">
            <a @click="goToPage('/projects')" style="color: #fff;cursor: pointer;">
              Proyectos
            </a>
          </li>
          <li :class="menuIsActive.contact">
            <a @click="goToPage('/contact')" style="color: #fff;cursor: pointer;">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div class="fh5co-footer" style="bottom:0px">
        <p>
          <small style="color: #fff;">
            &copy; 2018 Nitro Free HTML5. All Rights Reserved.
            <span>Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> </span>
            <span>Distributed by: <a href="https://themewagon.com/" target="_blank">ThemeWagon</a></span>
          </small>
        </p>
      </div>

    </aside>
  </div>
</template>
<style>
.bg-menu {
  background-color: #293651;
}
</style>
<script lang="js">
import menu_data from '@/data/menu.json'
import social_network_data from '@/data/social-network.json'
export default {
  name: "Menu",
  data() {
    return {
      ISACTIVE: 'fh5co-active',
      menuIsActive: {
        home: '',
        projects: '',
        contact: '',
        about: ''
      }
    }
  },
  created() {
    this.goToPage('/')
  },
  methods: {
    goToPage(url) {

      this.menuIsActive.home = ''
      this.menuIsActive.about = ''
      this.menuIsActive.projects = ''
      this.menuIsActive.contact = ''

      if (url == '/') {
        this.menuIsActive.home = this.ISACTIVE
      }
      else if (url == '/about') {
        this.menuIsActive.about = this.ISACTIVE
      }
      else if (url == '/projects') {
        this.menuIsActive.projects = this.ISACTIVE
      }
      else if (url == '/contact') {
        this.menuIsActive.contact = this.ISACTIVE
      }

      this.$router.push(url).catch(error => {
        if (
          error.name !== 'NavigationDuplicated' &&
          !error.message.includes('Avoided redundant navigation to current location')
        ) {
          /* eslint-disable no-console */
          console.log(error)
          /* eslint-enable no-console */
        }
      })
    }
  },
  computed: {
    menuItems() {
      return menu_data
    },
    socialNetworkItems() {
      return social_network_data
    }
  }
};
</script>
  