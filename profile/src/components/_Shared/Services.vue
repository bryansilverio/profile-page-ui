<template>
    <!--====== SERVICES PART START ======-->

    <section id="services" class="services_area pt-115 pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center pb-30">
                        <h5 class="sub_title">Actividades</h5>
                        <h3 class="main_title">Principales actividades</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            <div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(v, i) in activities" :key="i">
                    <div class="single_service mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div class="service_icon">
                            <i :class="v.icon"></i>
                        </div>
                        <div class="service_content">
                            <h4 class="service_title"><a href="#">{{ v.title }}</a></h4>
                            <div v-html="v.description"></div>
                        </div>
                    </div> <!-- single service -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>

    <!--====== SERVICES PART ENDS ======-->
</template>
<script>
export default {
    name: "Services",
    data() {
        return {
            activities: [
                {
                    title: 'Frontend',
                    icon: 'lni lni-code',
                    description: '<p>Desarrollo de frontend usando principalmente VueJs como framework aparte de html, css y javascript.</p><p>Permitiendo construir la interfaz grafica que visualizara el cliente o consumidor final para operar.</p><p>Permitiendo separar el frontend del backend lo que permite que sea mas flexible el mantenimiento del frontend</p>'
                },
                {
                    title: 'Backend',
                    icon: 'lni lni-dev',
                    description: '<p>Desarollo de la funcionalidad que consumira el frontend, usando principalmente C# (.NET Core) y Java (Spring).</p><p>Permitiendo desarrollar la logica de negocio y las principales operaciones que necesita el frontend.</p> <p>Tambien permite desacoparlo estas operaciones del frontend.</p>'
                },
                {
                    title: 'APIs REST',
                    icon: 'lni lni-cloud-network',
                    description: ' <p>Diseño y desarrollo de microservicios basados en REST, buscando que el diseño de la API sea entendible para los consumidores y que cumpla la operación y sentido funcional.</p>'
                }
            ]
        };
    },
};
</script>
  