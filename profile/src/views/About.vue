<template>

    <!--====== ABOUT PART START ======-->

    <section id="about" class="about_area pt-115 pb-120">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-12">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Sobre mí</h5>
                        <h3 class="main_title">¿Quien soy?</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
                <div class="col-lg-6 col-md-9">
                    <div class="about_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <img src="assets/images/about_hero.png" alt="Hero">
                        <div class="about_shape"></div>
                    </div> <!-- about image -->
                </div>
                <div class="col-lg-6">
                    <div class="about_content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div v-html="data.about"></div>
                    </div> <!-- about content -->
                </div>
                <div class="col-lg-6">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Conocimientos</h5>
                        <h3 class="main_title">Principales conocimientos</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
                <div class="col-lg-6">
                    <div class="about_content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">

                        <div class="about_skills pt-15">
                            <div class="skill_item mt-20" v-for="(v, i) in data.mainTechnologies" :key="i">
                                <div class="skill_header">
                                    <h6 class="skill_title">{{ v.name }}</h6>
                                    <div class="skill_percentage">
                                        <p><span class="counter">{{ v.type }}</span></p>
                                    </div>
                                </div>
                                <div class="skill_bar">
                                    <div class="bar_inner">
                                        <div class="bar progress_line" data-width="85"></div>
                                    </div>
                                </div>
                            </div> <!-- skill item -->
                        </div> <!-- about skill -->
                    </div> <!-- about content -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>

    <!--====== ABOUT PART ENDS ======-->
</template>
<script>
import about_data from '@/data/about.json'
export default {
    name: "About",
    computed: {
        data() {
            return about_data
        }
    }
};
</script>
  