<template>

    <div class="fh5co-narrow-content">
        <div class="row">

            <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <figure class="text-center">
                    <img :src="projectDetails.image" alt="Free HTML5 Bootstrap" class="img-responsive">
                </figure>
            </div>

            <div class="col-md-8 col-md-offset-2 animate-box" data-animate-effect="fadeInLeft">

                <div class="col-md-9 col-md-push-3">
                    <h1>{{ projectDetails.name }}</h1>
                    <small>{{ projectDetails.type }} / {{ projectDetails.company.name }}</small>
                    <p v-html="projectDetails.description"></p>
                </div>

                <div class="col-md-3 col-md-pull-9 fh5co-services">
                    <h3>Tecnologias</h3>
                    <ul>
                        <i v-for="(t, i) in projectDetails.technologies" :key="i" :class="t.icon"
                            style="font-size:20px;margin-right:10px"></i>
                    </ul>
                </div>

            </div>
        </div>

        <div class="row work-pagination animate-box" data-animate-effect="fadeInLeft">
            <div class="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0">

                <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                    <a href="#"><i class="icon-long-arrow-left"></i> <span>Previous Project</span></a>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                    <a href="#"><i class="icon-th-large"></i></a>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                    <a href="#"><span>Next Project</span> <i class="icon-long-arrow-right"></i></a>
                </div>
            </div>
        </div>

    </div>

    <!--
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
                    </div> 
                </div>
            </div> 
        </div>

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
-->
</template>
<script>
//import ProjectsCarrusel from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    //components: { ProjectsCarrusel },
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