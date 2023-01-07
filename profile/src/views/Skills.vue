<template>
    <div>
        <TitlePage title="Conocimientos" />
        <div class="fh5co-narrow-content  animate-box" data-animate-effect="fadeInLeft">
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
import TitlePage from '@/components/_Shared/TitlePage.vue'
import social_network_data from "@/data/social-network.json";
import skills_data from "@/data/skills.json";
import Skillitem from "@/components/_Shared/SkillItem.vue";
export default {
    name: "About",
    components: { TitlePage, Skillitem },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
