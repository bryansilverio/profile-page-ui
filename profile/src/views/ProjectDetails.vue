<template>

    <div>
        <section class="hero-wrap js-fullheight" style="background-image: url('assets/images/bg_1.jpg');" data-stellar-background-ratio="0.5">
          <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
              <div class="col-md-12 pb-5 mb-3 text-center" style="margin-top: 20%;">
                <h2 class="mb-3 bread">{{projectDetails.name}}</h2>
                <p class="breadcrumbs">
                    <span class="mr-2">
                        <a @click="onClickToBack('/')">
                            Home <i class="ion-ios-arrow-forward"></i>
                        </a>
                    </span> 
                    <span class="mr-2">
                        <a @click="onClickToBack('/#projects-section')">
                            Proyectos <i class="ion-ios-arrow-forward"></i>
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
                
                <div class="about-author d-flex p-4 bg-dark">
                  <div class="bio mr-5">
                    <img src="images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4">
                  </div>
                  <div class="desc">
                    <h3>Proyecto desarrollado en:</h3>
                    <p>Empresa: {{projectDetails.company.name}}</p>
                    <p>Área: {{projectDetails.area}}</p>
                    <p>Posición: {{projectDetails.position}}</p>
                    <template v-if="projectDetails.employeeType.id=='CONTRACTOR'">
                        <p>Asignado a: {{projectDetails.employeeType.companyAssigned.name}}</p>
                    </template>
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
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition')

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
            this.findProjectById($id)
        },
        findProjectRelationed() {
            this.projectsRelationed = this.projects.filter(
                e => e.id != this.projectId && e.company.id == this.projectDetails.company.id);
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