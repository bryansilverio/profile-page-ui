<template>

    <div>
        <section id="contact" class="work_experience_area pt-50 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title">Contacto</h3>
                            <h5 class="sub_title">Métodos de contacto</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single_service mt-30 wow fadeInUpBig"
                            style="box-shadow: #646f87 0px 0px 10px 0px;">
                            <div class="service_icon text-center">
                                <i class="lni lni-envelope" style="font-size:40px"></i>
                            </div>
                            <div class="service_content">
                                <p class="text-center">someone@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single_service mt-30 wow fadeInUpBig"
                            style="box-shadow: #646f87 0px 0px 10px 0px;">
                            <div class="service_icon text-center">
                                <i class="lni lni-linkedin-original" style="font-size:40px"></i>
                            </div>
                            <div class="service_content">
                                <p class="text-center">someone@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
export default {
    name: "Contact",
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
</script>
  