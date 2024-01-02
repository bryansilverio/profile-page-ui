<template>
  <section id="sobre-mi" data-section="sobre-mi" class="section undefined w-full mx-auto lg:w-[740px] pb-24"
    data-aos="fade-right">
    <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
      <CodeIcon />
      Sobre mí
    </h2>
    <article>
      <div class="wrapper">
        <div class="about-cover">
          <img class="rounded-full size-20 mb-4" src="/assets/images/cover.png" alt="bsilverio photo">
        </div>
        <div class="about-text">
          <p class="text-lg mb-4 text-pretty text-gray-200">
            {{ $t('about') }}
          </p>
        </div>
      </div>

    </article>
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

import CodeIcon from '@/components/icons/CodeIcon.vue';
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default defineComponent({
  name: "About",
  components: {
    CodeIcon
  },
  mixins: [
    listSocialNetworkService,
  ],
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
});
</script>
<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.about-cover {
  grid-column: 1;
  grid-row: 1;
}

.about-text {
  grid-column: 2/4;
  grid-row: 1;
}
.size-20 {
    width: 15rem;
    height: 15rem
}
</style>