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
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Más <span>información</span>
            </h2>
            <div class="row">
                <HomeCardPageLink :title="pages.about.name" icon="icon-user" :description="pages.about.description"
                    url="about" />
                <HomeCardPageLink :title="pages.skills.name" icon="icon-code" :description="pages.skills.description"
                    url="skills" />
                <HomeCardPageLink :title="pages.experience.name" icon="icon-apartment"
                    :description="pages.experience.description" url="work-experience" />
                <HomeCardPageLink :title="pages.projects.name" icon="icon-briefcase"
                    :description="pages.projects.description" url="projects" />
                <HomeCardPageLink :title="pages.contact.name" icon="icon-comments"
                    :description="pages.contact.description" url="contact" />
            </div>
        </div>

    </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import HomeCardPageLink from '@/components/_Shared/HomeCardPageLink.vue'
export default {
    name: "Home",
    components: { Loader, HomeCardPageLink },
    data() {
        return {
            showLoader: true,
            pages: {
                about: {
                    name: VueI18n.tc('pages.home.sections.about.name'),
                    description: VueI18n.tc('pages.home.sections.about.description')
                },
                skills: {
                    name: VueI18n.tc('pages.home.sections.skills.name'),
                    description: VueI18n.tc('pages.home.sections.skills.description')
                },
                experience: {
                    name: VueI18n.tc('pages.home.sections.experience.name'),
                    description: VueI18n.tc('pages.home.sections.experience.description')
                },
                projects: {
                    name: VueI18n.tc('pages.home.sections.projects.name'),
                    description: VueI18n.tc('pages.home.sections.projects.description')
                },
                contact: {
                    name: VueI18n.tc('pages.home.sections.contact.name'),
                    description: VueI18n.tc('pages.home.sections.contact.description')
                }
            }
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
