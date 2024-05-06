<template>
  <div class="colorlib-page">
    <div class="container-wrap">
      <a href="#" 
        @click="onActive()" 
        class="js-colorlib-nav-toggle colorlib-nav-toggle" 
        :class="active?'active':''" 
        data-toggle="collapse" 
        data-target="#navbar" 
        :aria-expanded="active?true:false" 
        aria-controls="navbar">
        <i></i>
      </a>
      <Nav />
      <router-view />
    </div>
  </div>
</template>
<script>

import { defineComponent } from "vue";
import Nav from "@/sections/Nav.vue"
export default defineComponent({
  name: "AppLayout",
  components:{
    Nav
  },
  data(){
    return {
      active:false
    }
  },
  methods:{
    onActive(){
      this.active=!this.active
      //js-colorlib-nav-toggle colorlib-nav-toggle active
      //js-colorlib-nav-toggle colorlib-nav-toggle
      let body = document.getElementsByName('body');
      if(this.active){
        body.classList.add('offcanvas')
      }
      else{
        body.classList.remove('offcanvas')
      }
    }
  }
});
</script>
  