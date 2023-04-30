<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <div class="row justify-content-center py-5 mt-5">
          <div class="col-md-7 heading-section text-center">
            <h1 class="mb-4 title-text-color-projects">{{title}}</h1>
            <p>{{textSection}}</p>
          </div>
        </div>
        <div class="row d-flex">
            <ProjectItem v-for="(v,i) in projects" :key="i" :item="v"/>
        </div>
      </div>
    </section>
</template>
<style>
    .title-text-color-projects{
        color: #FF474C;
        font-size: 4vw;
        font-weight: 900;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import ProjectItem from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
export default {
    name: "Projects",
    components: { ProjectItem },
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.projects.name'),
            textSection: VueI18n.tc('pages.home.sections.projects.textSection')
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
