<template>
    <div>
        <Services />
        <section id="work" class="work_experience_area pt-115">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section_title text-center pb-30">
                            <h5 class="sub_title">Experiencia</h5>
                            <h3 class="main_title">Experiencia Profesional</h3>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <WorkExperienceItem :workExperiences="workExperiences" />
                {{ workExperiences.length }}

            </div>
        </section>

        <Skill />
    </div>
</template>
<script>
import work_experiences_data from '@/data/work-experiences.json'
import Services from '@/components/_Shared/Services.vue'
import Skill from '@/components/_Shared/Skill.vue'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, Services, Skill },
    computed: {
        workExperiences() {
            return work_experiences_data
        }
    }
};
</script>
  