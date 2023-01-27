<template>
    <div>

        <Loader v-show="showLoader" />

        <div class="fh5co-testimonial" style="background-color: #1F2235;">
            <div class="fh5co-narrow-content">
                <div class="owl-carousel-fullwidth animate-box">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <h1 class="dev-name" style="font-size: 50px;">
                            Bryan Silverio
                        </h1>
                        <strong class="banner-name">Desarrollador de Software / Desarrollador Web</strong>
                        <p style="font-size: small;margin-top: 20px;">I'm a Web Developer with extensive experience for
                            over 5 years. My expertise is to create and
                            Websites design, graphic design and many more...</p>
                        <SocialNetworkItem classCss="fh5co-social" />
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="item">
                            <figure>
                                <img src="assets/images/testimonial_person2.jpg" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.dev-name p {
    transform: translate(-50%, -50%);
}

.dev-name p:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;

}

.dev-name p:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
}

.banner-name {
    text-transform: uppercase;
    color: #ff4a57;
    font-size: 15px;
}
</style>
<script>
import VueI18n from '@/translation/i18n'
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import SocialNetworkItem from '@/components/_Shared/SocialNetworkItem.vue'
export default {
    name: "Home",
    components: { Loader, SocialNetworkItem },
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
