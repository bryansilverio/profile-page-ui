<template>
    <div>
        <div class="single_service mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
            <div class="service_icon text-center">
                <i :class="image"></i>
            </div>
            <div class="service_content">
                <h4 class="service_title"><a href="#">{{ title }}</a></h4>
                <div class="text-description" v-html="description"></div>
                <i v-for="(v, i) in technologies" :key="i" :class="v.icon"
                    :style="'color: ' + v.color + ';margin: 5px;font-size:30px'"></i>
            </div>
        </div> <!-- single service -->
        <!--
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
                                <span class="badge" style="background-color: #3B3F45;margin: 5px;"
                                    v-for="(v, i) in technologies" :key="i">
                                    <img :src="v.icon" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
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