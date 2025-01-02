<template>
  <section id="colorlib-hero" class="js-fullheight" data-section="colorlib-hero" style="margin-bottom: -200px;">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li>
          <div class="overlay"></div>
          <div class="container-fluid" style="margin-top: 150px;">
            <div class="row">
              <div class="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight" id="profile-section">    
				<div class="row">
					<div class="col-md-3">
						<div class="slider-text-inner js-fullheight">
							<img class="author-img" src="assets/images/profile-pic.png" style="width: 100%;border-radius: 100%;"/>
						</div>
					</div>
					<div class="col-md-9">
						<div class="desc">
						<h1><span style="color: #FF474C;">{{$t('name')}}</span></h1>
						<h4>{{$t('position')}}</h4>
						<div v-for="(v, i) in socialNetworks" :key="i" style="display: inline-block;padding: 0.375rem 0.75rem;white-space: nowrap;vertical-align: middle;">
							<template v-if="v.id=='EMAIL'">
								<span class="badge" @click="goToContactSiteOnClick(v.url)" style="cursor: 'pointer'">
									<font-awesome-icon size="2x" :icon="v.icon" :style="{ color: '#FF474C'}" /> 
									<template v-if="v.id=='EMAIL'">
									{{ ''+v.url }} 
									</template>
								</span>
								</template>
								<template v-else>
									<span class="badge" @click="goToContactSiteOnClick(v.url)" style="cursor: 'pointer'">
									<font-awesome-icon size="2x" :icon="v.icon" :style="{ color: '#FF474C'}" /> 
								</span>
								</template>
							</div>
						</div>
					</div>
				</div>
              </div>
            </div>
          </div>
        </li>
        </ul>
      </div>
  </section>
</template>
<style src="./profileSection.css"></style>
<script src="./profileSection.js"></script>