<template>
  <div>
    <Menu />
    <router-view />
    <Footer/>
  </div>

</template>

<script>
import Menu from '@/layout/Menu.vue'
import Footer from '@/layout/footer.vue'
export default {
  name: "App",
  components: { Menu,Footer },
  created(){
  window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>