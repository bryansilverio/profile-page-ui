<template>
  <section class="colorlib-about" data-section="about" id="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
          <div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12">
              <div class="about-desc">
                <span class="heading-meta">{{ $t('sections.aboutMe') }}</span>
                <h2 class="colorlib-heading">{{ $t('sections.aboutMeText') }}</h2>
                <span v-html="$t('about')"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
              <div class="services color-1">
                <span class="icon2">
                  <font-awesome-icon icon="fa-solid fa-sitemap" :style="{ color: '#2c98f0' }" />
                </span>
                <h3>APIs REST</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <div class="services color-2">
                <span class="icon2">
                  <font-awesome-icon icon="fa-solid fa-terminal" :style="{ color: '#ec5453' }" />
                </span>
                <h3>Backend</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
              <div class="services color-3">
                <span class="icon2">
                  <font-awesome-icon icon="fa-solid fa-database" :style="{ color: '#f9bf3f' }" />
                </span>
                <h3>Base de datos</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
              <div class="services color-4">
                <span class="icon2">
                  <font-awesome-icon icon="fa-solid fa-code" :style="{ color: '#f9bf3f' }" />
                </span>
                <h3>Desarrollo Web</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
import listSkillsService from '@/services/skills/listSkillsService'
export default defineComponent({
  name: "About",
  mixins: [
    listSocialNetworkService,
    listSkillsService
  ],
  methods: {
    goToExperienceSectionOnClick() {
      location.href = '#experience'
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    },
    skills() {
      return this.executeListSkills()
    }
  }
});
</script>