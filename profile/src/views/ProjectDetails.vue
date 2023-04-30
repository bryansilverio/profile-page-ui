<template>
    <div>
        <section class="ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="col-md-12 heading-section">
                    <h1 class="big project-name" v-show="false">{{projectDetails.name}}</h1>
                    <h2 class="mb-4 project-name">{{projectDetails.name}}</h2>
                </div>

                <div class="col-md-12 mt-5">
                    <img 
                        :src="projectDetails.company.logo" 
                        style="border-radius: 50%;"
                        width="50">
                    <span style="font-weight: bold;">
                        {{projectDetails.company.name}}
                    </span>
                    -
                    <span style="font-style: italic;">{{projectDetails.employeeType.name}}</span>
                    <template v-if="projectDetails.employeeType.id=='CONTRACTOR'">
                        -
                        <span style="font-style: italic;">
                            {{projectDetails.employeeType.companyAssigned.name}}
                        </span>
                    </template>
                </div>

                <!-- Description-->
                <div class="col-md-12 mt-5">
                    <p class="project-text">{{projectDetails.description.long}}</p>
                </div>

                <!-- Technologies -->
                <div class="col-md-12 mt-5">
                    <div class="tag-widget post-tag-container">
                        <h3>Tecnologías</h3>
                          <div class="tagcloud">
                            <a class="tag-cloud-link technology-item project-text" v-for="(v,i) in projectDetails.technologies" :key="i">{{v.name}}</a>
                          </div>
                    </div>
                </div>

                 <!-- Activities -->
                <div class="col-md-12 mt-5 projects-activities">
                    <h3>Actividades</h3>
                    <ul class="list-unstyled">
                        <li v-for="(v,i) in projectDetails.activities" 
                            :key="i" 
                            class="project-text">
                            {{v.activity}}
                        </li>
                    </ul>
                </div>

              </div> <!-- .col-md-8 -->
              
              <div class="col-md-4">
                    <ProjectItemSidebar 
                    :projectsRelationed="projects"
                    @onClickToProjectById="onClickToProjectById" />
              </div>

            </div>
          </div>
        </section> <!-- .section -->

    </div>
</template>
<style>
    .about-author{
        background-color: #36394A;
    }
    .project-name{
        color: #FF474C;
    }
    .technology-item:hover{
        background-color: #FF474C;
        cursor: pointer;
        font-weight: bold;
    }
    .project-text{
        font-size: small;
    }
    .projects-activities ul li::before {
        content: "📝 " 
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import ProjectItemSidebar from '@/components/_Shared/ProjectItemSidebar.vue'
import projects_data from "@/data/projects.json";
export default {
    name: 'ProjectDetails',
    components: { ProjectItemSidebar },
    data() {
        return {
            projectDetails: {},
            projectsRelationed:[],
            btnBackToProjects: VueI18n.tc('buttons.goToBack'),
            breadcrumbs:{
                home:VueI18n.tc('pages.projectDetails.breadcrumbs.home'),
                projects:VueI18n.tc('pages.projectDetails.breadcrumbs.projects')
            },
            aboutProject:{
                developedIn:VueI18n.tc('pages.projectDetails.aboutProject.developedIn'),
                company:VueI18n.tc('pages.projectDetails.aboutProject.company'),
                area:VueI18n.tc('pages.projectDetails.aboutProject.area'),
                position:VueI18n.tc('pages.projectDetails.aboutProject.position'),
                assignedTo:VueI18n.tc('pages.projectDetails.aboutProject.assignedTo')
            }

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
        onClickToBack($url) {
            this.$router.push($url)
        },
        onClickToProjectById($id){
            this.$router.push('/projects/'+$id)
            if(this.projectDetails.id!=this.$route.params.id){
                this.findProjectById($id)
            }
        },
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findProjectById(this.$route.params.id)
    },
    computed: {
        projects() {
            return projects_data
        }
    }
}
</script>