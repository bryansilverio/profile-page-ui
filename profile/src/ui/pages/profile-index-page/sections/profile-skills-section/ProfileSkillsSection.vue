<script src="./profile-skills-section.js"></script>
<style src="./profile-skills-section.css"></style>
<template>
  <section class="section">
    <div class="top-header">
      <h1>{{ $t("sections.skills") }}</h1>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="skills-list">
            <span v-for="(v, i) in skills" :key="i"> <i :class="v.icon"></i> {{ v.name }}</span>
          </div>
      </div>
    </div>
  </section>
</template>
