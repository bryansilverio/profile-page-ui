<template>
    <div id="home" class="header_hero">
        <ul class="header_social d-none d-lg-block">
            <li v-for="(v, i) in socialNetwork" :key="i"><a :href="v.url"><i :class="v.icon"></i></a></li>
        </ul>
        <div class="container">
            <div class="row align-items-center justify-content-center justify-content-lg-between">
                <div class="col-lg-6">
                    <div class="header_hero_content mt-45">
                        <h5 class="header_sub_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            {{ subtitle }}</h5>
                        <h2 class="header_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            {{ title }}
                        </h2>
                        <span class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                            {{ subtitle }}
                        </span>
                        <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                            {{ text }}
                        </p>
                        <a href="/contact" rel="nofollow" class="main-btn wow fadeInUp" data-wow-duration="1.3s"
                            data-wow-delay="1.4s">
                            Contactame
                            
                        </a>
                    </div> <!-- header hero content -->
                </div>
                <div class="col-lg-6 col-md-6 col-sm-7">
                    <div class="header_hero_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s"
                        data-wow-delay="1.8s">
                        <img :src="image" alt="hero">
                    </div> <!-- header hero image -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
        <div class="header_hero_shape d-none d-lg-block"></div> <!-- header hero shape -->
    </div> <!-- header hero -->
</template>
<script>
import social_network_data from '@/data/social-network.json'
export default {
    name: "Home",
    watch: {
        $route() {
            this.setData();
        }
    },
    data() {
        return {
            title: '',
            subtitle: '',
            text: '',
            image: '',
            url: ''
        };
    },
    created() {
        this.setData();
    },
    methods: {
        setData() {

            if (this.$route.path == '/') {
                this.title = "Bryan Silverio";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/about"
            }
            else if (this.$route.path == '/about') {
                this.title = "Sobre mi";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/work-experience') {
                this.title = "Mi Experiencia";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/projects') {
                this.title = "Mis projectos";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/contact') {
                this.title = "Contacto";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
        }
    },
    computed: {
        socialNetwork() {
            return social_network_data
        }
    }
};
</script>
  