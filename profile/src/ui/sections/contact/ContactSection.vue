<template>
	<section class="colorlib-contact" data-section="contact" id="contact">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span class="heading-meta">{{ $t('sections.contact') }}</span>
					<h2 class="colorlib-heading">{{ $t('sections.contactText') }}</h2>
				</div>
			</div>
			<div class="row row-pt-md">
				<div class="col-md-4"></div>
				<div class="col-md-4 text-center animate-box" v-if="socialNetwork">
					<div class="services color-1 text-center">
						<span class="icon">
							<font-awesome-icon 
							size="2x"
							:icon="socialNetwork.icon" 
							:style="{ color: '#fff', cursor: 'pointer' }" />
						</span>
						<div class="desc">
							<a :href="'mailto:'+socialNetwork.url" target="_blank">{{ socialNetwork.url }}</a>
						</div>
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
		</div>
	</section>
</template>
<script src="./contactSection.js"></script>