<template>
    <section class="ftco-section ftco-no-pb" id="resume-section">
        <div class="container">
            <div class="row justify-content-center pb-5">
          <div class="col-md-10 heading-section text-center">
            <h1 class="big big-2">{{title}}</h1>
            <h2 class="mb-4">{{title}}</h2>
            <p>{{textSection}}</p>
          </div>
        </div>
            <div class="row">
                <div class="col-md-6" v-for="(v,i) in workExperiences" :key="i">
                    <WorkExperienceItem :item="v"/>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-md-6 text-center">
                    <p><a href="#" class="btn btn-primary py-4 px-5" v-show="false">{{btnDownloadCv}}</a></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem },
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.experience.name'),
            textSection: VueI18n.tc('pages.home.sections.experience.textSection'),
            btnDownloadCv:VueI18n.tc('common.btnDownloadCV'),
        }
    },
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
