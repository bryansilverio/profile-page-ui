<template>
    <nav id="desktop-nav">
        <div class="logo">
            <span style="color: #FF474C;">B</span><span style="color: white;">SILVERIO</span>
        </div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">{{ $t('menu.aboutMe') }}</a></li>
                <li><a href="#experience">{{ $t('menu.experience') }}</a></li>
                <li><a href="#projects">{{ $t('menu.projects') }}</a></li>
                <li><a href="#contact">{{ $t('menu.contact') }}</a></li>
            </ul>
        </div>
    </nav>
</template>
<style>
.logo > span{
    font-weight: 900;
    font-size: 24px;
    text-transform: uppercase;
}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: "NavDesktop"
});
</script>