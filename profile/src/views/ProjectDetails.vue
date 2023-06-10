<template>
    <div>
        <section class="ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12" style="margin-top: 100px;">
                
                <div v-html="htmlContent"></div>

              </div> <!-- .col-md-8 -->
              
              <div class="col-md-4 mt-5" v-show="false">
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
        font-size: 15px;
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
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-top: 3px solid;
        color: #FF474C;
    }
    .project-site-btn-block {
        display: block;
        width: 40%;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import ProjectItemSidebar from '@/components/_Shared/ProjectItemSidebar.vue'
import projects_data from "@/data/projects.json";
import findProjectDetailsService from "@/services/findProjectDetailsService.js"
export default {
    name: 'ProjectDetails',
    components: { ProjectItemSidebar },
    mixins:[findProjectDetailsService],
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
        this.getHtmlContent("/content/company-projects/"+this.$route.params.id+".md");
    },
    computed: {
        projects() {
            return projects_data
        }
    }
}
</script>