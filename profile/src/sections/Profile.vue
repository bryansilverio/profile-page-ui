<template>
  <section id="profile">
    <div class="section__text" style="text-align: left">
      <p class="section__text__p1">{{ $t('greeting') }}</p>
      <h1 class="title">{{ $t('name') }}</h1>
      <p class="section__text__p2">{{ $t('position') }}</p>
      <div class="btn-container">
        <button class="btn btn-color-1" @click="openCVOnClick()">
          {{ $t('buttons.downloadCV') }}
        </button>
        <button class="btn btn-color-1" onclick="goToContactSectionOnClick()">
          {{ $t('menu.contact') }}
        </button>
      </div>
      <div id="socials-container">
        <font-awesome-icon @click="goToContactSiteOnClick(v.url)" v-for="(v, i) in socialNetworks" :key="i" size="2x"
          :icon="v.icon" :style="{ color: '#FF474C', cursor: 'pointer' }" />
      </div>
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