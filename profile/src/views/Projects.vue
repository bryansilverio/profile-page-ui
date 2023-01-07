<template>
    <div>

        <div class="fh5co-cards">
            <div class="fh5co-narrow-content">
                <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Press Release</h2>
                <ProjectItem :items="projects" @goToProjectDetails="goToProjectDetails" />
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
