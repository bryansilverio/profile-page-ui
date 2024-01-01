<template>
  <section id="contacto" data-section="contacto" class="section undefined w-full mx-auto lg:w-[740px] pb-24">
    <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
      <CodeIcon />
      Contacto
    </h2>
    <article v-for="(v, i) in socialNetworks" :Key="i">
      <p class="text-lg mb-4 text-pretty text-gray-200">
        <a :href="v.url" target="_blank"><i :class="v.icon"></i>{{ v.name }}</a>
      </p>
    </article>
  </section>
</template>
<script>
import CodeIcon from '@/components/icons/CodeIcon.vue';
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default {
  name: "Projects",
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
  }
};
</script>