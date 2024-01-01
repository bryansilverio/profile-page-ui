<template>
    <section class="section w-full mx-auto lg:w-[740px] pb-24">
        <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 lg:pb-10">
            <img class="rounded-full size-20 mb-4" :src="logo" alt="bsilverio photo">
            <span>{{ company }}</span>
            <h2 class="text-xl lg:text-2xl text-balance max-w-[700px]">
                <span class="text-yellow-200">{{ position }}</span><br>
                <span class="text-red-200 text-sm">{{ date }}</span><br>
                <p class="mb-4 text-base font-normal text-gray-200 text-balance">
                    {{ content }}
                </p>
            </h2>
        </h1>
    </section>
</template>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

import CodeIcon from '@/components/icons/CodeIcon.vue';
export default defineComponent({
    name: "PageTitle",
    setup() {
        const { t } = useI18n()
        return { t }
    },
    props: {
        logo: String,
        company: String,
        position: String,
        date: String,
        content: String
    },
    components: {
        CodeIcon
    }
});
</script>