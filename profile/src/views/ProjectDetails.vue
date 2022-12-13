<template>
    <section id="services" class="project_details_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="project_details_title text-center pb-30">
                        <h3 class="main_title">Detalle del proyecto</h3>
                        <h5>
                            <a class="sub_title" href="/#projects">
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
            </div> <!-- row -->
        </div> <!-- container -->

        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
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
                    </div>

                </div>
                <div class="col-lg-4 text-center">
                    <div class="row">
                        <div class="col-lg-12 mb-10">
                            <div class="card">
                                <div class="card-body" style="background-color: #1f2235;border-radius: 10px;">
                                    <h3 class="title_project"> </h3>
                                    <template v-if="projectDetails.technologies">
                                        <span class="font-weight-bold" style="color:#fff">Tecnologias
                                            usadas
                                        </span>
                                        <div class="service_icon text-left mt-10">
                                            <i v-for="(t, i) in projectDetails.technologies" :key="i" :class="t.icon"
                                                style="font-size:30px;margin-right:10px"></i>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <span class="font-weight-bold" style="color:#000">Otros proyectos
                            </span>
                            <ProjectsCarrusel :projects="projects" bgColor="#1f2235" borderRadius="10px"
                                textColor="#fff" paginationColor="#1f2235" :showImageProject="false"
                                @goToProjectDetails="goToProjectDetails" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ProjectsCarrusel from "@/components/_Shared/ProjectsCarrusel.vue";
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    components: { ProjectsCarrusel },
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