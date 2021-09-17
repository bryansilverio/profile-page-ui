<template>
  <!--services section-->
  <section class="bg-light py-7" id="services">
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <h2 class="dot-circle">Servicios</h2>
          <p class="text-muted lead">
            Algunos de los servicios.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-10 mx-auto">
          <div class="row card-services">
            <ServiceItem
              :value="{
                title: 'Desarrollo sistemas web',
                description: 'Desarrollo de sistemas web',
              }"
            />
            <ServiceItem
              :value="{
                title: 'Desarrollo web',
                description: 'Desarrollo de pagínas web',
              }"
            />
            <div class="col-md-6 mx-auto text-center">
              <hr class="my-5" />
              <h4>¿Necesitas algún servicio?</h4>
              <a href="#contact" class="btn btn-primary">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import dataObject from "@/data/data.json";
import ServiceItem from "@/components/ServiceItem";

export default {
  name: "Services",
  components: { ServiceItem },
  data() {
    return {
      experiences: dataObject.experience,
      education: dataObject.education,
      courses: dataObject.courses,
    };
  },
};
</script>
