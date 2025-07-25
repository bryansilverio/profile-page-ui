<script src="./profile-skills-section.js"></script>
<style src="./profile-skills-section.css"></style>
<template>
  <section>
    <div class="top-header">
      <h1>{{ $t("sections.skills") }}</h1>
    </div>
    <div class="row">
      <div class="col">
        <div class="skills-box">
          <div class="skills-header">
            <h3>Frontend</h3>
          </div>
          <div class="skills-list">
            <span v-for="(v, i) in skills" :key="i">{{ v.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
