<script src="./aboutSection.js"></script>
<style src="./aboutSection.css"/>
<template>
  <section class="colorlib-about" data-section="about" id="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
			<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
				<div class="col-md-12">
					<div class="about-desc">
						<h2 class="colorlib-heading">{{ $t('sections.aboutMe') }}</h2>
						<span v-html="$t('about')"></span>
					</div>
				</div>
			</div>	
        </div>
      </div>
    </div>
  </section>
</template>