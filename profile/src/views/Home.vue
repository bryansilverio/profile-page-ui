<template>
  <div class="">
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <!--
    <v-img dark max-height="500px" src="/assets/img/bg03.png">
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{
                  'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                  'title font-weight-bold': $vuetify.breakpoint.smAndDown,
                }"
              >
                {{ intro.title }}
              </div>
              <div
                :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                {{ $store.state.titlePage }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    -->
    <v-row class="m-5 mt-10 mb-10" style="background-color:#051626">
      <v-layout fill-height align-center>
        <v-container m-5>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
             <center> <h1 class="align-center">Conocimientos</h1></center>
            </v-col>
          </v-row>
          <v-row>
            <template v-for="(item, i) in technologies">
              <v-col cols="2" :key="i">
                <ContactCard :item="item" />
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
import dataObject from "@/data/data.json";

import ContactCard from "@/components/ContactCard";

export default {
  name: "Home",
  components: {
    ContactCard,
  },
  data() {
    return {
      intro: dataObject.intro,
      about: dataObject.about,
      work: dataObject.work,
      apps: dataObject.apps,
      contactLinks: dataObject.contactLinks,
      experience: dataObject.experience,
      technologies: dataObject.technologies,
    };
  },
  mounted() {
    this.$store.commit("setTitlePage", "Bienvenido");
  },
};
</script>
