<template>
  <v-app-bar flat absolute color="#051626" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/">
        Portafolio
      </router-link>
    </v-toolbar-title>

    <v-layout justify-start>
      <v-container>
        <v-layout>
          <v-toolbar-items class="text-left">
            <router-link to="/about">
              <v-btn :x-small="$vuetify.breakpoint.smAndDown" text
                >Sobre mí</v-btn
              >
            </router-link>
            <router-link to="/contact">
              <v-btn
                :x-small="$vuetify.breakpoint.smAndDown"
                @click="$vuetify.goTo('#contact', options)"
                text
                >Contacto</v-btn
              >
            </router-link>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  data() {
    return {
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
};
</script>

<style></style>
