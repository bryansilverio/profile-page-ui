<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-100 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="about_section_title pb-20">
                            <h3 class="about_main_title">Mis conocimientos</h3>
                            <h5 style="color: #fff;">Backend | Frontend | API</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-for="(v, i) in activities" :key="i" class="col-lg-4 col-sm-6">
                    <AboutInfo :title="v.title" :description="''" :image="v.image" :technologies="v.technologies" />
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
  