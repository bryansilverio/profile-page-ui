<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
    <div class="container">
      <a class="navbar-brand" href="index.html">BSilverio</a>
      <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
        data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
      </button>

      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#home-section')">
              <span>{{ menu.home.name }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#about-section')">
              <span>{{ menu.about.name }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#resume-section')">
              <span>{{ menu.experience.name }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#skills-section')">
              <span>{{ menu.skills.name }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#projects-section')">
              <span>{{ menu.projects.name }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToPage('#contact-section')">
              <span>{{ menu.contact.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
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
        contact: {
          name: VueI18n.tc('menu.contact'),
          icon: 'icon-envelope',
          isActive: ''
        }
      }
    }
  },
  methods: {
    goToPage(url) {
      if(this.$route.path=='/'){
        window.location.href=url;
      }else{
        this.$router.push('/')
      }
    }
  }
};
</script>
