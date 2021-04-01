<template>
  <div>
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ $t("menu.contact") }}</h2>
        </div>

        <div class="row mt-1">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>{{ $t("sections.contact.city") }}:</h4>
                <p>{{ data.about.location }}</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Em{{ $t("sections.contact.email") }}ail:</h4>
                <p>{{ data.about.email }}</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>{{ $t("sections.contact.phone") }}:</h4>
                <p>{{ data.about.phone }}</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//Components
import ContactForm from "@/views/components/ContactForm";
export default {
  name: "Contact",
  components: { ContactForm },
  props: { data: Object },
};
</script>
