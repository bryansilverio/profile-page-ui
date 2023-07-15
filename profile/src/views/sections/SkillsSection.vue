<template>
    <section class="ftco-section" id="skills-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection" data-aos="fade-left"/>
            <div class="row">
                <Skillitem 
                    v-for="(v,i) in listSkills" 
                    :key="i*2" 
                    :item="v"
                    data-aos="zoom-in"/>
            </div>
            <div class="row d-flex">
                <div class="col-md-12 flexbox-align">
                    <button class="btn btn-primary" @click="goToSkillsPage()">
                        Ver todos los conocimientos &#10140;
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import listSkillsServices from "@/services/listSkillsServices.js"
import Skillitem from "@/components/_Shared/SkillItem.vue";
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "SkillsSection",
    components: {Skillitem, SectionTitle },
    mixins:[listSkillsServices],
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.skills.name'),
            textSection: VueI18n.tc('pages.home.sections.skills.textSection'),
            frontend: VueI18n.tc('pages.skills.frontend'),
            backend: VueI18n.tc('pages.skills.backend'),
            devtools: VueI18n.tc('pages.skills.devtools'),
            PRINCIPAL_VALUES:{
                PRINCIPAL: "PRINCIPAL"
            }
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
    methods:{
        goToSkillsPage(){
            this.$router.push('/about-me').catch(error => {
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
        listSkills() {
            return this.listPrincipalSkillsServices(this.PRINCIPAL_VALUES.PRINCIPAL);
        }
    },
};
</script>
