<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-115 pb-120">
        <div class="container">

            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Actividades</h5>
                        <h3 class="main_title">Principales actividades</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div v-for="(v, i) in activities" :key="i">
                <AboutInfo1 v-if="i % 2 == 0" :title="v.title" :description="v.description" :image="v.image" />
                <AboutInfo2 v-else :title="v.title" :description="v.description" :image="v.image" />
            </div>

            <!--
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Actividades</h5>
                        <h3 class="main_title">Principales actividades</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>  
                </div>
            </div>  
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(v, i) in activities" :key="i">
                    <div class="single_service mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div class="service_icon">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="service_content">
                            <h4 class="service_title"><a href="#">{{ v.title }}</a></h4>
                            <div v-html="v.description"></div>
                        </div>
                    </div>  
                </div>
            </div> -->
        </div>
    </section>

    <!--====== SERVICES PART ENDS ======-->
</template>
<script>
import activities_data from '@/data/activities.json'
import AboutInfo1 from '@/components/_Shared/AboutInfo1.vue'
import AboutInfo2 from '@/components/_Shared/AboutInfo2.vue'
export default {
    name: "Services",
    components: { AboutInfo1, AboutInfo2 },
    computed: {
        activities() {
            return activities_data
        }
    }
};
</script>
  