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
                <div class="col-lg-2 col-sm-6 icon_hover" v-for="(v, i) in technologiesIcons" :key="i">
                    <div class="single_counter mt-50 d-flex align-items-center wow fadeIn" data-wow-duration="1.3s"
                        data-wow-delay="0.2s"
                        style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeIn;">
                        <div class="counter_icon">
                            <img :src="v.value" alt="" :title="v.name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import technologies_data from '@/data/technologies.json'

export default {
    name: "Skill",
    computed: {
        technologiesIcons() {
            return technologies_data
        }
    }
};
</script>
  