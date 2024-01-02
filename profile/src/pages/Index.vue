<template>
    <div class="px-4">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
</template>
<script>
import Intro from "@/sections/Intro.vue"
import About from "@/sections/About.vue"
import Experience from "@/sections/Experience.vue"
import Projects from "@/sections/Projects.vue"
import Contact from "@/sections/Contact.vue"
export default {
    name: "IndexPage",
    components: {
        Intro,
        About,
        Experience,
        Projects,
        Contact
    }
};
</script>