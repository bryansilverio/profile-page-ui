<template>
  <div id="fh5co-page">
    <Menu />
    <router-view />
  </div>

</template>

<script>
import Menu from '@/components/layout/Menu.vue'
export default {
  name: "App",
  components: { Menu }
};
</script>