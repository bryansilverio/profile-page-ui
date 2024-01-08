<template>
    <section id="experience" data-aos="fade-left">
        <p class="section__text__p1">{{ $t('sections.experienceText') }}</p>
        <h1 class="title">{{ $t('sections.experience') }}</h1>
        <div class="timeline">
            <div class="container right" v-for="(v, i) in experiences" :key="i">
                <div class="content">
                    <img :src="v.logo" alt="" width="50" style="border-radius: 100%;">
                    <h2 style="color: #FF474C;">{{ v.position }} - {{ v.company }}</h2>
                    <span style="color: rgb(37 99 235 / 1);">
                        {{ v.date }}
                    </span>
                    <p>{{ v.content }}</p>
                </div>
            </div>
        </div>
        <font-awesome-icon @click="goToProjectsSectionOnClick()" size="2x" class="arrow" icon="fa-solid fa-angles-down"
            :style="{ color: '#FF474C', cursor: 'pointer' }" />
    </section>
</template>
<script>
import { defineComponent } from 'vue'
import listWorkExperiencesService from "@/services/experience/listWorkExperiencesService.js"
export default defineComponent({
    name: "Experience",
    mixins: [listWorkExperiencesService],
    methods: {
        goToProjectsSectionOnClick() {
            window.open('./#projects', '_blank')
        }
    },
    computed: {
        experiences() {
            return this.executeListWorkExperiences();
        }
    }
});
</script>