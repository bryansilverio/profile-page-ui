<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-5">
          <div class="col-md-7 heading-section text-center">
            <h1 class="big big-2">{{title}}</h1>
            <h2 class="mb-4">{{title}}</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="row d-flex">
            <ProjectItem v-for="(v,i) in projects" :key="i" :item="v"/>
        </div>
      </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import ProjectItem from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
export default {
    name: "Projects",
    components: { ProjectItem },
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.projects.name')
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    computed: {
        projects() {
            return projects_data
        }
    }
};
</script>
