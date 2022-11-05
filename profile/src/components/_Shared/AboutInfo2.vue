<template>
    <div>
        <div class="info-one style2">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="info-image wow fadeInLeft" data-wow-delay=".3s"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <img class="ss1" :src="image" alt="#" style="border-radius: 50%;padding:50px">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="info-text wow fadeInRight" data-wow-delay=".5s"
                        style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInRight;">
                        <!--
                        <div class="main-icon">
                            <i class="lni lni-layout"></i>
                        </div>
                        -->
                        <h2>{{ title }}</h2>
                        <div v-html="description"></div>
                        <!--
                        <div class="button">
                            <a href="javascript:void(0)" class="btn">Get Started</a>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutInfo2',
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    }
}
</script>