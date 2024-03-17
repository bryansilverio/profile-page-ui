<template>
  <section id="colorlib-hero" class="js-fullheight" data-section="home">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li>
          <div class="overlay"></div>
          <div class="container-fluid" style="margin-top: 100px;">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight">
                <div class="slider-text-inner js-fullheight">
                  <div class="desc">
                    <h1>{{$t('greeting')}} <br>{{$t('name')}}</h1>
                    <h3>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h3>
                    <p><a class="btn btn-primary btn-learn">Download CV <i class="icon-download4"></i></a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2" v-for="(v, i) in socialNetworks" :key="i">
                <font-awesome-icon @click="goToContactSiteOnClick(v.url)" size="2x" :icon="v.icon" :style="{ color: '#FF474C', cursor: 'pointer' }" />
              </div>
            </div>
          </div>
        </li>
        </ul>
      </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default defineComponent({
  name: "About",
  mixins: [
    listSocialNetworkService,
  ],
  methods: {
    goToContactSectionOnClick() {
      window.open('./#contact', '_blank')
    },
    goToContactSiteOnClick(url) {
      window.open(url, '_blank')
    },
    openCVOnClick() {
      window.open('https://drive.google.com/open?id=13XKEMTr0e6hb04Vgx3fOgIVqf1roMEgC&usp=drive_fs', '_blank')
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    }
  }
});
</script>