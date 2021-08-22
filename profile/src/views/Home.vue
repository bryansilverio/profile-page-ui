<template>
  <div class="home">
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
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs4 m-5>
          <v-col cols="12">
            <AboutMeCard :title="about.title" :text="about.description" />
          </v-col>
        </v-flex>
        <v-flex xs8 m-5>
          <v-col cols="12">
            <ContactCard :title="'Contacto'" />
          </v-col>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import dataObject from "@/data/data.json";

import AboutMeCard from "@/components/AboutMeCard";
import ContactCard from "@/components/ContactCard";

export default {
  name: "Home",
  components: {
    AboutMeCard,
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
    };
  },
  mounted() {
    this.$store.commit("setTitlePage", "Bienvenido");
  },
};
</script>
