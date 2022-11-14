<template>
    <div>
        <Preloader :show="showPreloader" />
        <section id="work-experience" class="work_experience_area pt-115">
            <div class="container">
                <div class="row align-items-start justify-content-start">
                    <div class="col-lg-6">
                        <div class="about_section_title text-left">
                            <h3 class="about_main_title mt-10">Experiencia Profesional</h3>
                            <h5 class="sub_title"  style="color: #fff;">Mi experiencia laboral</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <WorkExperienceItem :workExperiences="workExperiences" />
            </div>
        </section>
    </div>
</template>
<script>
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
import Preloader from "@/components/layout/Preloader.vue";
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, Preloader },
    data() {
        return {
            showPreloader: true
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.getShowPreloader()
    },
    methods: {
        getShowPreloader() {
            let thix = this
            setTimeout(function () {
                thix.showPreloader = false
            }, 1000);
        }
    },
    computed: {
        workExperiences() {
            return work_experiences_data
        }
    }
};
</script>
  