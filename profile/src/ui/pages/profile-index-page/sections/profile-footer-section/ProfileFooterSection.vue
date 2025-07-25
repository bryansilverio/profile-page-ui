<script src="./profile-footer-section.js"></script>
<template>
    <footer>
        <div class="top-footer">
            <p>{{$t("name")}}</p>
        </div>
        <div class="middle-footer">
            <ul class="footer-menu">
                <li class="footer_menu_list">
                    <a href="#home">Home</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#about">About</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#projects">Projects</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="footer-social-icons">
            <div class="icon" v-for="(v,i) in contactDetails" :key="i"><i :class="v.icon"></i></div>
        </div>
        <div class="bottom-footer">
            <p>Copyright &copy; <a href="#home" style="text-decoration: none;">Bryan Silverio</a> - All rights reserved</p>
        </div>
    </footer>
</template>