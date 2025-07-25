<script src="./profile-footer-section.js"></script>
<template>
  <footer>
    <div class="top-footer">
      <p>{{ $t("name") }}</p>
    </div>
    <div class="middle-footer">
      <ul class="footer-menu">
        <li class="footer_menu_list">
          <a href="#home">{{ $t("menu.home") }}</a>
        </li>
        <li class="footer_menu_list">
          <a href="#about">{{ $t("menu.aboutMe") }}</a>
        </li>
        <li class="footer_menu_list">
          <a href="#projects">{{ $t("menu.projects") }}</a>
        </li>
        <li class="footer_menu_list">
          <a href="#contact">{{ $t("menu.contact") }}</a>
        </li>
      </ul>
    </div>
    <div class="footer-social-icons">
      <div class="icon" v-for="(v, i) in contactDetails" :key="i">
        <i :class="v.icon"></i>
      </div>
    </div>
    <div class="bottom-footer">
      <p>
        Copyright &copy;
        <a href="#home" style="text-decoration: none;">Bryan Silverio</a> - All
        rights reserved
      </p>
    </div>
  </footer>
</template>
