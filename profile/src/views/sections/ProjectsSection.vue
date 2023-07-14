<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <SectionTitle :title="title" :textSection="textSection" data-aos="fade-left"/>
        <div class="row d-flex">
            <template v-if="projects.length>0">
                <ProjectItem
                    data-aos="zoom-in" 
                    v-for="(v,i) in projects" 
                    :key="i" 
                    :item="v"
                    bgColor="#36394A"
                    :showButtonDetails="false"/>
            </template>
            <template v-else>
                <div class="row justify-content-center" style="text-align: center;">
                    <p>Aún no hay proyectos</p>
                </div>
            </template>
        </div>
        <div class="row d-flex">
            <div class="col-md-12 flexbox-align">
                <button class="btn btn-primary" @click="goToAllProjects()">
                    Ver todos los proyectos
                </button>
            </div>
        </div>
      </div>
    </section>
</template>
<style type="text/css">
    .projects-ul {
      display: flex;
      flex-direction: row;
    }

    .projects-li {
      flex: 1;
      display: inline-block;
      text-align: center;
    }
    #projects-section{
        /*background-color: #FFF;*/
    }
    .flexbox-align {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 200px;
      color: #333;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import ProjectItem from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "ProjectsSection",
    components: { ProjectItem, SectionTitle },
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.projects.name'),
            textSection: VueI18n.tc('pages.home.sections.projects.textSection'),
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    methods:{
        goToAllProjects(){
            this.$router.push('/projects').catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            });
        }
    },
    computed: {
        projects() {
            let elements = [];
            for (var i = 0; i < 3; i++) {
                elements[i]=projects_data[i]
            }
            return elements;
        }
    }
};
</script>
