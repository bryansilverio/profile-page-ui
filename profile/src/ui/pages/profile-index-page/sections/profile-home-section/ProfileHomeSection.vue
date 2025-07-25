<style src="./profile-home-section.css"></style>
<script src="./profile-home-section.js"></script>
<template>
	<section class="featured-box" id="home">
          <div class="featured-text">
            <div class="featured-text-card">
                <span>{{$t("name")}}</span>
            </div>
            <div class="featured-name">
                <p>I'm <span class="typedText"></span></p>
            </div>
            <div class="featured-text-info">
                <p>Experienced frontend developer with a passion for creating visually stunning
                   and user-friendly websites.
                </p>
            </div>
            <div class="featured-text-btn">
                <button class="btn blue-btn">Hire Me</button>
                <button class="btn">{{$t('buttons.downloadCV')}} <i class="uil uil-file-alt"></i></button>
            </div>
            <div class="social_icons">
                <div class="icon" v-for="(v,i) in socialNetworks" :key="i"><i :class="v.icon"></i></div>
            </div>
          </div>
          <div class="featured-image">
            <div class="image">
                <img src="assets/images/profile-pic.png" alt="avatar">
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