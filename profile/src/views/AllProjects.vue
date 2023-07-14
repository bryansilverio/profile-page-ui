<template>
    <section class="ftco-section" id="projects-section">
      <div class="container">
        <div class="row">
            <div class="col-lg-12" style="margin-top: 100px;">
                <h3 class="mb-4 mt-3">
                    <span 
                        class="title-text-color" 
                        style="font-size:3rem" 
                        data-aos="fade-down">
                        {{ 'Proyectos' }}
                    </span>
                </h3>
            </div>
            <div class="col-md-10">
                <hr>
            </div>
            <p>En esta sección se muestrán los proyectos en los que he participado dentro de las empresas en las que he elaborado, además de proyectos personales.
            </p>
        </div>
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
                    :item="v"
                    bgColor="#36394A"
                    :showButtonDetails="true"/>
            </template>
            <template v-else>
                <div class="col-md-12 flexbox-align">
                    <span>
                        Cargando los proyectos...
                    </span>
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
      text-align: left;
    }
    hr {
        margin-top: -1rem;
        margin-bottom: 1rem;
        border-top: 3px solid;
        color: #FF474C;
    }
    .title-text-color{
        color: #FF474C;
        font-size: 3rem;
        font-weight: 900;
    }
    .flexbox-align {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 200px;
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
            this.items=[]
            var thix = this
            setTimeout(function(){
                thix.options.showAll=false;
                thix.options.showCompanies=false;
                thix.options.showPersonal=false;
                 
                if(value==thix.OPTIONS_VALUES.ALL){
                    thix.options.showAll=true;
                    thix.options.showCompanies=false;
                    thix.options.showPersonal=false;
                    thix.items=thix.projects;
                    return;
                }
                if(value==thix.OPTIONS_VALUES.COMPANY_PROJECT){
                    thix.options.showAll=false;
                    thix.options.showCompanies=true;
                    thix.options.showPersonal=false;
                    thix.items=thix.projects.filter(x=>x.projectType==thix.OPTIONS_VALUES.COMPANY_PROJECT);
                    return;
                }
                if(value==thix.OPTIONS_VALUES.PERSONAL_PROJECT){
                    thix.options.showAll=false;
                    thix.options.showCompanies=false;
                    thix.options.showPersonal=true;
                    thix.items=thix.projects.filter(x=>x.projectType==thix.OPTIONS_VALUES.PERSONAL_PROJECT);
                    return;
                }
            },500);
        }
    },
    computed: {
        projects() {
            return projects_data
        }
    }
};
</script>
