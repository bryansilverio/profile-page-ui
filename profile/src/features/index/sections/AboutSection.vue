<template>
    <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
        <div class="container">
            <SectionTitle :title="title" data-aos="fade-right"/>
            <div class="row d-flex justify-content-start">
                <div class="col-md-12" data-aos="fade-right">
                    <p v-for="(v,i) in aboutDescription" :key="i">{{v}}</p>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-12 flexbox-align">
                    <button class="btn btn-primary" @click="goToAboutMePage()">
                        Ver más sobre mí &#10140;
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
//Services
import findShortAboutDescriptionService from "@/features/index/services/findShortAboutDescriptionService.js";

//Components
import SectionTitle from '@/components/shared/SectionTitle.vue'

export default {
    name: "AboutSection",
    components:{SectionTitle},
    mixins:[findShortAboutDescriptionService],
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.about.name'),
            name: VueI18n.tc('title'),
            profile: VueI18n.tc('profile'),
            description: {
                short: VueI18n.tc('pages.about.description.short'),
                long: VueI18n.tc('pages.about.description.long'),
            },
            btnDownloadCv:VueI18n.tc('common.btnDownloadCV'),
            lbName:VueI18n.tc('common.lbName'),
            lbEmail:VueI18n.tc('common.lbEmail'),
            aboutDescription:[]
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.aboutDescription = this.splitPhrasesDescriptions(this.executeFindShortAboutDescription())
    },
    methods: {
        splitPhrasesDescriptions(value) {
            let values = []
            if (value) {
                values = value.split(".");
            }
            return values
        },
        goToAboutMePage(){
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
    }
};
</script>
