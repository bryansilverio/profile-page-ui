<style src="./profile-navbar-section.css"></style>
<script src="./profile-navbar-section.js"></script>
<template>
  <nav id="header">
    <div class="nav-logo">
      <p class="nav-name">BSilverio</p>
      <span></span>
    </div>
    <div class="nav-menu" id="myNavMenu">
      <ul class="nav_menu_list">
        <li class="nav_list">
          <a href="#home" class="nav-link active-link">{{ $t("menu.home") }}</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#about" class="nav-link">{{ $t("menu.aboutMe") }}</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#experience" class="nav-link">{{ $t("menu.experience") }}</a>
          <div class="circle"></div>
        </li>
        <li class="nav_list">
          <a href="#contact" class="nav-link">{{ $t("menu.contact") }}</a>
          <div class="circle"></div>
        </li>
      </ul>
    </div>
    <div class="nav-button">
      <button class="btn">
        {{ $t("buttons.downloadCV") }} <i class="uil uil-file-alt"></i>
      </button>
    </div>
    <div class="nav-menu-btn">
      <i class="uil uil-bars" onclick="myMenuFunction()"></i>
    </div>
  </nav>
</template>
