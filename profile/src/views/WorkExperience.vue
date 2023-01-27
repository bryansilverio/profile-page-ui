<template>
    <div>
        <Loader v-show="showLoader" />
        <TitlePageSmall :title="title" :showLoader="showLoader" />
        <div class="cards" :style="marginTopContentPage">
            <div class="fh5co-narrow-content">
                <WorkExperienceItem :items="workExperiences" />
            </div>
        </div>
    </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
import Loader from '@/components/_Shared/Loader.vue'
import constants from '@/common/constants.js'
import TitlePageSmall from '@/components/_Shared/TitlePageSmall.vue'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { TitlePageSmall, WorkExperienceItem, Loader },
    data() {
        return {
            showLoader: true,
            marginTopContentPage: `margin-top:${constants.marginTopContentPage}`,
            title: VueI18n.tc('pages.home.sections.experience.name')
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
