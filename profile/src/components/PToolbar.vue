<template>
  <v-app-bar flat absolute color="#0B0E17" dark height="120px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <router-link to="/">
            <v-btn
              text
              :class="{
                'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,
                'title font-weight-bold': $vuetify.breakpoint.smAndDown,
              }"
              >Bs</v-btn
            >
          </router-link>

          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
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
