<template>

    <!--====== ABOUT PART START ======-->
    <div>
        <section id="about" class="about_area pt-50 pb-100">
            <div class="container">
                <div class="row align-items-start justify-content-start mb-50">
                    <div class="col-lg-12">
                        <div class="about_section_title text-center">
                            <h3 class="about_main_title mt-10">Sobre mí</h3>
                            <h5 class="sub_title" style="color: #fff;"></h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-4 col-md-9">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="about_image">
                                    <img src="assets/images/about_hero.png" alt="Hero" class="about_image" />
                                </div>
                            </div>
                            <div class="col-lg-12 text-center">
                                <a class="about_social_network" :href="v.url" target="_blank"
                                    v-for="(v, i) in socialNetwork" :key="i">
                                    <i :class="v.icon"></i>
                                </a>
                            </div>
                            <div class="col-lg-12 text-center">
                                <a href="#" class="btn btn-default btn_download_cv">Download Cv</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="about_section_title text-left">
                            <h3 class="about_main_title mt-10">Bryan Silverio</h3>
                            <h5 style="color: #fff;">Desarrollador Web | Backend</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div> <!-- section title -->
                        <div class="about_content mt-30" v-html="data.about"></div>
                    </div>
                </div>
            </div> <!-- container -->
        </section>
        <!--====== ABOUT PART ENDS ======-->
    </div>
</template>
<script>
import social_network_data from '@/data/social-network.json'
import about_data from '@/data/about.json'
import activities_data from '@/data/activities.json'
export default {
    name: "About",
    data() {
        return {
            showPreloader: true
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.getShowPreloader()
    },
    methods: {
        getShowPreloader() {
            let thix = this
            setTimeout(function () {
                thix.showPreloader = false
            }, 1000);
        }
    },
    computed: {
        data() {
            return about_data
        },
        socialNetwork() {
            return social_network_data
        },
        activities() {
            return activities_data
        }
    }
};
</script>
  