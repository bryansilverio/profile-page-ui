<template>
    <section class="ftco-section" id="skills-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection"/>
            <div class="row">
                <Skillitem v-for="(v,i) in frontendSkills" :key="i*2" :item="v"/>
                <Skillitem v-for="(v,i) in backendSkills" :key="i*20" :item="v"/>
                <Skillitem v-for="(v,i) in devtoolsSkills" :key="i*200" :item="v"/>
            </div>
        </div>
    </section>
</template>
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
