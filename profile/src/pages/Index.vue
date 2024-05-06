<template>
    <div id="colorlib-main">
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>
<script>
import Profile from "@/sections/Profile.vue"
import About from "@/sections/About.vue"
import Skills from "@/sections/Skills.vue"
import Experience from "@/sections/Experience.vue"
import Projects from "@/sections/Projects.vue"
import Contact from "@/sections/Contact.vue"
import Footer from "@/sections/Footer.vue"
export default {
    name: "IndexPage",
    components: {
        Profile,
        About,
        Skills,
        Experience,
        Projects,
        Contact,
        Footer
    }
};
</script>