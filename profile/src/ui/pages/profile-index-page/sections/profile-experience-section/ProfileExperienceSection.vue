<script src="./profile-experience-section.js"></script>
<template>
  <section id="experience" class="my-5 py-5 bg-text" data-text="02">
    <div class="top-header">
      <h1>{{ $t("sections.experience") }}</h1>
    </div>
    <div
      class="row"
      v-for="(v, i) in experiences"
      :key="i"
      style="margin-bottom: 10px;"
    >
      <div class="col-12">
        <div class="row">
          <div class="col-8">
            <div class="featured-text-info">
              <h3 style="color: white;">{{ v.company }}</h3>
              <h4 style="color: white;">{{ v.position }}</h4>
              <p style="color: gray;">{{ v.content }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="featured-text-card">
              <span>{{ v.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
