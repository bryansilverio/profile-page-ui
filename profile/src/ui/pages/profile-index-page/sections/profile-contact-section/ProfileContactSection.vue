<script src="./profile-contact-section.js"></script>
<template>
  <section class="section" id="contact">
    <div class="top-header">
      <h1>{{ $t("sections.contact") }}</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="contact-info">
          <h2>
            {{ $t("profile-contact-section-email") }}
            <i class="uil uil-corner-right-down"></i>
          </h2>
          <p>
            <i class="uil uil-envelope"></i>
            {{ contactDetailsEmail.url }}
          </p>
        </div>
      </div>
      <div class="col">
        <div class="contact-info">
          <h2>
            {{ $t("profile-contact-section-phone") }}
            <i class="uil uil-corner-right-down"></i>
          </h2>
          <p><i class="uil uil-phone"></i>{{ contactDetailsPhone.url }}</p>
        </div>
      </div>
      <div class="col" v-show="false">
        <div class="form-control">
          <div class="form-inputs">
            <input type="text" class="input-field" placeholder="Name" />
            <input type="text" class="input-field" placeholder="Email" />
          </div>
          <div class="text-area">
            <textarea placeholder="Message"></textarea>
          </div>
          <div class="form-button">
            <button class="btn">Send <i class="uil uil-message"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
