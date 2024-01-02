<template>
  <section id="contacto" data-section="contacto" class="section undefined w-full mx-auto lg:w-[740px] pb-24"
    data-aos="fade-left">
    <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
      <CodeIcon />
      Contacto
    </h2>
    <article class="flex gap-4 flex-wrap">
      <ul class="inline-flex justify-center items-center gap-x-2">
        <li v-for="(v, i) in socialNetworks" :Key="i">
          <p class="text-lg mb-4 text-pretty text-gray-200">
            <a :href="v.url" target="_blank">
              <font-awesome-icon :icon="v.icon" class="fa-2x" style="color: rgb(30 58 138,1);" />
            </a>
          </p>
        </li>
      </ul>
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
<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.contact-icons {
  grid-column: 2/3;
  grid-row: 1;
}
</style>