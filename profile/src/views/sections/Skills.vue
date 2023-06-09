<template>
    <section class="ftco-section" id="skills-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection" data-aos="fade-left"/>
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
<script>
import VueI18n from '@/translation/i18n'
import skills_data from "@/data/skills.json";
import Skillitem from "@/components/_Shared/SkillItem.vue";
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "About",
    components: {Skillitem, SectionTitle },
    data() {
        return {
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
    methods:{
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
    created() {
        this.onChangeOption(this.OPTIONS_VALUES.ALL);
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
    computed: {
        frontendSkills() {
            return skills_data.filter((x) => x.type == "FRONTEND");
        },
        backendSkills() {
            return skills_data.filter((x) => x.type == "BACKEND");
        },
        devtoolsSkills() {
            return skills_data.filter((x) => x.type == "DEVTOOLS");
        },
    },
};
</script>
