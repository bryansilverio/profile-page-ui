<template>
    <header class="flex justify-center items-center mx-auto py-5 sticky top-0 w-full xl:w-[1120px] z-10">
        <nav class="border border-black rounded-full px-2 py-1 flex flex-row bg-black/50 backdrop-blur-2xl">
            <a class="hover:bg-white/10 rounded-full px-3 transition text-color-header" href="#experiencia">
                {{ $t('menu.experience') }}
            </a>
            <a class="hover:bg-white/10 rounded-full px-3 transition text-color-header" href="#proyectos">
                {{ $t('menu.projects') }}
            </a>
            <a class="hover:bg-white/10 rounded-full px-3 transition text-color-header" href="#sobre-mi">
                {{ $t('menu.aboutMe') }}
            </a>
            <a class="hover:bg-white/10 rounded-full px-3 transition text-color-header" href="#contacto">
                {{ $t('menu.contact') }}
            </a>
        </nav>
    </header>
</template>
<style>
.text-color-header {
    color: #FF474C;
    font-weight: bolder;
}
</style>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'
export default defineComponent({
    name: "Header",
    setup() {
        const { t } = useI18n()
        return { t }
    }
});
</script>