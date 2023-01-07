<template>
    <div>
        <TitlePage title="Sobre mí" />
        <div class="fh5co-narrow-content">
            <div class="row">
                <div class="col-md-5">
                    <p class="fh5co-lead animate-box" data-animate-effect="fadeInLeft">
                        Bryan Silverio - Desarrollador Web
                    </p>
                    <p class="animate-box" data-animate-effect="fadeInLeft" v-html="data.about"></p>
                </div>
                <div class="col-md-6 col-md-push-1 animate-box" data-animate-effect="fadeInLeft">
                    <img src="assets/images/about_hero.png" alt="about me" class="img-responsive" width="70%" />
                </div>
                <div class="col-md-12">
                    <p class="animate-box" data-animate-effect="fadeInLeft" v-html="data.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.social-network-items {
    display: inline-block;
    margin-right: 15px;
    font-size: x-large;
}
</style>

<script>
import TitlePage from '@/components/_Shared/TitlePage.vue'
import about_data from "@/data/about.json";
export default {
    name: "About",
    components: { TitlePage },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
    computed: {
        data() {
            return about_data;
        }
    },
};
</script>
