<template>
    <div>
        <div class="fh5co-narrow-content  animate-box">
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Proyectos</h2>
            <div class="row">
                <ProjectItem v-for="(v, i) in projects" :key="i" :project="v" cssClass="col-md-4 fh5co-staff"
                    @goToProjectDetails="goToProjectDetails" />
            </div>
        </div>

        <div class="fh5co-narrow-content">
            <div class="row">
                <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <h1 class="fh5co-heading-colored">Start Your Project Now!</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <p class="fh5co-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                        large
                        language ocean.</p>
                    <p><a href="#" class="btn btn-primary btn-outline">Get Started</a></p>
                </div>
                <div class="col-md-7 col-md-push-1">
                    <div class="row">
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life One day however a small line of blind text by the name of Lorem
                                Ipsum
                                decided to leave for the far World of Grammar.</p>
                        </div>
                        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life One day however a small line of blind text by the name of Lorem
                                Ipsum
                                decided to leave for the far World of Grammar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectItem from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { ProjectItem },
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
            return projects_data
        }
    }
};
</script>
