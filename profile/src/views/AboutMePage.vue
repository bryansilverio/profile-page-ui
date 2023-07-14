<template>
    <section class="ftco-section">
      <div class="container">
        <div class="row">
            <div class="col-lg-12" style="margin-top: 100px;">
                <h3 class="mb-4 mt-3">
                    <span 
                        class="title-text-color" 
                        style="font-size:3rem" 
                        data-aos="fade-left">
                        {{ 'Sobre mí' }}
                    </span>
                </h3>
            </div>
            <div class="col-md-10">
                <hr>
            </div>
        </div>
        <div class="row d-flex justify-content-start">
            <div class="col-md-12" data-aos="fade-right">
                <p v-for="(v,i) in aboutDescription" :key="i">{{v}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12" style="margin-top: 100px;">
                <h3 class="mb-4 mt-3">
                    <span 
                        class="title-text-color" 
                        style="font-size:3rem" 
                        data-aos="fade-left">
                        {{ 'Conocimientos' }}
                    </span>
                </h3>
            </div>
            <div class="col-md-10">
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" data-aos="fade-left">
                <ul class="skills-ul">
                    <li class="skills-li">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showAll?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.ALL)">
                            Todos
                        </button>
                    </li>
                    <li class="skills-li">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showFrontend?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.FRONTEND)">
                            Frontend
                        </button>
                    </li>
                    <li class="skills-li">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showBackend?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.BACKEND)">
                            Backend
                        </button>
                    </li>
                    <li class="skills-li">
                        <button 
                            class="btn btn-outline-white btn-block"
                            :class="options.showDevtools?'btn-primary':'btn-white'"
                            @click="onChangeOption(OPTIONS_VALUES.DEVTOOLS)">
                            Devtools
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <template v-if="options.showAll">
                <Skillitem 
                    v-for="(v,i) in frontendSkills" 
                    :key="i*2" 
                    :item="v"
                    data-aos="zoom-in"/>
                <Skillitem 
                    v-for="(v,i) in backendSkills" 
                    :key="i*20" 
                    :item="v"
                    data-aos="zoom-in"/>
                <Skillitem 
                    v-for="(v,i) in devtoolsSkills" 
                    :key="i*200" 
                    :item="v"
                    data-aos="zoom-in"/>
            </template>
            <template v-else-if="options.showFrontend">
                <Skillitem 
                    v-for="(v,i) in frontendSkills" 
                    :key="i*2" 
                    :item="v"
                    data-aos="zoom-in"/>
            </template>
            <template v-else-if="options.showBackend">
                <Skillitem 
                    v-for="(v,i) in backendSkills" 
                    :key="i*20" 
                    :item="v"
                    data-aos="zoom-in"/>
            </template>
            <template v-else-if="options.showDevtools">
                <Skillitem 
                    v-for="(v,i) in devtoolsSkills" 
                    :key="i*200" 
                    :item="v"
                    data-aos="zoom-in"/>
            </template>
        </div>
      </div>
    </section>
</template>
<style type="text/css">
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
    .skills-ul {
      display: flex;
      flex-direction: row;
    }

    .skills-li {
      flex: 1;
      display: inline-block;
      text-align: center;
    }
</style>
<script type="text/javascript">
import aboutData from "@/data/about.json";
import VueI18n from '@/translation/i18n'
import listSkillsServices from "@/services/listSkillsServices.js"
import Skillitem from "@/components/_Shared/SkillItem.vue";

export default{
    name:'AboutMePage',
    components:{Skillitem},
    mixins:[listSkillsServices],
    data(){
        return{
            aboutDescription:[],
            title: VueI18n.tc('pages.home.sections.skills.name'),
            textSection: VueI18n.tc('pages.home.sections.skills.textSection'),
            frontend: VueI18n.tc('pages.skills.frontend'),
            backend: VueI18n.tc('pages.skills.backend'),
            devtools: VueI18n.tc('pages.skills.devtools'),
            options:{
                showAll:false,
                showFrontend:false,
                showBackend:false,
                showDevtools:false
            },
            OPTIONS_VALUES:{
                ALL:"ALL",
                FRONTEND:"FRONTEND",
                BACKEND:"BACKEND",
                DEVTOOLS:"DEVTOOLS"
            }
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.onChangeOption(this.OPTIONS_VALUES.ALL);
        this.aboutDescription = this.splitPhrasesDescriptions(aboutData.description)
    },
    methods: {
        splitPhrasesDescriptions(value) {
            let values = []
            if (value) {
                values = value.split(".");
            }
            return values
        },
        onChangeOption(value='ALL'){
            this.options.showAll=false;
            this.options.showFrontend=false;
            this.options.showBackend=false;
            this.options.showDevtools=false;
             
            if(value==this.OPTIONS_VALUES.ALL){
                this.options.showAll=true;
                this.options.showFrontend=false;
                this.options.showBackend=false;
                this.options.showDevtools=false;
            }
            if(value==this.OPTIONS_VALUES.FRONTEND){
                this.options.showAll=false;
                this.options.showFrontend=true;
                this.options.showBackend=false;
                this.options.showDevtools=false;
            }
            if(value==this.OPTIONS_VALUES.BACKEND){
                this.options.showAll=false;
                this.options.showFrontend=false;
                this.options.showBackend=true;
                this.options.showDevtools=false;
            }
            if(value==this.OPTIONS_VALUES.DEVTOOLS){
                this.options.showAll=false;
                this.options.showFrontend=false;
                this.options.showBackend=false;
                this.options.showDevtools=true;
            }
        }
    },
    computed: {
        frontendSkills() {
            return this.listSkillsServices(this.OPTIONS_VALUES.FRONTEND);
        },
        backendSkills() {
            return this.listSkillsServices(this.OPTIONS_VALUES.BACKEND);
        },
        devtoolsSkills() {
            return this.listSkillsServices(this.OPTIONS_VALUES.DEVTOOLS);
        },
    }
}

</script>