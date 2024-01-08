<template>
  <footer>
    <nav>
      <div class="nav-links-container">
        <ul class="nav-links">
          <li><a href="#about">{{ $t('menu.aboutMe') }}</a></li>
          <li><a href="#experience">{{ $t('menu.experience') }}</a></li>
          <li><a href="#projects">{{ $t('menu.projects') }}</a></li>
          <li><a href="#contact">{{ $t('menu.contact') }}</a></li>
        </ul>
      </div>
    </nav>
    <p>Copyright &#169;
      {{ new Date().getFullYear() }}
      <a href="https://bryansilverio.com/" class="hover:underline"> Bryan Silverio</a>.
      All Rights Reserved.
    </p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>