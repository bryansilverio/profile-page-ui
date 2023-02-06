<template>

    <div class="fh5co-narrow-content">
        <Loader v-show="showLoader" />
        <div class="row animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12 text-start">
                <a @click="onClickToBack()" style="cursor:pointer"><i class="icon-long-arrow-left"></i> <span>{{
                    btnBackToProjects
                }}</span></a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
                <hr class="nb nc nd am" aria-hidden="true">
                <div class="col-md-12 text-start">
                    <h3>
                        {{ projectDetails.name }}
                    </h3>
                    <h5>
                        <span style="font-weight: bold;color:#FF4A57">{{ company }}: </span>
                        {{ projectDetails.company.name }}
                    </h5>
                    <h5>
                        <span style="font-weight: bold;color:#FF4A57">{{ position }}: </span>
                        {{ projectDetails.type }}
                    </h5>
                    <figure class="text-start" v-show="false">
                        <img :src="$url + '/' + projectDetails.image" alt="Free HTML5 Bootstrap" class="img-responsive">
                    </figure>
                    <h5 style="font-weight: bold;color:#FF4A57">Descripción: </h5>
                    <p class="project-description" v-html="projectDetails.description.long"></p>
                </div>
            </div>
            <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                <TechnologiesUsedInProject :items="projectDetails.technologies" />
                <ProjectsRelationed :items="projectsRelationed" @onClickToProjectById="onClickToProjectById" />
            </div>
        </div>

    </div>
</template>
<style>
.project-description,
.item-other-project {
    font-size: small;
}
</style>
<script>
import VueI18n from '@/translation/i18n'
import Loader from '@/components/_Shared/Loader.vue'
import ProjectsRelationed from '@/components/_Shared/ProjectsRelationed.vue'
import TechnologiesUsedInProject from '@/components/_Shared/TechnologiesUsedInProject.vue'
import constants from '@/common/constants.js'
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    components: { Loader, ProjectsRelationed, TechnologiesUsedInProject },
    data() {
        return {
            projectDetails: {},
            projectsRelationed: [],
            showLoader: true,
            btnBackToProjects: VueI18n.tc('buttons.goToBack'),
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition')

        }
    },
    methods: {
        findProjectById(id = '') {
            let findProject = this.projects.find(x => x.id == id);
            if (findProject) {
                findProject.image = this.$url + '/' + findProject.image
                findProject.company.logo = this.$url + '/' + findProject.company.logo
                this.projectDetails = {
                    id: findProject.id,
                    name: findProject.name,
                    type: findProject.type,
                    image: this.$url + '/' + findProject.image,
                    company: {
                        id: findProject.company.id,
                        logo: this.$url + '/' + findProject.company.logo,
                        name: findProject.company.name
                    },
                    description: {
                        short: findProject.description.short,
                        long: findProject.description.long
                    },
                    technologies: findProject.technologies
                }
            }
            else {
                this.$route.push({ path: '/404' })
            }
        },
        findProjectRelationed() {
            this.projectsRelationed = this.projects.filter(
                e => e.id != this.projectDetails.id);
        },
        goToProjectDetails(id = '') {
            this.$router.push('/projects/' + id).catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            })
            let changeProject = this.projects.find(e => e.id == id);
            if (changeProject) {
                this.projectDetails = changeProject;
                this.findProjectRelationed();
            }
        },
        onClickToBack() {
            this.$router.push('/projects')
        },
        onClickToProjectById(projectId) {
            this.showLoader = true
            this.findProjectById(projectId)
            this.onShowLoader()
        },
        onShowLoader() {
            let thix = this
            setTimeout(function () {
                thix.showLoader = false
            }, constants.timeOutOverlay)
        }
    },
    created() {
        this.onShowLoader()
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findProjectById(this.$route.params.id)
        this.findProjectRelationed();
    },
    computed: {
        projects() {
            return projects_data
        }
    }
}
</script>