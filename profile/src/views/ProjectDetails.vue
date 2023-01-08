<template>

    <div class="fh5co-narrow-content">

        <div class="row work-pagination animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-12 text-start">
                <a @click="goToBack()"><i class="icon-long-arrow-left"></i> <span>Previous Project</span></a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
                <hr class="nb nc nd am" aria-hidden="true">
                <div class="col-md-12 text-start">
                    <h3>{{ projectDetails.name }}</h3>

                    <figure class="text-start">
                        <img :src="projectDetails.image" alt="Free HTML5 Bootstrap" class="img-responsive">
                    </figure>

                    <small>{{ projectDetails.type }} / {{ projectDetails.company.name }}</small>
                    <p class="project-description" v-html="projectDetails.description"></p>
                </div>
            </div>
            <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">

                <div class="col-md-12 text-start">
                    <hr class="nb nc nd am" aria-hidden="true">
                    <h3>Tecnologias</h3>
                    <p class="badge badge-pill badge-secondary" v-for="(t, i) in projectDetails.technologies" :key="i" style="font-size: small;">
                        <i :class="t.icon" style="font-size:20px;"></i> {{ t.name }} - {{ t.type }}
                    </p>
                </div>

                <div class="col-md-12 text-start">
                    <hr class="nb nc nd am" aria-hidden="true">
                    <h3>Otros proyectos</h3>
                    <ul>
                        <li v-for="(v, i) in projectsRelationed" :key="i" class="item-other-project">{{ v.name }}</li>
                    </ul>
                </div>

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

import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    data() {
        return {
            projectDetails: {},
            projectsRelationed: []
        }
    },
    methods: {
        findProjectById(id = '') {
            let findProject = this.projects.find(x => x.id == id);
            if (findProject) {
                this.projectDetails = findProject;
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
        goToBack() {
            this.$route.push({ path: '/projects' })
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findProjectById(this.$route.params.id)
        this.findProjectRelationed();
    },
    computed: {
        projects() {
            let thix = this
            let collection = projects_data.map(function (el) {
                el.image = thix.$url + '/' + el.image;
                el.company.logo = thix.$url + '/' + el.company.logo
                return el;
            });
            return collection
        }
    }
}
</script>