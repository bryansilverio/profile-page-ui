<template>
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