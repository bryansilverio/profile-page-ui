<script src="./profile-about-section.js"></script>
<style src="./profile-about-section.css"/>
<template>
  <section class="section" id="about">
          <div class="top-header">
            <h1>{{$t("sections.aboutMe")}}</h1>
          </div>
          <div class="row">
            <div class="col">
                <div class="about-info">
                    <h3>My introduction</h3>
                    <p>I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                       frameworks and libraries,which allows me to implement interactive features.
                       Additionally, I have experirence working with content management systems (CMS) like
                       WordPress.
                    </p>
                    <div class="about-btn">
                        <button class="btn">{{$t("buttons.downloadCV")}} <i class="uil uil-import"></i></button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div class="skills-list">
                        <span v-for="(v,i) in frontendSkills" :key="i">{{v.name}}</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div class="skills-list">
                        <span v-for="(v,i) in backendSkills" :key="i">{{v.name}}</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div class="skills-list">
                        <span v-for="(v,i) in devtoolSkills" :key="i">{{v.name}}</span>
                    </div>
                </div>
            </div>
          </div>
       </section>
</template>