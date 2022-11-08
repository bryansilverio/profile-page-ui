<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-20 pb-120">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="skills_section_title pb-20">
                        <h3 class="skills_main_title">Mis conocimientos</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(v, i) in activities" :key="i" class="col-lg-12">
                    <AboutInfo :title="v.title" :description="v.description" :image="v.image"
                        :technologies="v.technologies" />
                </div>
            </div>
        </div>
    </section>

    <!--====== SERVICES PART ENDS ======-->
</template>
<script>
import activities_data from '@/data/activities.json'
import AboutInfo from '@/components/_Shared/AboutInfo.vue'
export default {
    name: "Services",
    components: { AboutInfo },
    computed: {
        activities() {
            return activities_data
        }
    }
};
</script>
  