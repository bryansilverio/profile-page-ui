<template>
    <div>
        <Loader v-show="showLoader" />
        <TitlePage title="Experiencia" :showLoader="showLoader"/>
        <div class="cards" :style="marginTopContentPage">
            <div class="fh5co-narrow-content">
                <WorkExperienceItem :items="workExperiences" />
            </div>
        </div>
    </div>
</template>
<script>
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import TitlePage from '@/components/_Shared/TitlePage.vue'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { TitlePage, WorkExperienceItem, Loader },
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
    computed: {
        workExperiences() {
            return work_experiences_data
        }
    }
};
</script>
