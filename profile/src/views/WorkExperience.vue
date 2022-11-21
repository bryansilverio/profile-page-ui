<template>
    <div>
        <section id="work-experience" class="work_experience_area pt-50 pb-120">
            <div class="container">
                <div class="row align-items-start justify-content-start pb-30">
                    <div class="col-lg-12">
                        <div class="about_section_title text-center">
                            <h3 class="about_main_title mt-10">Experiencia Profesional</h3>
                            <h5 class="sub_title" style="color: #000;">Mi experiencia laboral</h5>
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
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem },
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
  