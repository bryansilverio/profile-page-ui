<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-img
      dark
      max-height="500px"
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
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
                Welcome to my page.
              </div>
              <div
                :class="{
                  headline: $vuetify.breakpoint.smAndUp,
                  'subtitle-1': $vuetify.breakpoint.smAndDown,
                }"
              >
                I make applications.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">This is me</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ aboutText }}</div>
          <div class="body-1 mt-3">
            Working on starting an app development business and always looking
            for new clients! Would love to talk to you about your idea.
          </div>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">My Work</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
              <v-flex :key="i" xs12 sm6 md4>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">
            Send me a message
          </div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
      <!-- <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold">Press</div>
        </v-flex>
        <v-flex xs12>
          <v-layout>
            <v-card width="">
              <v-card-title>Press card</v-card-title>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>-->
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

import dataObject from "@/data/data.json"

export default {
  name: "home",
  components: {
    // HelloWorld,
    PPortfolioApp,
    PContactInfo,
  },
  data() {
    return {
      aboutText:dataObject.aboutText,
      apps: dataObject.apps,
      contactLinks: dataObject.contactLinks,
    };
  },
};
</script>
