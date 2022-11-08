<template>

    <div>
        <Preloader :show="showPreloader" />
        <section id="work" class="work_experience_area pt-115">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title">Mi contacto</h3>
                            <h5 class="sub_title">Métodos de contacto</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
import Preloader from "@/components/layout/Preloader.vue";
export default {
    name: "Contact",
    components: { Preloader },
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
    }
};
</script>
  