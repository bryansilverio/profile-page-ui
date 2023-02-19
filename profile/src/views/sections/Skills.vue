<template>
    <!--
    <section class="ftco-section" id="skills-section">
        <div class="container">
            <div class="row justify-content-center pb-5">
                <div class="col-md-12 heading-section text-center">
                    <h1 class="big big-2">
                        {{title}}
                    </h1>
                    <h2 class="mb-4">
                        {{title}}
                    </h2>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>
                </div>
            </div>
            <div class="row">
                <Skillitem classCss="col-md-4" :items="frontendSkills"/>
                <Skillitem classCss="col-md-4" :items="backendSkills"/>
                <Skillitem classCss="col-md-4" :items="devtoolsSkills"/>
            </div>
        </div>
    </section>
-->
    <section class="ftco-section" id="services-section">
        <div class="container">
            <div class="row justify-content-center py-5 mt-5">
          <div class="col-md-12 heading-section text-center">
            <h1 class="big big-2">{{title}}</h1>
            <h2 class="mb-4">{{title}}</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
            <div class="row">
                <Skillitem v-for="(v,i) in frontendSkills" :key="i" :item="v"/>
                <Skillitem v-for="(v,i) in backendSkills" :key="i" :item="v"/>
                <Skillitem v-for="(v,i) in devtoolsSkills" :key="i" :item="v"/>
            </div>
        </div>
    </section>

</template>
<script>
import VueI18n from '@/translation/i18n'
import skills_data from "@/data/skills.json";
import Skillitem from "@/components/_Shared/SkillItem.vue";
export default {
    name: "About",
    components: {Skillitem },
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.skills.name'),
            frontend: VueI18n.tc('pages.skills.frontend'),
            backend: VueI18n.tc('pages.skills.backend'),
            devtools: VueI18n.tc('pages.skills.devtools')
        }
    },
    created() {
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
