<template>
	<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
		<div class="text-center">
			<span style="color: #FF474C;">B</span><span style="color: white;">SILVERIO</span>
			<div class="author-img" style="background-image: url(assets/images/profile-pic.png);"></div>
			<h1 id="colorlib-logo" ><a href="/" style="color: #FF474C;">{{$t('name')}}</a></h1>
			<span class="position"><a href="#">{{$t('position')}}</a></span>
		</div>
		<nav id="colorlib-main-menu" role="navigation" class="navbar">
			<div id="navbar" class="collapse">
				<ul>
					<li><a href="#" data-nav-section="home">{{ $t('menu.home') }}</a></li>
					<li><a href="#about" data-nav-section="about">{{ $t('menu.aboutMe') }}</a></li>
					<li><a href="#" data-nav-section="services">Services</a></li>
					<li><a href="#skills" data-nav-section="skills">Skills</a></li>
					<li><a href="#" data-nav-section="education">Education</a></li>
					<li><a href="#experience" data-nav-section="experience">{{ $t('menu.experience') }}</a></li>
					<li><a href="#projects" data-nav-section="work">{{ $t('menu.projects') }}</a></li>
					<li><a href="#" data-nav-section="blog">Blog</a></li>
					<li><a href="#contact" data-nav-section="contact">{{ $t('menu.contact') }}</a></li>
				</ul>
			</div>
		</nav>

		<div class="colorlib-footer">
			<p>Copyright &#169;
				{{ new Date().getFullYear() }}
				<a href="https://bryansilverio.com/" class="hover:underline"> Bryan Silverio</a>.
				All Rights Reserved.
			</p>
			<ul>
				<li><a href="#"><i class="icon-facebook2"></i></a></li>
				<li><a href="#"><i class="icon-twitter2"></i></a></li>
				<li><a href="#"><i class="icon-instagram"></i></a></li>
				<li><a href="#"><i class="icon-linkedin2"></i></a></li>
			</ul>
		</div>

	</aside>
</template>

<style>
.logo>span {
	font-weight: 900;
	font-size: 24px;
	text-transform: uppercase;
}
</style>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
	name: "NavDesktop"
});
</script>