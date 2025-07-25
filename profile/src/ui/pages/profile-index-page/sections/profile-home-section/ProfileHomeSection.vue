<style src="./profile-home-section.css"></style>
<script src="./profile-home-section.js"></script>
<template>
  <section class="featured-box" id="home">
    <div class="featured-text">
      <div class="featured-text-card">
        <span>{{ $t("name") }}</span>
      </div>
      <div class="featured-name">
        <p>{{ $t("name") }}<span class="typedText"></span></p>
      </div>
      <div class="featured-text-info">
        <p>
          {{ $t("position") }}
        </p>
        <p>{{ $t("fromLocation") }}</p>
      </div>
      <div class="featured-text-btn">
        <button class="btn blue-btn">
          <a :href="contactDetailsEmail.url"
            ><i class="uil uil-envelope" style="color:white"></i>
            <span style="color:white">{{ contactDetailsEmail.value }}</span></a
          >
        </button>
        <button class="btn">
          {{ $t("buttons.downloadCV") }} <i class="uil uil-file-alt"></i>
        </button>
      </div>
      <div class="social_icons">
        <div
          class="icon"
          v-for="(v, i) in contactDetailSocialNetworks"
          :key="i"
        >
          <a :href="v.url"><i :class="v.icon" style="color:#D43F46"></i></a>
        </div>
      </div>
    </div>
    <div class="featured-image">
      <div class="image">
        <img src="assets/images/profile-pic.png" alt="avatar" />
      </div>
    </div>
    <div class="scroll-icon-box">
      <a href="#about" class="scroll-btn">
        <i class="uil uil-mouse-alt"></i>
        <p>Scroll Down</p>
      </a>
    </div>
  </section>
</template>
