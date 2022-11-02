<template>
    <section id="counter" class="counter_area gray-bg pt-70 pb-120">
        <div class="container">
            <div class="row justify-content-center">
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
            </div> <!-- row -->
            <div class="row">
                <div class="col-lg-2 col-sm-6" v-for="(v, i) in icons" :key="i">
                    <div class="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s"
                        data-wow-delay="0.2s"
                        style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeIn;">
                        <div class="counter_icon">
                            <img :src="v.value" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Skill",
    data() {
        return {
            icons: [
                {
                    value: 'assets/icons/icons8-api-60.png',
                    name:''
                },
                {
                    value: 'assets/icons/icons8-c-sharp-logo-50.png'
                },
                {
                    value: 'assets/icons/icons8-java-50.png'
                },
                {
                    value: 'assets/icons/icons8-html-52.png'
                },
                {
                    value: 'assets/icons/icons8-javascript-50.png'
                },
                {
                    value: 'assets/icons/icons8-sql-52.png'
                },
                {
                    value: 'assets/icons/icons8-css3-48.png'
                }
            ]
        };
    },
};
</script>
  