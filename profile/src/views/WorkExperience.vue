<template>
    <section id="work" class="work_experience_area pt-115">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Experience</h5>
                        <h3 class="main_title">Work Experience</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <WorkExperienceItem :workExperiences="workExperiences"/>
            {{workExperiences.length}}

        </div>
    </section>
</template>
<script>
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components:{WorkExperienceItem},
    data() {
        return {
            workExperiences:[
                {
                    id:1,
                    position:'Graphic Designer',
                    company:'PageBulb',
                    date:'March 2019- August 2024',
                    number:'01',
                    content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    id:2,
                    position:'Graphic Designer',
                    company:'PageBulb',
                    date:'March 2019- August 2024',
                    number:'01',
                    content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    id:3,
                    position:'Graphic Designer',
                    company:'PageBulb',
                    date:'March 2019- August 2024',
                    number:'01',
                    content:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                }
            ]
        };
    },
};
</script>
  