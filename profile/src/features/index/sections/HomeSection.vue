<template>
    <section id="home-section" class="hero">
        <div class="home-slider  owl-carousel">
            <div class="slider-item ">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
                        <div class="one-third js-fullheight order-md-last img">
                            <img src="assets/images/background/intro.png">
                            <div class="overlay"></div>
                        </div>
                        <div class="one-forth d-flex  align-items-center">
                            <div class="text">
                                <span class="subheading"></span>
                                <h1 class="mb-4 mt-3">
                                    <span 
                                        style="font-size:4rem" 
                                        data-aos="fade-down">
                                        {{ title }}
                                    </span>
                                </h1>
                                <h2 class="mb-4">
                                    <div data-aos="fade-left">
                                        <span  
                                            style="font-size:2rem">
                                            {{ profile }}
                                        </span>
                                    </div>
                                </h2>
                                <p>
                                    <a href="#contact-section" class="btn btn-primary">
                                        {{lbMyContacts}}
                                    </a> 
                                    <a href="/projects" class="btn btn-white btn-outline-white">
                                    {{lbMyProjects}}
                                    </a>
                                </p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li v-for="(v,i) in contactDetails" :key="i">
                                        <a 
                                            :href="v.url" 
                                            target="_blank">
                                            <span :class="v.icon" style="font-size:17px"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import listContactService from "@/features/contact/services/listContactService.js";
export default {
    name: "HomeSection",
    mixins:[listContactService],
    data() {
        return {
            resume: VueI18n.tc('resume'),
            profile: VueI18n.tc('profile'),
            title: VueI18n.tc('title'),
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
            },
            lbMyProjects:VueI18n.tc('menu.projects'),
            lbMyContacts:VueI18n.tc('menu.contact')
        }
    },
    computed:{
        contactDetails(){
            return this.executeListContact()
        }
    }
};
</script>
