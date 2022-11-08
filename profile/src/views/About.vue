<template>

    <!--====== ABOUT PART START ======-->
    <div>
        <Preloader :show="showPreloader" />
        <section id="about" class="about_area pt-115 pb-10">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-9">
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
                    <div class="col-lg-3 col-md-9">
                        <div class="about_image">
                            <img src="assets/images/about_hero.png" alt="Hero" style="width: 100%;border-radius:50%" />
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-19">
                        <div>
                            <a class="about_social_network" :href="v.url" target="_blank" v-for="(v, i) in socialNetwork" :key="i">
                                <i :class="v.icon"></i>
                            </a>
                        </div>
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </section>

        <Services />

        <!--====== ABOUT PART ENDS ======-->
    </div>
</template>
<script>
import social_network_data from '@/data/social-network.json'
import about_data from '@/data/about.json'
import Services from '@/components/_Shared/Services.vue'
import Preloader from "@/components/layout/Preloader.vue";
export default {
    name: "About",
    components: { Services, Preloader },
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
        }
    }
};
</script>
  