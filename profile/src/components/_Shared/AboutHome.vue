<template>
    <div id="home" class="header_hero">
        <ul class="header_social d-none d-lg-block">
            <li v-for="(v, i) in socialNetwork" :key="i"><a :href="v.url"><i :class="v.icon"></i></a></li>
        </ul>
        <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
                <div class="col-lg-6">
                    <div class="header_hero_content mt-45">
                        <h2 class="header_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s"
                            style="color: #fff">
                            {{ title }}
                        </h2>
                    </div> <!-- header hero content -->
                </div>
                <div class="col-lg-6 col-md-6 col-sm-7">

                </div>
            </div> <!-- row -->
        </div> <!-- container -->
        <div class="header_hero_shape d-none d-lg-block"></div> <!-- header hero shape -->
    </div> <!-- header hero -->
</template>
<script>
import social_network_data from '@/data/social-network.json'
export default {
    name: "AboutHome",
    data() {
        return {
            title: 'Sobre mí',
            subtitle: 'Sobre mí',
            text: '',
            image: 'assets/images/hero.png',
            url: ''
        };
    },
    computed: {
        socialNetwork() {
            return social_network_data
        }
    }
};
</script>
  