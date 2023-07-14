<template>
	<footer class="ftco-footer ftco-section">
		<div class="container">
			<div class="row">
				<div class="col-md">
					<div class="ftco-footer-widget mb-6">
						<h2 class="ftco-heading-3">Sobre mí</h2>
						<p style="font-size: medium;">
							Mi nombre es Bryan Silverio, soy desarrollador de software.
						</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft">
							<li v-for="(v,i) in contactDetails" :key="i">
								<a :href="v.url" target="_blank">
									<span :class="v.icon" style="font-size: 17px;"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-6">
						<h2 class="ftco-heading-3">Contacto</h2>
						<div class="block-23 mb-3">
							<ul>
								<li>
									<a :href="'mailto:'+about.contactDetails.email">
										<span class="icon icon-envelope"></span>
										<span class="text" style="font-size: medium;">
											{{about.contactDetails.email}}
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<p>Copyright &copy;{{new Date().getFullYear()}} Bryan Silverio - Todos los derechos reservados 
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>
<style type="text/css">
	.ftco-footer{
		background-color: #b63842;
	}
</style>
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