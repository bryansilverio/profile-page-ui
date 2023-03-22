<template>
    <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-5">
              <div class="col-md-7 heading-section text-center">
                <h1 class="big big-2">{{title}}</h1>
                <h2 class="mb-4">{{title}}</h2>
                <!--<p>{{textSection}}</p>-->
              </div>
            </div>
            <div class="row d-flex justify-content-start">
                <div class="col-md-12">
                    <p v-html="about.description"></p>
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
export default {
    name: "About",
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
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.listLongDescription = this.splitPhrasesDescriptions(this.description.long)
    },
    methods: {
        splitPhrasesDescriptions(value) {
            let values = []
            if (value) {
                values = value.split(".");
            }
            return values
        }
    },
    computed:{
        about(){
            return aboutData;
        }
    }
};
</script>
