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
import Services from '@/components/_Shared/Services.vue'
import Skill from '@/components/_Shared/Skill.vue'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, Services, Skill },
    data() {
        return {
            workExperiences: [
                {
                    position: 'Desarrollador Java',
                    company: 'GoNet - BBVA',
                    date: 'Mayo 2021',
                    number: '05',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    position: 'Desarrollador Fullstack',
                    company: 'Bitfx',
                    date: 'Agosto 2019 - Abril 2021',
                    number: '04',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    position: 'Desarrollador .NET',
                    company: 'Tasi Software',
                    date: 'Enero 2018 - Agosto 2019',
                    number: '03',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    position: 'Desarrollador .NET',
                    company: 'DW Software',
                    date: 'Agosto 2017 - Noviembre 2017',
                    number: '02',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
                {
                    position: 'Desarrollador Web',
                    company: 'IT Group',
                    date: 'Agosto 2015 - Agosto 2017',
                    number: '01',
                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam.Lorem ipsum dolor sit ametconsete tur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam nonumy diam...'
                },
            ]
        };
    },
};
</script>
  