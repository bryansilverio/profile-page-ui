<template>
  <section id="colorlib-hero" class="js-fullheight" data-section="colorlib-hero" style="margin-bottom: -200px;">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li>
          <div class="overlay"></div>
          <div class="container-fluid" style="margin-top: 200px;">
            <div class="row">
              <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight">            
                <div class="slider-text-inner js-fullheight">
                  <img class="author-img" src="assets/images/profile-pic.png" style="width: 15%;border-radius: 100%;"/>
                  <div class="desc">
                    <h1><span style="font-size: medium;">{{$t('greeting')}}</span> <br><span style="color: #FF474C;">{{$t('name')}}</span></h1>
                    <h4>{{$t('position')}}</h4>
                    <ul class="socialNetworks">
                      <li v-for="(v, i) in socialNetworks" :key="i">
                        <font-awesome-icon
                          @click="goToContactSiteOnClick(v.url)" size="2x" :icon="v.icon" :style="{ color: '#FF474C', cursor: 'pointer' }" />
                      </li>
                    </ul>
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
<style>
.socialNetworks {
  display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
}
</style>
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