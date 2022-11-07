<template>
    <section id="services" class="project_details_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="project_details_title text-center pb-30">
                        <h3 class="main_title">Detalle del proyecto</h3>
                        <h5 class="sub_title">Proyecto</h5>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-9">
                            <h2 class="project_details_title">{{ projectDetails.name }}</h2>
                            <ul class="project_details_items">
                                <li><span class="font-weight-bold">Proyecto: </span> {{ projectDetails.type }}</li>
                                <li><span class="font-weight-bold">Periodo: </span> April 16, 2025</li>
                                <li><span class="font-weight-bold">Empresa: </span> Events</li>
                            </ul>
                            <template v-if="projectDetails.technologies">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <span class="font-weight-bold">Tecnologias: </span>
                                    </div>
                                    <div class="col-lg-12">
                                        <vue-badges v-for="(t, i) in projectDetails.technologies" :key="i"
                                            :badges="[[t.name]]">
                                        </vue-badges>
                                    </div>
                                </div>
                            </template>
                            <div class="project_details_description" v-html="projectDetails.description"> </div>
                        </div>
                        <div class="col-lg-3">

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
                    name: '',
                    image: ''
                },
                technologies: [],
                description: ''

            }
        }
    },
    methods: {
        findProjectById(id = '') {
            let findProject = this.projects.find(x => x.id == id);
            if (findProject) {
                this.projectDetails = {
                    name: findProject.name,
                    type: findProject.type,
                    company: {
                        name: findProject.company.name,
                        image: findProject.company.image
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
        }
    },
    created() {
        this.findProjectById(this.$route.params.id)
    }
}
</script>