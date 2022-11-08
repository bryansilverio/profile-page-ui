<template>
    <section id="services" class="project_details_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="project_details_title text-center pb-30">
                        <h3 class="main_title">Detalle del proyecto</h3>
                        <h5>
                            <router-link class="sub_title" to="/projects">
                                <i class="lni lni-chevron-left"></i> Regresar a proyectos
                            </router-link>
                        </h5>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 col-sm-12">
                            <h2 class="project_details_title"> {{ projectDetails.name }}</h2>
                            <ul class="project_details_items">
                                <li><span class="font-weight-bold">Proyecto: </span>
                                    {{ projectDetails.type }}
                                </li>
                                <li>
                                    <span class="font-weight-bold">Empresa donde se desarrollo: </span>
                                    {{ projectDetails.company.name }}
                                </li>
                            </ul>
                            <template v-if="projectDetails.technologies">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="font-weight-bold">Tecnologias usadas: </span>
                                        <vue-badges v-for="(t, i) in projectDetails.technologies" :key="i"
                                            :badges="[[t.name]]">
                                        </vue-badges>
                                    </div>
                                </div>
                            </template>
                            <div class="project_details_description" v-html="projectDetails.description"> </div>
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12" v-for="(p, i) in projectsRelationed" :key="i">
                            <p>Proyectos relacionados a {{ projectDetails.company.name }}</p>
                            <div class="project_item" style="cursor:pointer" @click="goToProjectDetails(p.id)">
                                <img class="card-img" :src="p.image" alt="Bologna">
                                <div class="card-body">
                                    <h3 class="title_project">{{ p.name }}</h3>
                                </div>
                                <div
                                    class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div class="views text-description">
                                        <span style="padding: 10px;">{{ p.company.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
</template>
<script>
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    data() {
        return {
            projects: projects_data,
            projectDetails: {
                name: '',
                type: '',
                company: {
                    id: '',
                    name: '',
                    logo: ''
                },
                technologies: [],
                description: ''

            },
            projectsRelationed: []
        }
    },
    methods: {
        findProjectById(id = '') {
            let findProject = this.projects.find(x => x.id == id);
            if (findProject) {
                this.projectDetails = {
                    id: findProject.id,
                    name: findProject.name,
                    type: findProject.type,
                    company: {
                        id: findProject.company.id,
                        name: findProject.company.name,
                        logo: findProject.company.logo
                    },
                    technologies: [],
                    description: findProject.description
                }
                let thix = this
                findProject.technologies.forEach(element => {
                    thix.projectDetails.technologies.push({
                        name: element.name,
                        type: element.type
                    })
                });
            }
            else {
                this.$route.push({ path: '/404' })
            }
        },
        findProjectRelationed() {
            this.projectsRelationed = this.projects.filter(
                e => e.company.id == this.projectDetails.company.id && e.id != this.projectDetails.id);
        },
        goToProjectDetails(id = '') {
            let changeProject = this.projects.find(e => e.id == id);
            if (changeProject) {
                this.projectDetails = changeProject;
                this.findProjectRelationed();
            }
        },
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findProjectById(this.$route.params.id)
        this.findProjectRelationed();
    }
}
</script>