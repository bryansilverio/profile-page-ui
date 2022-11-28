<template>
    <section id="services" class="project_details_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="project_details_title text-center pb-30">
                        <h3 class="main_title">Detalle del proyecto</h3>
                        <h5>
                            <a class="sub_title" href="/">
                                <i class="lni lni-chevron-left"></i> Regresar a proyectos
                            </a>
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
                                <li><span class="font-weight-bold">Proyecto/Área: </span>
                                    {{ projectDetails.type }}
                                </li>
                                <li>
                                    <span class="font-weight-bold">Empresa donde se desarrollo: </span>
                                    {{ projectDetails.company.name }}
                                </li>
                            </ul>

                            <div class="project_details_description" v-html="projectDetails.description"> </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12">
                            <p></p>
                            <div class="project_item"
                                style="cursor:pointer;box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.3);background-color: #1f2235;">
                                <div class="card-body">
                                    <h3 class="title_project"> </h3>
                                    <template v-if="projectDetails.technologies">
                                        <span class="font-weight-bold" style="color:#fff">Tecnologias usadas: </span>
                                        <div class="service_icon text-left mt-10">
                                            <i v-for="(t, i) in projectDetails.technologies" :key="i" :class="t.icon"
                                                style="font-size:30px;margin-right:10px"></i>
                                        </div>
                                    </template>
                                </div>
                                <div
                                    class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div class="views text-description">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> <!-- row -->

            <div class="row mt-50">
                <div class="col-lg-12">
                    <p>Otros proyectos</p>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12" v-for="(p, i) in projectsRelationed" :key="i">
                    <div class="project_item"
                        style="cursor:pointer;box-shadow: 0px 0px 10px 0px rgba(196, 196, 196, 0.3);background-color: #1f2235;"
                        @click="goToProjectDetails(p.id)">
                        <div class="card-body">
                            <div class="padding:20px">
                                <avatar :image="'/' + p.company.logo" :size="50" color="white" />
                                <h3 class="title_project" style="color:#fff">{{ p.name }}</h3>
                            </div>
                        </div>
                        <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                            <div class="views text-description">
                                <span style="padding: 10px;color:#fff">{{ p.company.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> <!-- container -->
    </section>
</template>
<script>
import Avatar from "vue-avatar-component";
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    components: { Avatar },
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
                        type: element.type,
                        icon: element.icon
                    })
                });
            }
            else {
                this.$route.push({ path: '/404' })
            }
        },
        findProjectRelationed() {
            /*
            this.projectsRelationed = this.projects.filter(
                e => e.company.id == this.projectDetails.company.id && e.id != this.projectDetails.id);
                */
            this.projectsRelationed = this.projects.filter(
                e => e.id != this.projectDetails.id);
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