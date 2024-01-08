<template>
  <section id="projects" data-aos="fade-right">
    <p class="section__text__p1">{{ $t('sections.projectsText') }}</p>
    <h1 class="title">{{ $t('sections.projects') }}</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container" v-for="(v, i) in projects" :key="i">
          <div class="article-container" v-if="v.image">
            <img src="./assets/images/project-1.png" alt="Project 1" class="project-img" />
          </div>
          <h2 class="experience-sub-title project-title">{{ v.name }}</h2>
          <p style="color: black;">{{ v.description }}</p>
          <div class="btn-container">
            <button v-if="v.showRepository" class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'">
              {{ $t('buttons.linkToRepository') }}
            </button>
            <button v-if="v.showSite" class="btn btn-color-2 project-btn" @click="goToProjectSiteOnClick(v.url)">
              {{ $t('buttons.linkToSite') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <font-awesome-icon @click="goToContactSection()" size="2x" class="arrow" icon="fa-solid fa-angles-down"
      :style="{ color: '#FF474C', cursor: 'pointer' }" />
  </section>
</template>
<script>
import listProjectsService from '@/services/projects/listProjectsService';
export default {
  name: "Projects",
  mixins: [
    listProjectsService
  ],
  methods: {
    goToProjectSiteOnClick(url) {
      window.open(url, "_blank")
    },
    goToContactSection() {
      location.href = './#contact'
    }
  },
  computed: {
    projects() {
      return this.executelistProjects();
    }
  }
};
</script>