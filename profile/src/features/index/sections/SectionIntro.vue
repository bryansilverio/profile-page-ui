<template>
	<section class="ftco-section mt-5" style="background-color: #36394A;">
		<div class="container">
			<div class="row">
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#about-section')">Sobre mi</span>
				</div>
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#skills-section')">Conocimientos</span>
				</div>
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#resume-section')">Experiencia</span>
				</div>
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#projects-section')">Proyectos</span>
				</div>
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#posts-section')">Ultimos posts</span>
				</div>
				<div class="col-md-2 section-item" data-aos="fade-left">
					<span class="section-name" @click="goToSection('#contact-section')">Contacto</span>
				</div>
			</div>
		</div>
	</section>
</template>
<style type="text/css">
	.section-name{
		font-weight: bold;
	}
	.section-item{
		cursor: pointer;
	}
	.section-item:hover{
		color: #FF474C;
	}
</style>
<script type="text/javascript">
export default{
	name:"SectionIntro",
	methods:{
		goToSection(url){
			window.location.href=url;
		}
	},
	created(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}
</script>