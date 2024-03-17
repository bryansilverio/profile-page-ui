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
                {{ $t('about') }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
              <div class="services color-1">
                <span class="icon2"><i class="icon-bulb"></i></span>
                <h3>APIs REST</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInRight">
              <div class="services color-2">
                <span class="icon2"><i class="icon-globe-outline"></i></span>
                <h3>Web Design</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInTop">
              <div class="services color-3">
                <span class="icon2"><i class="icon-data"></i></span>
                <h3>Software</h3>
              </div>
            </div>
            <div class="col-md-3 animate-box" data-animate-effect="fadeInBottom">
              <div class="services color-4">
                <span class="icon2"><i class="icon-phone3"></i></span>
                <h3>Application</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div class="hire">
                <h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2>
                <a href="#" class="btn-hire">Hire me</a>
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