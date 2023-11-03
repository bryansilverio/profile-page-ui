<template>
    <div>
        <section class="ftco-section">
          <div class="container">
            <div class="row">
                <div class="col-lg-12" style="margin-top: 100px;"> 
                    <div style="float: right;">
                        <button
                            @click="onClickToBack('/projects')"
                            style="cursor: pointer;"
                            class="btn btn-primary btn-outline-white margin-content">
                            &#129044; Regresar a proyectos
                        </button> 
                    </div>
                    <div data-aos="fade-right" v-html="htmlContent" class="mt-5"></div>
                </div>
            </div>
          </div>
        </section>
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
import listProjectsService from "@/features/project_details/services/listProjectsService.js"
import findProjectByIdService from "@/features/project_details/services/findProjectByIdService.js"
import loadProjectDetailContentService from "@/features/project_details/services/loadProjectDetailContentService.js"

export default {
    name: 'ProjectDetailsPage',
    mixins:[findProjectByIdService, listProjectsService, loadProjectDetailContentService],
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
            let findProject = this.executeFindProjectById(id);
            if (findProject) {
                this.projectDetails = findProject;
                this.getHtmlContent(this.projectDetails.content);
            }
            else {
                this.$route.push({ path: '/404' })
            }
        },
        onClickToBack($url) {
            this.$router.push($url)
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findProjectById(this.$route.params.id)
    },
    computed:{
        projects(){
            return this.executeListProjects()
        }
    }
}
</script>