<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-50 pb-50">
        <div class="container">
            <div class="row align-items-start justify-content-start">
                <div class="col-lg-12">
                    <div class="about_section_title pb-20 text-center">
                        <h3 class="about_main_title" style="color:#fff">Mis conocimientos</h3>
                        <h5 style="color: #fff;">Backend | Frontend | DevTools</h5>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="about_section_title pb-20 text-center">
                        <h5 style="color: #fff;">Frontend</h5>
                    </div>
                    <carousel :per-page="1" :mouse-drag="false" v-for="(v0, i0) in frontendSkills" :key="i0"
                        class="pb-50" :autoplay="true" :loop="true" pagination-active-color="#ff5c35"
                        pagination-color="#fff">
                        <slide v-for="(v1, i1) in v0.technologies" :key="i1">
                            <div class="service_icon text-center">
                                <i :class="v1.icon" style="font-size:80px"></i>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="col-lg-4">
                    <div class="about_section_title pb-20 text-center">
                        <h5 style="color: #fff;">Backend</h5>
                    </div>
                    <carousel :per-page="1" :mouse-drag="false" v-for="(v0, i0) in backendSkills" :key="i0"
                        class="pb-50" :autoplay="true" :loop="true" pagination-active-color="#ff5c35"
                        pagination-color="#fff">
                        <slide v-for="(v1, i1) in v0.technologies" :key="i1">
                            <div class="service_icon text-center">
                                <i :class="v1.icon" style="font-size:80px"></i>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="col-lg-4">
                    <div class="about_section_title pb-20 text-center">
                        <h5 style="color: #fff;">DevTools</h5>
                    </div>
                    <carousel :per-page="1" :mouse-drag="false" v-for="(v0, i0) in devtoolsSkills" :key="i0"
                        :autoplay="true" :loop="true" pagination-active-color="#ff5c35" pagination-color="#fff">
                        <slide v-for="(v1, i1) in v0.technologies" :key="i1">
                            <div class="service_icon text-center">
                                <i :class="v1.icon" style="font-size:80px"></i>
                            </div>
                        </slide>
                    </carousel>
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
        frontendSkills() {
            return activities_data.filter(x => x.code == "FRONTEND")
        },
        backendSkills() {
            return activities_data.filter(x => x.code == "BACKEND")
        },
        devtoolsSkills() {
            return activities_data.filter(x => x.code == "DEVTOOLS")
        }
    }
};
</script>
  