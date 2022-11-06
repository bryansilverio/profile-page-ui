<template>
    <section id="services" class="services_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="section_title text-center pb-30">
                        <h3 class="main_title">404</h3>
                        <h5 class="sub_title">Página no encontrada</h5>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <span>La página que buscabas no existe.</span>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="text-center">
                        <router-link class="main-btn-home-about mt-20" to="/">
                            Regresar al inicio <i class="lni lni-chevron-left-circle"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    name: "NotFound",
};
</script>
  