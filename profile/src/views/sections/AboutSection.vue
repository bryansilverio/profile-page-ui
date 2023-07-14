<template>
    <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
        <div class="container">
            <SectionTitle :title="title" data-aos="fade-right"/>
            <div class="row d-flex justify-content-start">
                <div class="col-md-12" data-aos="fade-right">
                    <p v-for="(v,i) in aboutDescription" :key="i">{{v}}</p>
                </div>
            </div>
            <div class="counter-wrap d-flex mt-md-3 justify-content-center">
                <div class="text">
                    <p>
                        <a href="#" class="btn btn-primary py-3 px-3" v-show="false">{{btnDownloadCv}}</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import aboutData from "@/data/about.json";
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "AboutSection",
    components:{SectionTitle},
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
        this.aboutDescription = this.splitPhrasesDescriptions(aboutData.description)
    },
    methods: {
        splitPhrasesDescriptions(value) {
            let values = []
            if (value) {
                values = value.split(".");
            }
            return values
        }
    }
};
</script>
