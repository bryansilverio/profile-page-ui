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
          <a href="#experience">{{ $t("menu.experience") }}</a>
        </li>
        <li class="footer_menu_list">
          <a href="#contact">{{ $t("menu.contact") }}</a>
        </li>
      </ul>
    </div>
    <div class="footer-social-icons">
      <div class="icon" v-for="(v, i) in contactDetails" :key="i">
        <a :href="v.url"><i :class="v.icon" style="color:#D43F46"></i></a>
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
