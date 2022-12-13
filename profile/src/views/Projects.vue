<template>
    <div>

        <section id="projects" class="project_area pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title" style="color:#fff">Proyectos</h3>
                            <h5 class="sub_title" style="color:#fff">Proyectos en que he participado</h5>
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
                        <p style="color:#fff">
                            Los proyectos en los que he participado han consistido en la mayor parte y principalmente en
                            desarrollo backend, complementandolo con frontend y diseño de base de datos.
                        </p>
                        <p style="color:#fff">
                            Los proyectos han sido enfocados para plataforma web. En cada proyecto se usarón
                            herramientas y tecnologías diferentes.
                        </p>
                        <br>
                        <p style="color:#fff">
                            Recientemente he participado y adentrado más al diseño y desarrollo de APIs orientados a
                            microservicios, apliando los conceptos de RESTful para el servicio desde la face del diseño.
                        </p>
                        <p style="color:#fff">
                            Estos servicios cuya finalizadad es que sean consumidos por las aplicaciones frontend.
                        </p>
                    </div>
                    <div class="col-lg-4 text-center">
                        <ProjectsCarrusel :projects="projects" :navigationEnabled="true"
                            @goToProjectDetails="goToProjectDetails" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import ProjectsCarrusel from "@/components/_Shared/ProjectsCarrusel.vue";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { ProjectsCarrusel },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    methods: {
        goToProjectDetails($id) {
            if ($id != null) {
                this.$router.push('/projects/' + $id).catch(error => {
                    if (
                        error.name !== 'NavigationDuplicated' &&
                        !error.message.includes('Avoided redundant navigation to current location')
                    ) {
                        /* eslint-disable no-console */
                        console.log(error)
                        /* eslint-enable no-console */
                    }
                })
            }
            else {
                this.$route.push({ path: '/404' })
            }
        }
    },
    computed: {
        workExperiences() {
            return workExperiences_data;
        },
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
};
</script>
