<template>
	<footer class="ftco-footer ftco-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Sobre mí</h2>
						<p>Mi nombre es Bryan Silverio, soy desarrollador de software.</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
							<li v-for="(v,i) in contactDetails" :key="i">
								<a :href="v.url" target="_blank"><span :class="v.icon"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4 ml-md-4">
						<h2 class="ftco-heading-2">Secciones</h2>
						<ul class="list-unstyled">
							<li>
								<a @click="goToPage('#home-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.home.name}}
								</a>
							</li>
							<li>
								<a @click="goToPage('#about-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.about.name}}
								</a>
							</li>
							<li>
								<a @click="goToPage('#resume-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.experience.name}}
								</a>
							</li>
							<li>
								<a @click="goToPage('#skills-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.skills.name}}
								</a>
							</li>
							<li>
								<a @click="goToPage('#projects-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.projects.name}}
								</a>
							</li>
							<li>
								<a @click="goToPage('#contact-section')">
									<span class="icon-long-arrow-right mr-2"></span>{{menu.contact.name}}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Contacto</h2>
						<ul class="list-unstyled">
							<li v-for="(v,i) in contactDetails" :key="i">
								<a :href="v.url" target="_blank">
									<span class="icon-long-arrow-right mr-2"></span>{{v.name}}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2">Have a Questions?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li>
									<span class="icon icon-map-marker"></span>
									<span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
								</li>
								<li>
									<a href="#">
										<span class="icon icon-phone"></span>
										<span class="text">+2 392 3929 210</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="icon icon-envelope"></span>
										<span class="text">{{about.contactDetails.email}}</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<p>Copyright &copy;{{new Date().getFullYear()}}
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
import VueI18n from '@/translation/i18n'
import aboutData from '@/data/about.json'
import contactDetailsData from '@/data/contactDetails.json'
export default{
	name:'Footer',
	data(){
		return{
			menu: {
				home: {
					name: VueI18n.tc('menu.home'),
					icon: 'icon-home'
				},
				about: {
					name: VueI18n.tc('menu.aboutMe'),
					icon: 'icon-user'
				},
				skills: {
					name: VueI18n.tc('menu.skills'),
					icon: 'icon-code'
				},
				projects: {
					name: VueI18n.tc('menu.projects'),
					icon: 'icon-screen'
				},
				experience: {
					name: VueI18n.tc('menu.experience'),
					icon: 'icon-briefcase'
				},
				contact: {
					name: VueI18n.tc('menu.contact'),
					icon: 'icon-envelope'
				}
			}
		}
	},
	computed:{
		about(){
			return aboutData;
		},
		contactDetails(){
			return contactDetailsData
		}
	},
	methods: {
		goToPage(url) {
			if(this.$route.path=='/'){
				window.location.href=url;
			}else{
				this.$router.push('/')
			}
		}
	}
}
</script>