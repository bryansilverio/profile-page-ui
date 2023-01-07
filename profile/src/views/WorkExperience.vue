<template>
    <div>
        <TitlePage title="Experiencia" />
        <div class="cards">
            <div class="fh5co-narrow-content">
                <WorkExperienceItem :items="workExperiences" />
            </div>
        </div>
    </div>
</template>
<script>
import TitlePage from '@/components/_Shared/TitlePage.vue'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { TitlePage, WorkExperienceItem },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    computed: {
        workExperiences() {
            return work_experiences_data
        }
    }
};
</script>
  