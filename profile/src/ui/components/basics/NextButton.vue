<template>
    <a :href="url" :target="target"
        class="bg-blue-900 text-white border border-white/10 rounded-full inline-flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-sm md:text-base transition hover:scale-110 hover:bg-white/10">
        {{ text }}
        <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9">
            </path>
        </svg>
    </a>
</template>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

export default defineComponent({
    name: "NextButton",
    props: {
        text: String,
        url: String,
        target: {
            type: String,
            default: "_blank"
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});
</script>