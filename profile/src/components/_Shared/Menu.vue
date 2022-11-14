<template>
  <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
    <ul id="nav" class="navbar-nav ml-auto">
      <li :class="'nav-item ' + v.isActive" v-for="(v,i) in paths" :key="i">
        <a class="page-scroll" :href="v.url">{{ v.name }}<span></span></a>
        <!--<router-link :to="v.url" class="page-scroll">{{ v.name }}<span></span></router-link>-->
      </li>
    </ul>
  </div>
</template>
<script>
import menu_data from '@/data/menu.json'
export default {
  name: "Menu",
  computed: {
    paths() {
      return menu_data
    }
  }
};
</script>
  