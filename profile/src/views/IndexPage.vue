<template>
	<div>
		<HomeSection/>
		<AboutSection/>
		<SkillsSection/>
		<WorkExperiencesSection/>
		<ProjectsSection/>
		<ContactSection/>
	</div>
</template>
<script>
import HomeSection from '@/views/sections/HomeSection.vue'
import AboutSection from '@/views/sections/AboutSection.vue'
import SkillsSection from '@/views/sections/SkillsSection.vue'
import WorkExperiencesSection from '@/views/sections/WorkExperiencesSection.vue'
import ProjectsSection from '@/views/sections/ProjectsSection.vue'
import ContactSection from '@/views/sections/ContactSection.vue'
export default {
	name:'IndexPage',
	components:{HomeSection, AboutSection, SkillsSection, WorkExperiencesSection, ProjectsSection, ContactSection}
}
</script>