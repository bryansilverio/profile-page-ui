<template>
	<section class="colorlib-experience" data-section="experience" id="experience">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span class="heading-meta">{{ $t('sections.experience') }}</span>
					<h2 class="colorlib-heading animate-box">{{ $t('sections.experienceText') }}</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="timeline-centered">

						<article class="timeline-entry animate-box" data-animate-effect="fadeInLeft" v-for="(v, i) in experiences" :key="i">
							<div class="timeline-entry-inner">
								<div class="timeline-icon color-1">
									<font-awesome-icon icon="fa-solid fa-briefcase" :style="{ color: '#fff' }" />
								</div>
								<div class="timeline-label">
									<h2 style="font-weight: bold;">
										<span style="color: black;">{{ v.position }}</span> 
										<span style="color: black;"> en </span> 
										<a :href="v.link" target="_blank">
											<span style="color: #FF474C; opacity: 1;"> {{ v.company }} </span>
										</a>
										<span> - </span>
										<span style="color: black;">{{ v.date }}</span>
									</h2>
									<p style="color: black;">{{ v.content }}</p>
								</div>
							</div>
						</article>

						<article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
							<div class="timeline-entry-inner">
								<div class="timeline-icon color-none">
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { defineComponent } from 'vue'
import listWorkExperiencesService from "@/services/experience/listWorkExperiencesService.js"
export default defineComponent({
    name: "Experience",
    mixins: [listWorkExperiencesService],
    methods: {
        goToProjectsSectionOnClick() {
            window.open('./#projects', '_blank')
        }
    },
    computed: {
        experiences() {
            return this.executeListWorkExperiences();
        }
    }
});
</script>