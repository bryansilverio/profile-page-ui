<script src="./contactSection.js"></script>
<template>
	<section class="colorlib-contact" data-section="contact" id="contact">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<h2 class="colorlib-heading">{{ $t('sections.contact') }}</h2>
				</div>
			</div>
			<div class="row row-pt-md">
				<div class="col-md-4 text-center animate-box" v-for="(v,i) in socialNetworks" :key="i">
					<div class="services color-1 text-center">
						<span class="icon">
							<font-awesome-icon 
							size="2x"
							:icon="v.icon" 
							:style="{ color: '#fff', cursor: 'pointer' }" />
						</span>
						<div class="desc">
							<a v-if="v.id=='EMAIL'" :href="'mailto:'+v.url" target="_blank">{{ v.url }}</a>
							<a v-else :href="v.url" target="_blank">{{ v.name }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>