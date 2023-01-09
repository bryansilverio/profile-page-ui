<template>
    <div>

        <Loader v-show="showLoader" />

        <div class="fh5co-testimonial">
            <div class="fh5co-narrow-content">
                <div class="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                    <div class="item">
                        <figure>
                            <img src="assets/images/testimonial_person2.jpg" alt="Free HTML5 Bootstrap Template">
                        </figure>
                        <p class="text-center">
                            Bryan Silverio
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="fh5co-narrow-content">
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Proyectos <span>We Love To
                    Do</span>
            </h2>
            <div class="row">
                <HomeCardPageLink title="Sobre mí" icon="icon-user" description="Sobre mí" url="about-me" />
                <HomeCardPageLink title="Conocimientos" icon="icon-code" description="Conocimientos" url="skills" />
                <HomeCardPageLink title="Experiencia" icon="icon-apartment" description="Experiencia"
                    url="experience" />
                <HomeCardPageLink title="Proyectos" icon="icon-briefcase" description="Proyectos" url="projects" />
                <HomeCardPageLink title="Contacto" icon="icon-comments" description="Contacto" url="contact" />
            </div>
        </div>

    </div>
</template>
<script>
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import HomeCardPageLink from '@/components/_Shared/HomeCardPageLink.vue'
export default {
    name: "Home",
    components: { Loader, HomeCardPageLink },
    data() {
        return {
            showLoader: true
        }
    },
    created() {
        let thix = this
        setTimeout(function () {
            thix.showLoader = false
        }, constants.timeOutOverlay)
    }
};
</script>
