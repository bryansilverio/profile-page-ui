<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <SectionTitle :title="title" :textSection="textSection"/>
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
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "Projects",
    components: { ProjectItem, SectionTitle },
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
