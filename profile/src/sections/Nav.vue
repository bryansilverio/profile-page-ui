<template>
	<nav id="colorlib-main-menu" role="navigation" class="navbar">
		<!--
		<span style="color: #FF474C;text-align: end">B</span><span style="color: white;">SILVERIO</span>
		-->
		<div id="navbar" class="collapse">
			<ul>
				<li><a href="#colorlib-hero" data-nav-section="colorlib-hero" style="color: white;">🏠 {{ $t('menu.home') }}</a></li>
				<li><a href="#about" data-nav-section="about" style="color: white;">{{ $t('menu.aboutMe') }}</a></li>
				<li><a href="#skills" data-nav-section="skills" style="color: white;">{{ $t('menu.skills') }}</a></li>
				<li><a href="#experience" data-nav-section="experience" style="color: white;">{{ $t('menu.experience')
						}}</a></li>
				<li><a href="#projects" data-nav-section="work" style="color: white;">{{ $t('menu.projects') }}</a></li>
				<li><a href="#contact" data-nav-section="contact" style="color: white;">{{ $t('menu.contact') }}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style>
.navbar{
	position: fixed;
	left: 30%;
	background-color: #050505;
    border-radius: 9999px;
	border-color: #FF474C;
	z-index: 99;
	line-height: 2rem;

	@media screen and (max-width: 768px){
		z-index: 99;
		background-color: #050505;
		border-radius: 0px;
		border-color: #050505;
	}
}
#navbar > ul {
	display: flex;
	/* Hacemos flex al ul */
	justify-content: center;
	/* centramos en el eje horizontal*/
	justify-content: space-evenly;
	/* Aplicamos separación a los elementos dentro del ul */
	margin: 0;
	padding: 0;
	list-style-type: none;
	overflow: hidden;

	@media screen and (max-width: 768px){
		display: block;
	}
}
.collapse{
	display: block;
	
	@media screen and (max-width: 768px){
		display: none;
	}
}
#navbar > ul > li{
	padding: 18px;
}
</style>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: "Nav"
});
</script>