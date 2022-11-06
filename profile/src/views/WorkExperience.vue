<template>
    <div>
        <Preloader :show="showPreloader" />
        <section id="work" class="work_experience_area pt-115">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title">Experiencia Profesional</h3>
                            <h5 class="sub_title">Mi experiencia laboral</h5>
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

        <Skill />
    </div>
</template>
<script>
import work_experiences_data from '@/data/work-experiences.json'
import Skill from '@/components/_Shared/Skill.vue'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
import Preloader from "@/components/layout/Preloader.vue";
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, Skill, Preloader },
    data() {
        return {
            showPreloader: true
        }
    },
    created() {
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
  