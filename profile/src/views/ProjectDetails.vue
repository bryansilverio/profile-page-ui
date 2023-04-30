<template>
    <div>
        <section class="ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="col-md-12 heading-section">
                    <h1 class="big">{{projectDetails.name}}</h1>
                    <h2 class="mb-4">{{projectDetails.name}}</h2>
                  </div>

                <!-- Description-->
                <p class="mt-5">{{projectDetails.description.long}}</p>

                <!-- Technologies -->
                <div class="tag-widget post-tag-container">
                    <h2>Tecnologias</h2>
                      <div class="tagcloud">
                        <a class="tag-cloud-link technology-item" v-for="(v,i) in projectDetails.technologies" :key="i">{{v.name}}</a>
                      </div>
                </div>

                 <!-- Activities -->
                <div class="col-md-12">
                    <h2>Actividades</h2>
                    <ul>
                        <li v-for="(v,i) in projectDetails.activities" :key="i">
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
    .slider-text .bread{
        color: #FF474C;
    }
    .technology-item:hover{
        background-color: #FF474C;
        cursor: pointer;
        font-weight: bold;
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