<template>
  <v-app class="main">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.theme--light.v-application{
    background: #E2E8F0;
  }
</style>
