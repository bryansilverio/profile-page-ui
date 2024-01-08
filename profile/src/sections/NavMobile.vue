<template>
    <nav id="hamburger-nav">
        <div class="logo">
            <span style="color: #FF474C;">B</span><span style="color: white;">SILVERIO</span>
        </div>
        <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-links">
                <li><a href="#about" onclick="toggleMenu()">{{ $t('menu.aboutMe') }}</a></li>
                <li><a href="#experience" onclick="toggleMenu()">{{ $t('menu.experience') }}</a></li>
                <li><a href="#projects" onclick="toggleMenu()">{{ $t('menu.projects') }}</a></li>
                <li><a href="#contact" onclick="toggleMenu()">{{ $t('menu.contact') }}</a></li>
            </div>
        </div>
    </nav>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: "NavMobile",
    methods: {
        toggleMenu() {
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            menu.classList.toggle("open");
            icon.classList.toggle("open");
        }
    }
});
</script>