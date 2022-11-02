<template>
  <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
    <ul id="nav" class="navbar-nav ml-auto">
      <li :class="'nav-item ' + v.isActive" v-for="(v,i) in paths" :key="i">
        <a class="page-scroll" @click="onGoToPage(v.url)">{{ v.name }}<span></span></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      paths: [
        {
          url: '/',
          name: 'Inicio',
          isActive: 'active'
        },
        {
          url: '/about',
          name: 'Sobre mí',
          isActive: ''
        },
        {
          url: '/work-experience',
          name: 'Experiencia',
          isActive: ''
        },
        {
          url: '/projects',
          name: 'Proyectos',
          isActive: ''
        },
        {
          url: '/contact',
          name: 'Contacto',
          isActive: ''
        }
      ]
    };
  },
  methods: {
    onGoToPage(url) {
      this.$router.push({ path: url }).catch(error => {
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
  }
};
</script>
  