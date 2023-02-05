<template>
  <div>
    <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
    <aside id="fh5co-aside" role="complementary" class="border js-fullheight bg-menu" style="overflow: hidden;">

      <h1 id="fh5co-logo">
        <a href="/" class="navbar-brand" style="display: inline-block;">
          <!--
          <span class="logo-name">B</span>
          <span class="logo-lastname">Silverio</span>{{ title }}
          -->
          <!--
        <img src="assets/images/testimonial_person2.jpg" width="150" style="border-radius: 100px;"
          alt="Free HTML5 Bootstrap Website Template">
          -->
        </a>
      </h1>
      <br>
      <h4 class="fh5co-heading-orange text-center" style="color: white;">{{ title }}</h4>
      <SocialNetworkItem classCss="fh5co-social" />

      <nav id="fh5co-main-menu" role="navigation">
        <ul>
          <li :class="menu.home.isActive">
            <a @click="goToPage('/')" style="color: #fff;cursor: pointer;">
              <span :class="menu.home.icon"></span>
              {{ menu.home.name }}
            </a>
          </li>
          <li :class="menu.about.isActive">
            <a @click="goToPage('/about')" style="color: #fff;cursor: pointer;">
              <span :class="menu.about.icon"></span>
              {{ menu.about.name }}
            </a>
          </li>
          <li :class="menu.skills.isActive">
            <a @click="goToPage('/skills')" style="color: #fff;cursor: pointer;">
              <span :class="menu.skills.icon"></span>
              {{ menu.skills.name }}
            </a>
          </li>
          <li :class="menu.experience.isActive">
            <a @click="goToPage('/work-experience')" style="color: #fff;cursor: pointer;">
              <span :class="menu.experience.icon"></span>
              {{ menu.experience.name }}
            </a>
          </li>
          <li :class="menu.projects.isActive">
            <a @click="goToPage('/projects')" style="color: #fff;cursor: pointer;">
              <span :class="menu.projects.icon"></span>
              {{ menu.projects.name }}
            </a>
          </li>
          <li :class="menu.contact.isActive">
            <a @click="goToPage('/contact')" style="color: #fff;cursor: pointer;">
              <span :class="menu.contact.icon"></span>
              {{ menu.contact.name }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="fh5co-footer" style="bottom:0px">
        <p>
          <small style="color: #fff;">
            &copy;. All Rights Reserved.
            <span>Designed by <a href="#" target="_blank">b</a> </span>
          </small>
        </p>
      </div>

    </aside>
  </div>
</template>
<style>
.bg-menu {
  /**background-color: #293651;**/
  /**background-color: #202225;**/
  background-color: #1F2235;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.logo-name {
  font-size: 2rem;
  color: #ff5c35;
  font-weight: bold;
}

.logo-lastname {
  font-size: 1.5rem;
  color: #ff5c35;
}
</style>
<script lang="js">
import VueI18n from '@/translation/i18n'
import menu_data from '@/data/menu.json'
import SocialNetworkItem from '@/components/_Shared/SocialNetworkItem.vue'
export default {
  name: "Menu",
  components: { SocialNetworkItem },
  data() {
    return {
      ISACTIVE: 'fh5co-active',
      TOGGLE_IS_ACTIVE:'active',
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
  created() {
    this.goToPage('/')
  },
  methods: {
    goToPage(url) {

      this.menu.home.isActive = ''
      this.menu.about.isActive = ''
      this.menu.skills.isActive = ''
      this.menu.projects.isActive = ''
      this.menu.experience.isActive = ''
      this.menu.contact.isActive = ''

      if (url == '/') {
        this.menu.home.isActive = this.ISACTIVE
      }
      else if (url == '/about') {
        this.menu.about.isActive = this.ISACTIVE
      }
      else if (url == '/skills') {
        this.menu.skills.isActive = this.ISACTIVE
      }
      else if (url == '/work-experience') {
        this.menu.experience.isActive = this.ISACTIVE
      }
      else if (url == '/projects') {
        this.menu.projects.isActive = this.ISACTIVE
      }
      else if (url == '/contact') {
        this.menu.contact.isActive = this.ISACTIVE
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
    }
  }
};
</script>
