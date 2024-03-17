<template>
  <!--
  <section id="contact" data-aos="fade-left">
    <p class="section__text__p1">{{ $t('sections.contactText') }}</p>
    <h1 class="title">{{ $t('sections.contact') }}</h1>
    <div class="contact-info-upper-container">
      <div class="contact-info-container" v-for="(v, i) in socialNetworks" :key="i">
        <font-awesome-icon @click="goToSocialNetworkSiteOnClick(v.url)" size="2x"
          :icon="v.icon" :style="{ color: '#FF474C', cursor: 'pointer' }" />
        <p>{{ v.name }}</p>
      </div>
    </div>
  </section>
-->
	<section class="colorlib-contact" data-section="contact" id="contact">
		<div class="colorlib-narrow-content">
			<div class="row">
				<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span class="heading-meta">{{ $t('sections.contact') }}</span>
					<h2 class="colorlib-heading">{{ $t('sections.contactText') }}</h2>
				</div>
			</div>
			<div class="row row-pt-md">
				<div class="col-md-4 text-center animate-box" v-for="(v, i) in socialNetworks" :key="i">
					<div class="services color-1">
						<span class="icon">
							<font-awesome-icon @click="goToSocialNetworkSiteOnClick(v.url)" 
							size="2x"
							:icon="v.icon" 
							:style="{ color: '#fff', cursor: 'pointer' }" />
						</span>
						<div class="desc">
							<a :href="v.url" target="_blank">{{ v.name }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default {
  name: "Projects",
  mixins: [
    listSocialNetworkService,
  ],
  methods: {
    goToSocialNetworkSiteOnClick(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    }
  }
};
</script>