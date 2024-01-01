<template>
    <section data-aos="zoom-in" id="experiencia" data-section="experiencia"
        class="section undefined w-full mx-auto lg:w-[740px] pb-24">
        <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
            <BriefcaseIcon />
            {{ $t('sections.experience') }}
        </h2>
        <ol class="relative border-s border-gray-200 ml-3">
            <li class="mb-10 ms-4" v-for="(v, i) in experiences" :key="i">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                <img class="rounded-full size-12 mb-4" :src="v.logo" alt="bsilverio photo">
                <time class="mb-1 text-sm font-normal leading-none text-sky-200/80">{{ v.date }}</time>
                <h3 class="text-lg font-semibold text-yellow-200 mt-2"> {{ v.position }} - {{ v.company }}</h3>
                <p class="mb-4 text-base font-normal text-gray-200 text-balance">
                    {{ v.content }}
                </p>
                <NextButton :text="'Saber más...'" :url="`/experience/${v.id}`" target="_self"  v-show="false"/>
            </li>
        </ol>
    </section>
</template>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

import NextButton from '@/components/NextButton.vue';
import BriefcaseIcon from '@/components/icons/BriefcaseIcon.vue';

import listWorkExperiencesService from "@/services/experience/listWorkExperiencesService.js"
export default defineComponent({
    name: "Experience",
    mixins: [listWorkExperiencesService],
    components: {
        BriefcaseIcon,
        NextButton
    },
    computed: {
        experiences() {
            return this.executeListWorkExperiences();
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});
</script>
<style>
 
</style>