<template>
  <section id="proyectos" data-section="proyectos" class="section undefined w-full mx-auto lg:w-[740px] pb-24">
    <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
      <CodeIcon />
      Proyectos
    </h2>
    <article v-for="(v, i) in projects" :Key="i">
      <h3 class="text-2xl font-semibold text-yellow-200 mb-2">{{ v.name }}</h3>
      <p class="text-lg mb-4 text-pretty text-gray-200">{{ v.description }}</p>
      <NextButton :text="'Saber más...'" :url="v.url" />
    </article>
  </section>
</template>
<script>
import NextButton from '@/components/NextButton.vue';
import CodeIcon from '@/components/icons/CodeIcon.vue';
import listProjectsService from '@/services/projects/listProjectsService';
export default {
  name: "Projects",
  components: {
    NextButton,
    CodeIcon
  },
  mixins: [
    listProjectsService
  ],
  computed: {
    projects() {
      return this.executelistProjects();
    }
  }
};
</script>