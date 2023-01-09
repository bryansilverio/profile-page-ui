<template>
    <div>
        <Loader v-show="showLoader" />
        <TitlePageParent title="Conocimientos" :showLoader="showLoader" />
        <div class="fh5co-narrow-content  animate-box" data-animate-effect="fadeInLeft" :style="marginTopContentPage">
            <div class="row">
                <div class="col-md-12 mt-10">
                    <Skillitem :items="frontendSkills" title="Frontend" />
                </div>
                <div class="col-md-12 mt-10">
                    <Skillitem :items="backendSkills" title="Backend" />
                </div>
                <div class="col-md-12 mt-10">
                    <Skillitem :items="devtoolsSkills" title="DevTools" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.social-network-items {
    display: inline-block;
    margin-right: 15px;
    font-size: x-large;
}
</style>

<script>
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import TitlePageParent from '@/components/_Shared/TitlePageParent.vue'
import social_network_data from "@/data/social-network.json";
import skills_data from "@/data/skills.json";
import Skillitem from "@/components/_Shared/SkillItem.vue";
export default {
    name: "About",
    components: { TitlePageParent, Skillitem, Loader },
    data() {
        return {
            showLoader: true,
            marginTopContentPage: `margin-top:${constants.marginTopContentPage}`
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        let thix = this
        setTimeout(function () {
            thix.showLoader = false
        }, constants.timeOutOverlay)
    },
    computed: {
        socialNetworkItems() {
            return social_network_data;
        },
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
