<template>
    <!--====== HEADER PART START ======-->

    <section class="header_area">
        <div class="header_navbar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="/">
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

        <Home v-if="$route.path=='/'"/>

    </section>

    <!--====== HEADER PART ENDS ======-->
</template>
<script>
import Home from '@/components/layout/Home.vue'
import Menu from '@/components/_Shared/Menu.vue'
export default {
    name: "Header",
    components: { Home, Menu },
    data() {
        return {
        };
    },
    methods: {

    },
};
</script>
