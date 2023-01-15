<template>
    <div>
        <Loader v-show="showLoader" />
        <TitlePageParent :title="title" :showLoader="showLoader" />
        <div class="fh5co-narrow-content" :style="marginTopContentPage">
            <div class="row">
                <div class="col-md-5">
                    <p class="fh5co-lead animate-box">{{ name }}</p>
                    <p>{{ profile }}</p>
                    <p class="animate-box about" style="font-size: small;" v-html="description.short"></p>
                </div>
                <div class="col-md-6 col-md-push-1 animate-box" data-animate-effect="fadeInLeft">
                    <img src="assets/images/about_hero.png" alt="about me" class="img-responsive" width="50%" />
                </div>
                <div class="col-md-12" style="margin-top: 20px;">
                    <template v-if="listLongDescription.length > 0">
                        <p style="font-size: small;" class="animate-box description"
                            v-for="(i, v) in listLongDescription" :key="i">
                            {{ listLongDescription[v] }}
                        </p>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.about p {
    font-size: small;
}

.description p {
    font-size: small;
}
</style>

<script>
import VueI18n from '@/translation/i18n'
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import TitlePageParent from '@/components/_Shared/TitlePageParent.vue'
export default {
    name: "About",
    components: { TitlePageParent, Loader },
    data() {
        return {
            showLoader: true,
            marginTopContentPage: `margin-top:${constants.marginTopContentPage}`,
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
        let thix = this
        setTimeout(function () {
            thix.showLoader = false
        }, constants.timeOutOverlay)

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
