<template>
    <div>
        <Loader v-show="showLoader" />
        <TitlePageParent title="Proyectos" :showLoader="showLoader" />
        <div class="cards" :style="marginTopContentPage">
            <div class="fh5co-narrow-content">
                <ProjectItem :items="projects" @goToProjectDetails="goToProjectDetails" />
            </div>
        </div>

    </div>
</template>
<script>
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import TitlePageParent from '@/components/_Shared/TitlePageParent.vue'
import ProjectItem from "@/components/_Shared/ProjectItem.vue";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { TitlePageParent, ProjectItem, Loader },
    data() {
        return {
            showLoader: true,
            marginTopContentPage: `margin-top:${constants.marginTopContentPage}`
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let thix = this
        setTimeout(function () {
            thix.showLoader = false
        }, constants.timeOutOverlay)
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
