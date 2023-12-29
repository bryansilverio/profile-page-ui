<template>
    <section class="section py-44 pb-32 w-full mx-auto lg:w-[740px] pb-24">
        <img class="rounded-full size-12 mb-4" src="/midudev.webp" alt="midudev photo">
        <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
            Hey, soy Bryan Silverio
            <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener"
                class="flex justify-center items-center">
                <span class="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                    Disponible para trabajar
                </span>
            </a>
        </h1>
        <h2 class="text-xl lg:text-2xl text-balance max-w-[700px]">
            <span>+15 años de experiencia.</span>
            <span class="text-yellow-200">Desarrollador de software</span>
            .<span class="text-red-200"> De Quéretaro, Mx</span>.
            <span class="text-sky-200">Especializado en crear aplicaciones únicas.</span>
        </h2>
        <SocialNetworkPill />
    </section>
</template>
<script>
import SocialNetworkPill from "@/components/SocialNetworkPill.vue"
export default {
    name: "Intro",
    components: {
        SocialNetworkPill
    },
    data(){
        return{
            
        }
    }
};
</script>