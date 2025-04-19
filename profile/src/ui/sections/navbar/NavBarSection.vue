<style src="./navbarSection.css"></style>
<script src="./navbarSection.js"></script>
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