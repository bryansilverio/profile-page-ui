<template>
    <div>
        <Preloader :show="showPreloader" />
        <section id="project" class="project_area pt-125">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title">Proyectos</h3>
                            <h5 class="sub_title">Proyectos en que he participado</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <!--
                    <div class="col-sm-4">
                        <div class="project_btn">
                            <button class="main-btn main-btn-2 dropdown-toggle" data-toggle="dropdown">
                                {{ itemSelected.name }}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li style="cursor: pointer"><span>Todos</span></li>
                                <li v-for="(v, i) in workExperiences" :key="i" style="cursor: pointer"
                                    @click="selectProjectsByType(v.company, v.logo)">
                                    <span>{{ v.company }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    -->
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12" v-for="(p, i) in projects" :key="i">
                        <div class="project_item" style="cursor:pointer" @click="goToProjectDetails(p.id)">
                            <img class="card-img" :src="p.image" alt="Bologna">
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
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Avatar from "vue-avatar-component";
import Preloader from "@/components/layout/Preloader.vue";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { Avatar, Preloader },
    data() {
        return {
            itemSelected: {
                name: "Todos",
                url: "assets/logos/proyectosweb.png",
            },
            projects: projects_data,
            showPreloader: true
        };
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.getShowPreloader()
        this.selectProjectsByType(this.itemSelected.name, this.itemSelected.url);
    },
    computed: {
        workExperiences() {
            return workExperiences_data;
        },
    },
    methods: {
        selectProjectsByType(value = "", url = "") {
            this.itemSelected.name = value;
            this.itemSelected.url = url;

            if (this.itemSelected.name != "Todos") {
                let projectsSelectd = [];
                projects_data.forEach((element) => {
                    if (element.company.name == value) {
                        projectsSelectd.push(element);
                    }
                });
                this.projects = projectsSelectd;
            } else {
                this.projects = projects_data;
            }
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
        },
        getShowPreloader() {
            let thix = this
            setTimeout(function () {
                thix.showPreloader = false
            }, 1000);
        }
    },
};
</script>
