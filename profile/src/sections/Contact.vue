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
			<div class="row">
				<div class="col-md-5">
					<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-globe-outline"></i>
						</div>
						<div class="colorlib-text">
							<p><a href="#">info@domain.com</a></p>
						</div>
					</div>

					<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-map"></i>
						</div>
						<div class="colorlib-text">
							<p>198 West 21th Street, Suite 721 New York NY 10016</p>
						</div>
					</div>

					<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
						<div class="colorlib-icon">
							<i class="icon-phone"></i>
						</div>
						<div class="colorlib-text">
							<p><a href="tel://">+123 456 7890</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-7 col-md-push-1">
					<div class="row">
						<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
							<form action="">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Name">
								</div>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Email">
								</div>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Subject">
								</div>
								<div class="form-group">
									<textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
								</div>
								<div class="form-group">
									<input type="submit" class="btn btn-primary btn-send-message" value="Send Message">
								</div>
							</form>
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