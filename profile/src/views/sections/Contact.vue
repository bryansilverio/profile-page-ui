<template>
  <div>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t("menu.contact") }}</h2>
          <p class="mt-3">{{ $t("sections.contact.title") }}</p>
        </div>

        <div class="row mt-2">
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-map"></i>
              <h3>{{ $t("sections.contact.city") }}</h3>
              <p>{{ data.about.location }}</p>
            </div>
          </div>

          <div class="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-share-alt"></i>
              <h3>{{ $t("sections.contact.contact") }}</h3>
              <div class="social-links">
                <SocialNetworkItem
                  v-for="(item, index) in data.social_network"
                  :key="index"
                  :item="item"
                />
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>{{ $t("sections.contact.email") }}</h3>
              <p>{{ data.about.email }}</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 d-flex align-items-stretch">
            <div class="info-box">
              <i class="bx bx-phone-call"></i>
              <h3>{{ $t("sections.contact.phone") }}</h3>
              <p>{{ data.about.phone }}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
    <!-- End Contact Section -->
  </div>
</template>
<script>
//Components
import SocialNetworkItem from "@/views/components/SocialNetworkItem";
import ContactForm from "@/views/components/ContactForm";

export default {
  name: "Contact",
  components: { SocialNetworkItem, ContactForm },
  props: { data: Object },
};
</script>
