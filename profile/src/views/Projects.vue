<template>
    <section id="project" class="project_area pt-125">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <div class="section_title pb-30">
                        <h5 class="sub_title">Proyectos</h5>
                        <h3 class="main_title">Proyectos en que he participado</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="project_btn">
                        <button class="main-btn main-btn-2 dropdown-toggle" data-toggle="dropdown">
                            {{ itemSelected.name }}
                            <!--<span class="caret"></span>-->
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
            </div>

            <div class="row project_active slick-initialized slick-slider">
                <h5>
                    <div>
                        <avatar :image="itemSelected.url" :size="50" color="white" />
                    </div>

                    {{ projects.length }} proyecto(s)
                </h5>
                <div class="slick-list">
                    <div class="slick-track">
                        <div class="row">
                            <div class="col-lg-4" v-for="(p, i) in projects" :key="i"
                                @click="goToProjectDetails(p.id)">
                                <div class="single_project wow fadeInUpBig">
                                    <div class="project_image">
                                        <img :src="p.image" alt="project" />
                                    </div>
                                    <div class="project_content">
                                        <h4 class="project_title">{{ p.name }}</h4>
                                        <p class="project_content">{{ p.description }}</p>
                                        <p class="project_content">{{ p.type }}</p>
                                        <span class="project_content">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <avatar :image="p.company.logo" :size="50" color="white">
                                                        </avatar>
                                                    </td>
                                                    <td>
                                                        <span style="margin-right: 20px">{{
                                                                p.company.name
                                                        }}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </span>
                                        <span class="project_content">
                                            <template v-if="p.technologies.length">
                                                <vue-badges v-for="(t, i) in p.technologies" :key="i"
                                                    :badges="[[t.name]]">
                                                </vue-badges>
                                            </template>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
            projects: projects_data,
        };
    },
    created() {
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
            this.$router.push('/projects/' + id);
        }
    },
};
</script>
