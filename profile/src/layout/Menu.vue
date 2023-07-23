<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="/"><span style="color:#FF474C">B</span>Silverio</a>
      <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
        data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-reorder"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav nav ml-auto">
          <li class="nav-item menu-options">
            <a class="nav-link" @click="goToPage('/')">
              <span style="font-weight: bold;"><i class="icon-home"></i> {{ menu.home.name }}</span>
            </a>
          </li>
          <li class="nav-item menu-options">
            <a class="nav-link" @click="goToPage('/about-me')">
              <span style="font-weight: bold;"><i class="icon-user"></i> {{ menu.about.name }}</span>
            </a>
          </li>
          <li class="nav-item menu-options">
            <a class="nav-link" @click="goToPage('/work-experiences')">
              <span style="font-weight: bold;"><i class="icon-briefcase"></i> {{ menu.experience.name }}</span>
            </a>
          </li>
          <li class="nav-item menu-options">
            <a class="nav-link" @click="goToPage('/projects')">
              <span style="font-weight: bold;"><i class="icon-code"></i> {{ menu.projects.name }}</span>
            </a>
          </li>
          <li class="nav-item menu-options">
            <a class="nav-link" @click="goToPage('/posts')">
              <span style="font-weight: bold;"><i class="icon-edit"></i> {{ menu.posts.name }}</span>
            </a>
          </li>
          <li class="nav-item menu-options" v-show="false">
            <a class="nav-link" @click="goToPage('#contact-section')">
              <span style="font-weight: bold;">{{ menu.contact.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<style>
  .menu-options{
    cursor: pointer;
  }
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
  name: "Menu",
  data() {
    return {
      title: VueI18n.tc('title'),
      menu: {
        home: {
          name: VueI18n.tc('menu.home'),
          icon: 'icon-home',
          isActive: ''
        },
        about: {
          name: VueI18n.tc('menu.aboutMe'),
          icon: 'icon-user',
          isActive: ''
        },
        skills: {
          name: VueI18n.tc('menu.skills'),
          icon: 'icon-code',
          isActive: ''
        },
        projects: {
          name: VueI18n.tc('menu.projects'),
          icon: 'icon-screen',
          isActive: ''
        },
        experience: {
          name: VueI18n.tc('menu.experience'),
          icon: 'icon-briefcase',
          isActive: ''
        },
        posts: {
          name: "Posts",
          icon: 'icon-edit',
          isActive: ''
        },
        contact: {
          name: VueI18n.tc('menu.contact'),
          icon: 'icon-envelope',
          isActive: ''
        }
      }
    }
  },
  methods: {
    goToSection(url) {
      window.location.href=url;
    },
    goToPage(url) {
      this.$router.push(url);
    }
  }
};
</script>
