<template>
  <!--
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
-->
	<section class="colorlib-work" data-section="projects" id="projects">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span class="heading-meta">{{ $t('sections.projects') }}</span>
					<h2 class="colorlib-heading animate-box">{{ $t('sections.projectsText') }}</h2>
				</div>
			</div>
			<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
				<div class="col-md-12">
					<p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft" v-for="(v, i) in projects" :key="i">
					<div class="project" style="background-image: url(images/img-1.jpg);">
						<div class="desc">
							<div class="con">
								<h3><a href="work.html">{{ v.name }}</a></h3>
								<span>{{ v.description }}</span>
								<p class="icon">
									<span><a href="#"><i class="icon-share3"></i></a></span>
									<span><a href="#"><i class="icon-eye"></i> 100</a></span>
									<span><a href="#"><i class="icon-heart"></i> 49</a></span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 animate-box">
					<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a></p>
				</div>
			</div>
		</div>
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