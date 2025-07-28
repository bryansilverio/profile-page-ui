<script src="./profile-about-section.js"></script>
<style src="./profile-about-section.css" />
<template>
  <section class="section" id="about">
    <div class="top-header">
      <h1>{{ $t("sections.aboutMe") }}</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="about-info">
          <p>{{ $t("about") }}
          </p>
          <div class="about-btn">
            <button class="btn">
              {{ $t("buttons.downloadCV") }} <i class="uil uil-import"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
