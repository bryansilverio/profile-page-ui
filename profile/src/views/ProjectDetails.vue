<template>

    <div>
        <section class="hero-wrap js-fullheight" style="background-image: url('/assets/images/bg-projects.jpg');" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
              <div class="col-md-12 pb-5 mb-3 text-center" style="margin-top: 20%;">
                <h2 class="mb-3 bread">{{projectDetails.name}}</h2>
                <p class="breadcrumbs">
                    <span class="mr-2" style="cursor:pointer;">
                        <a @click="onClickToBack('/')">
                            {{breadcrumbs.home}} <i class="ion-ios-arrow-forward"></i>
                        </a>
                    </span> 
                    <span class="mr-2" style="cursor:pointer;">
                        <a @click="onClickToBack('/#projects-section')">
                            {{breadcrumbs.projects}} <i class="ion-ios-arrow-forward"></i>
                        </a>
                    </span> 
                    <span>
                        {{projectDetails.name}} <i class="ion-ios-arrow-forward"></i>
                    </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 ">
                <p v-html="projectDetails.description.long"></p>

                <div class="tag-widget post-tag-container mb-5 mt-5">
                  <div class="tagcloud">
                    <a class="tag-cloud-link" v-for="(v,i) in projectDetails.technologies" :key="i">{{v.name}}</a>
                  </div>
                </div>
                
                <div class="about-author d-flex p-4">
                  <div class="bio mr-5">
                    <img :src="projectDetails.company.logo" alt="Image placeholder" class="img-fluid mb-4">
                  </div>
                  <div class="desc">
                    <h3>{{aboutProject.developedIn}}:</h3>
                    <p>
                        <span>{{aboutProject.company}}: {{projectDetails.company.name}}</span>
                        <br>
                        <span>{{aboutProject.area}}: {{projectDetails.area}}</span>
                        <br>
                        <span>{{aboutProject.position}}: {{projectDetails.position}}</span>
                        <br>
                        <template v-if="projectDetails.employeeType.id=='CONTRACTOR'">
                            <span>{{aboutProject.assignedTo}}: {{projectDetails.employeeType.companyAssigned.name}}</span>
                        </template>
                    </p>
                  </div>
                </div>

              </div> <!-- .col-md-8 -->
              
              <ProjectItemSidebar 
                :projectsRelationed="projectsRelationed"
                @onClickToProjectById="onClickToProjectById" />

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
                findProject.image = this.$url + '/' + findProject.image
                findProject.company.logo = this.$url + '/' + findProject.company.logo
                this.projectDetails = findProject;
                this.findProjectRelationed()
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
        findProjectRelationed() {
            this.projectsRelationed = this.projects.filter(
                e => e.id != this.projectDetails.id);
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