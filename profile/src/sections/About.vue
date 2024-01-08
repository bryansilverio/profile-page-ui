<template>
  <section id="about" data-aos="fade-right">
    <p class="section__text__p1">{{ $t('sections.aboutMeText') }}</p>
    <h1 class="title">{{ $t('sections.aboutMe') }}</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img src="./assets/images/profile-pic.png" alt="Profile picture" class="about-pic" />
      </div>
      <div class="about-details-container">
        <div class="text-container">
          <p>
            {{ $t('about') }}
          </p>
        </div>
      </div>
    </div>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Conocimientos</h2>
          <div class="article-container">
            <article v-for="(v, i) in skills" :key="i">
              <img :src="v.icon" alt="Experience icon" class="icon" />
              <div>
                <h3>{{ v.name }}</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <font-awesome-icon @click="goToExperienceSectionOnClick()" size="2x" class="arrow" icon="fa-solid fa-angles-down"
      :style="{ color: '#FF474C', cursor: 'pointer' }" />
  </section>
</template>
<style>
.badge {
  background-color: red;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
</style>
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