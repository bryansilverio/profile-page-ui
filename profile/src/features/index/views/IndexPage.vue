<template>
	<div>
		<HomeSection/>
		<SectionIntro/>
		<AboutSection/>
		<SkillsSection/>
		<WorkExperiencesSection/>
		<ProjectsSection/>
		<PostsSection/>
		<ContactSection/>
	</div>
</template>
<script>
import HomeSection from '@/features/index/sections/HomeSection.vue'
import SectionIntro from '@/features/index/sections/SectionIntro.vue'
import AboutSection from '@/features/index/sections/AboutSection.vue'
import SkillsSection from '@/features/index/sections/SkillsSection.vue'
import WorkExperiencesSection from '@/features/index/sections/WorkExperiencesSection.vue'
import ProjectsSection from '@/features/index/sections/ProjectsSection.vue'
import PostsSection from '@/features/index/sections/PostsSection.vue'
import ContactSection from '@/features/index/sections/ContactSection.vue'
export default {
	name:'IndexPage',
	components:{HomeSection, SectionIntro, AboutSection, SkillsSection, WorkExperiencesSection, ProjectsSection, PostsSection, ContactSection}
}
</script>