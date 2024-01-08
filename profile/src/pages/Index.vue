<template>
    <div class="px-4">
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
    </div>
</template>
<script>
import Profile from "@/sections/Profile.vue"
import About from "@/sections/About.vue"
import Experience from "@/sections/Experience.vue"
import Projects from "@/sections/Projects.vue"
import Contact from "@/sections/Contact.vue"
export default {
    name: "IndexPage",
    components: {
        Profile,
        About,
        Experience,
        Projects,
        Contact
    }
};
</script>