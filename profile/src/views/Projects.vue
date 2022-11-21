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

                <carousel :per-page="1" :mouse-drag="false" :navigation-enabled="true" :autoplay="true" :loop="true">
                    <slide v-for="(p, i) in projects" :key="i">

                        <div class="project_item" style="cursor:pointer" @click="goToProjectDetails(p.id)">
                            <div class="card-img-overlay">
                            </div>
                            <div class="card-body">
                                <h3 class="title_project">{{ p.name }}</h3>

                                <p class="text-description">{{ p.type }}</p>
                                <template v-if="p.technologies.length">
                                    <vue-badges v-for="(t, i) in p.technologies" :key="i" :badges="[[t.name]]">
                                    </vue-badges>
                                </template>
                            </div>
                            <div
                                class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                <div class="views text-description">
                                    <table>
                                        <tr>
                                            <td>
                                                <avatar :image="p.company.logo" :size="50" color="white" />
                                            </td>
                                            <td>
                                                <span style="padding: 10px;">{{ p.company.name }}</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>
    </div>
</template>
<script>
import Avatar from "vue-avatar-component";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { Avatar },
    data() {
        return {
            itemSelected: {
                name: "Todos",
                url: "assets/logos/proyectosweb.png",
            },
            projects: projects_data
        };
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    computed: {
        workExperiences() {
            return workExperiences_data;
        },
    },
    methods: {
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
        }
    },
};
</script>
