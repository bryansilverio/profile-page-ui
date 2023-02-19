<template>
    <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
        <div class="container">
            <div class="row d-flex">
                <div class="col-md-4 col-lg-5 d-flex">
                    <div class="img-about img d-flex align-items-stretch">
                        <div class="overlay"></div>
                        <div class="img d-flex align-self-stretch align-items-center" style="background-image:url(assets/images/bg_1.png);">
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-7 pl-lg-5 pb-5">
                    <div class="row justify-content-start pb-3">
                  <div class="col-md-12 heading-section">
                    <h1 class="big">{{title}}</h1>
                    <h2 class="mb-4">{{title}}</h2>
                    <p v-for="(v,i) in listLongDescription" :key="i">{{v}}</p>
                    <ul class="about-info mt-4 px-md-0 px-2">
                        <li class="d-flex"><span>Name:</span> <span>Bryan Silverio</span></li>
                        <li class="d-flex"><span>Email:</span> <span>bryansilverio12@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
              <div class="counter-wrap d-flex mt-md-3">
              <div class="text">
                <p><a href="#" class="btn btn-primary py-3 px-3">Download CV</a></p>
              </div>
              </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "About",
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.about.name'),
            name: VueI18n.tc('title'),
            profile: VueI18n.tc('profile'),
            description: {
                short: VueI18n.tc('pages.about.description.short'),
                long: VueI18n.tc('pages.about.description.long')
            },
            listLongDescription: []
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
    }
};
</script>
