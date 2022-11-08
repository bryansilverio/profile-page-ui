<template>
    <div>
        <div class="info-one info-one-border">
            <div class="row align-items-center">
                <div class="col-lg-1 col-md-12 col-12">
                    <i class="lni lni-code-alt" style="font-size:30px"></i>
                </div>
                <div class="col-lg-11 col-md-12 col-12">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-12">
                            <h2 class="sub_title_activity_service">{{ title }}</h2>
                        </div>
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="info-text wow fadeInLeft" data-wow-delay=".3s"
                                style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                                <div class="text-description" v-html="description"></div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="image_technology_item">
                                <img v-for="(v, i) in technologies" :key="i" :src="v.icon" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import technologies_data from '@/data/technologies.json'
export default {
    name: 'AboutInfo1',
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        technologies: {
            type: Array
        }
    },
    computed: {
        technologiesIcons() {
            return technologies_data
        }
    }
}
</script>