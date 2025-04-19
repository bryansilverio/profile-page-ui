<script src="./appLayout.js"></script>
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
  