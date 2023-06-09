<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <SectionTitle :title="title" :textSection="textSection" data-aos="fade-left"/>
        <div class="row">
            <div class="col-md-12">
                <ul class="projects-ul">
                    <li class="projects-li" data-aos="zoom-in">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showAll?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.ALL)">
                            Todos
                        </button>
                    </li>
                    <li class="projects-li" data-aos="zoom-in">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showCompanies?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.COMPANY_PROJECT)">
                            Participación en empresas
                        </button>
                    </li>
                    <li class="projects-li" data-aos="zoom-in">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showPersonal?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.PERSONAL_PROJECT)">
                            Personales
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row d-flex">
            <template v-if="items.length>0">
                <ProjectItem
                    data-aos="zoom-in" 
                    v-for="(v,i) in items" 
                    :key="i" 
                    :item="v"/>
            </template>
            <template v-else>
                <div class="row justify-content-center" style="text-align: center;">
                    <p>Aún no hay proyectos</p>
                </div>
            </template>
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
</style>
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
            textSection: VueI18n.tc('pages.home.sections.projects.textSection'),
            OPTIONS_VALUES:{
                ALL:"ALL",
                COMPANY_PROJECT:"COMPANY_PROJECT",
                PERSONAL_PROJECT:"PERSONAL_PROJECT"
            },
            options:{
                showAll:false,
                showCompanies:false,
                showPersonal:false
            },
            items:[]
        }
    },
    created() {
        this.onChangeOption(this.OPTIONS_VALUES.ALL);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    methods:{
        onChangeOption(value='ALL'){
            this.options.showAll=false;
            this.options.showCompanies=false;
            this.options.showPersonal=false;
             
            if(value==this.OPTIONS_VALUES.ALL){
                this.options.showAll=true;
                this.options.showCompanies=false;
                this.options.showPersonal=false;
                this.items=this.projects;
                return;
            }
            if(value==this.OPTIONS_VALUES.COMPANY_PROJECT){
                this.options.showAll=false;
                this.options.showCompanies=true;
                this.options.showPersonal=false;
                this.items=this.projects.filter(x=>x.projectType==this.OPTIONS_VALUES.COMPANY_PROJECT);
                return;
            }
            if(value==this.OPTIONS_VALUES.PERSONAL_PROJECT){
                this.options.showAll=false;
                this.options.showCompanies=false;
                this.options.showPersonal=true;
                this.items=this.projects.filter(x=>x.projectType==this.OPTIONS_VALUES.PERSONAL_PROJECT);
                return;
            }
        }
    },
    computed: {
        projects() {
            return projects_data
        }
    }
};
</script>
