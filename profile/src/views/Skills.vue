<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-120 pb-120">
        <div class="container">
            <div class="row align-items-start justify-content-start">
                <div class="col-lg-12">
                    <div class="about_section_title pb-20 text-center">
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
            <div class="row" v-for="(v1, i1) in activities" :key="i1">
                <div class="col-lg-12 col-sm-12 mt-30">
                    <h4 class="service_title"><a href="#">{{ v1.title }}</a></h4>
                </div>
                <div class="col-lg-2 col-sm-2" v-for="(v, i) in v1.technologies" :key="i" style="cursor: pointer;">
                    <div class="single_service mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div class="service_icon text-center">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="service_content">
                            <!--
                            <h4 class="service_title"><a href="#">{{ v.name }}</a></h4>
                            <div class="text-description" v-html="''"></div>
                            -->
                            <!--<i :class="v.icon" :style="'color: ' + v.color + ';margin: 5px;font-size:30px'"></i>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--====== SERVICES PART ENDS ======-->
</template>
<script>
import activities_data from '@/data/activities.json'

export default {
    name: "Services",
    components: {},
    computed: {
        activities() {
            return activities_data
        }
    }
};
</script>
  