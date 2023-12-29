<template>
    <div class="px-4">
        <Intro />
        <Experience />
        <Projects />
    </div>
</template>
<script>
import Intro from "@/sections/Intro.vue"
import Experience from "@/sections/Experience.vue"
import Projects from "@/sections/Projects.vue"
export default {
    name: "IndexPage",
    components: {
        Intro,
        Experience,
        Projects
    }
};
</script>