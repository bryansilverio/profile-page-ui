<template>
  <main id="main">
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Contacto</h2>
          <p>
          </p>
        </div>

        <div>
          <iframe
            style="border:0; width: 100%; height: 270px;"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="row mt-5">
          <div class="col-lg-4">
            <div class="info">
              <ContactItem
                contactType="address"
                iconContactType="bi bi-geo-alt"
                label="Ciudad"
                value="Qro. MX"
              />
              <ContactItem
                contactType="email"
                iconContactType="bi bi-envelope"
                label="Correo"
                value="bryansilverio12@gmail.com"
              />
              <ContactItem
                contactType="email"
                iconContactType="bi bi-phone"
                label="Teléfono"
                value="4461158755"
              />
            </div>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <SendMessage />
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </main>
  <!-- End #main -->
</template>
<script>
import dataObject from "@/data/data.json";

import ContactItem from "@/components/ContactItem";
import SendMessage from "@/components/SendMessage";

export default {
  name: "Contact",
  components: { ContactItem, SendMessage },
  data() {
    return {
      contactLinks: dataObject.contactLinks,
    };
  },
};
</script>
