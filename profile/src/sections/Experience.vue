<template>
    <section id="experiencia" data-section="experiencia" class="section undefined w-full mx-auto lg:w-[740px] pb-24">
        <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
            <svg class="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                <path d="M12 12l0 .01"></path>
                <path d="M3 13a20 20 0 0 0 18 0"></path>
            </svg>
            Experiencia laboral
        </h2>
        <ol class="relative border-s border-gray-200 ml-3">
            <li class="mb-10 ms-4" v-for="(v, i) in experiences" :key="i">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-sky-200/80">{{ v.date }}</time>
                <h3 class="text-lg font-semibold text-yellow-200 mt-2"> {{ v.position }} - {{ v.company }} </h3>
                <p class="mb-4 text-base font-normal text-gray-200 text-balance">
                    {{ v.content }} </p>
                <a href="https://twitch.tv/midudev"
                    class="bg-white/5 border border-white/10 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10">
                    Saber más...
                    <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9">
                        </path>
                    </svg>
                </a>
            </li>
        </ol>
    </section>
</template>
<script>
import listWorkExperiencesService from "@/services/experience/listWorkExperiencesService.js"
export default {
    name: "Experience",
    mixins: [listWorkExperiencesService],
    computed: {
        experiences() {
            return this.executeListWorkExperiences();
        }
    }
};
</script>