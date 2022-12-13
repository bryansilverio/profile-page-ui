<template>
    <div>
        <div class="row">
            <div class="col-lg-4">
                <div class="text-center">
                    <h4>Frontend</h4>
                </div>
                <carousel :per-page="1" :mouse-drag="false" v-for="(v0, i0) in frontendSkills" :key="i0" class="pb-50"
                    :autoplay="true" :loop="true" pagination-active-color="#ff5c35" pagination-color="#fff">
                    <slide v-for="(v1, i1) in v0.technologies" :key="i1">
                        <div class="service_icon text-center">
                            <i :class="v1.icon" style="font-size:80px"></i>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <h4>Backend</h4>
                </div>
                <carousel :per-page="1" :mouse-drag="false" v-for="(v0, i0) in backendSkills" :key="i0" class="pb-50"
                    :autoplay="true" :loop="true" pagination-active-color="#ff5c35" pagination-color="#fff">
                    <slide v-for="(v1, i1) in v0.technologies" :key="i1">
                        <div class="service_icon text-center">
                            <i :class="v1.icon" style="font-size:80px"></i>
                        </div>
                    </slide>
                </carousel>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <h4>DevTools</h4>
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
  