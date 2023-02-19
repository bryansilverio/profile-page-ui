<template>
  <div>
    <Menu />
    <router-view />
  </div>

</template>

<script>
import Menu from '@/components/layout/Menu.vue'
export default {
  name: "App",
  components: { Menu },
  created(){
  window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>