<template>
	<section class="colorlib-work" data-section="projects" id="projects">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span class="heading-meta">{{ $t('sections.projects') }}</span>
					<h2 class="colorlib-heading animate-box">{{ $t('sections.projectsText') }}</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft" v-for="(v, i) in projects" :key="i">
					<div class="project">
						<div class="desc">
							<div class="con">
								<h3><a>{{ v.name }}</a></h3>
								<span>{{ v.description }}</span>
								<p class="icon">
									<span v-if="v.showRepository"><a href="#" target="_blank"><i class="icon-eye"></i> Github</a></span>
									<span v-if="v.showSite"><a :href="v.url" target="_blank"><i class="icon-heart"></i> Documentación</a></span>
								</p>
							</div>
						</div>
					</div>
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