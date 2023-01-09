<template>
    <div class="fh5co-card-title-page-small header-page" :style="styleObj">
        <div class="fh5co-narrow-content">
            <div class="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                <div class="row">
                    <div class="col-md-6">
                        <h5 class="fh5co-heading-small">
                            {{ title }} 
                            <button class="btn btn-md btn-primary" style="border-radius: 9999px;">Learn More</button> 
                        </h5>
                    </div>
                    <div class="item col-md-3">
                        <figure>
                            <img class="image-heading-small" src="assets/images/testimonial_person2.jpg"
                                alt="Free HTML5 Bootstrap Template">
                        </figure>

                    </div>
                    <div class="col-md-3">
                        <ul class="fh5co-social-title-page social-heading-small" style="text-align: center;">
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
.fh5co-heading-small {
    margin-top: -50px;
    font-size: 25px;
    margin-bottom: 1em;
}

.image-heading-small {
    margin-top: -86px;
    width: 100px;
    border-radius: 100px;
    text-align: center;
}

.social-heading-small {
    margin-top: -50px;
}
</style>
<script>
import social_network_data from "@/data/social-network.json";
export default {
    name: 'TitlePageSmall',
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
                backgroundColor: '#FBD065',
                fontSize: '20px',
                color: '#FFFFFF',
                zIndex: '99'
            };
        }
    }
}
</script>