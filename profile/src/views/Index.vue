<template>
	<div>
		<Home/>
		<About/>
		<Skills/>
		<WorkExperience/>
		<Projects/>
		<Contact/>
	</div>
</template>
<script>
import Home from '@/views/sections/Home.vue'
import About from '@/views/sections/About.vue'
import Skills from '@/views/sections/Skills.vue'
import WorkExperience from '@/views/sections/WorkExperience.vue'
import Projects from '@/views/sections/Projects.vue'
import Contact from '@/views/sections/Contact.vue'
export default {
	name:'Index',
	components:{Home,About, Skills, WorkExperience, Projects, Contact}
}
</script>