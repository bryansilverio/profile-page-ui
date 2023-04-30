<template>
    <section class="ftco-section ftco-no-pb" id="resume-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection"/>
            <div class="row">
                <!--------->
                <div class="col-md-12">
                    <section>
                      <ul class="timeline-with-icons">
                        <template v-for="(v,i) in workExperiences">
                            <WorkExperienceItem :item="v" :key="i"/>  
                        </template>
                      </ul>
                    </section>
                </div>
                <!--------->
            </div>
        </div>
    </section>
</template>
<style>
 .timeline-with-icons {
  border-left: 1px solid #FF474C;
  position: relative;
  list-style: none;
  left: 30px;
  font-size: x-large;
}

.timeline-with-icons .timeline-item {
  position: relative;
}

.timeline-with-icons .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline-with-icons .timeline-icon {
  position: absolute;
  left: -56px;
  background-color: rgba(255, 255, 255, 0.1);
  color: hsl(217, 88.8%, 35.1%);
  border-radius: 50%;
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
import VueI18n from '@/translation/i18n'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, SectionTitle },
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
