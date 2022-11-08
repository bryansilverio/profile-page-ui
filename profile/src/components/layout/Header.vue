<template>
    <div>
        <!--====== HEADER PART START ======-->

        <section class="header_area">
            <div class="header_navbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="/">
                                    <span class="logo-name">B</span><span class="logo-lastname">silverio</span>
                                    <i class="lni lni-cool"></i>
                                    <!--<img src="assets/images/logo.svg" alt="Logo">-->
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>

                                <Menu />
                            </nav> <!-- navbar -->
                        </div>
                    </div> <!-- row -->
                </div> <!-- container -->
            </div> <!-- header navbar -->

            <IntroHome v-if="this.$route.name == 'home'" />
            <!--<AboutHome v-else-if="this.$route.name == 'about'" />-->
            <WorkExperienceHome v-else-if="this.$route.name == 'work-experience'" />
            <ProjectHome v-else-if="this.$route.name == 'projects'" />

        </section>

        <!--====== HEADER PART ENDS ======-->

    </div>
</template>
<script>
import IntroHome from '@/components/_Shared/IntroHome.vue'
//import AboutHome from '@/components/_Shared/AboutHome.vue'
import WorkExperienceHome from '@/components/_Shared/WorkExperienceHome.vue'
import ProjectHome from '@/components/_Shared/ProjectHome.vue'
import Menu from '@/components/_Shared/Menu.vue'
export default {
    name: "Header",
    components: { IntroHome, Menu, WorkExperienceHome, ProjectHome }
};
</script>
