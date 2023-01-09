<template>
    <div class="fh5co-card-title-page header-page" :style="styleObj">
        <div class="fh5co-narrow-content">
            <div class="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="fh5co-heading">{{ title }}</h2>
                        <button class="btn btn-md btn-primary" style="border-radius: 9999px;">Learn More</button>
                    </div>
                    <div class="item col-md-6">
                        <figure>
                            <img src="assets/images/testimonial_person2.jpg" alt="Free HTML5 Bootstrap Template">
                        </figure>
                        <ul class="fh5co-social-title-page" style="text-align: center;">
                            <li v-for="(v, i) in socialNetworkItems" :key="i" class="social-network-items text-center">
                                <a :href="v.url" target="_blank">
                                    <i :class="v.icon" style="color: white"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
import social_network_data from "@/data/social-network.json";
export default {
    name: 'TitlePage',
    props: {
        title: {
            type: String,
            default: ''
        },
        showLoader: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        socialNetworkItems() {
            return social_network_data;
        },
        styleObj() {
            return {
                position: 'fixed',
                top: '0',
                width: '100%',
                padding: '15px 20px',
                backgroundColor: '#333',
                fontSize: '20px',
                color: '#FFFFFF',
                zIndex: this.showLoader ? '0' : '99'
            };
        }
    }
}
</script>