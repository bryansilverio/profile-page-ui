<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-layout fill-height align-center>
      <v-container>
        <v-row align="center" justify="center" class="black--text">
          <v-col cols="12">
            <div
              :class="{
                'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp,
                'title font-weight-bold': $vuetify.breakpoint.smAndDown,
              }"
            ></div>
            <div
              :class="{
                headline: $vuetify.breakpoint.smAndUp,
                'subtitle-1': $vuetify.breakpoint.smAndDown,
              }"
            ></div>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-container style="margin-top:100px">
      <v-card>
        <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <div class="display-1 font-weight-bold" id="about">
                {{ about.title }}
              </div>
            </v-flex>
            <v-flex xs12 mt-5>
              <div class="body-1">{{ about.description }}</div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-text>
          <v-layout wrap my-5>
            <v-flex xs12>
              <div class="display-1 font-weight-bold" id="portfolio">
                Experiencia
              </div>
            </v-flex>
            <v-flex xs12 class="mt-5">
              <v-layout wrap>
                <PExperience :experience="experience" />
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout wrap my-5 v-show="false">
            <v-flex xs12>
              <div class="display-1 font-weight-bold" id="portfolio">
                {{ work.title }}
              </div>
            </v-flex>
            <v-flex xs12 class="mt-5">
              <v-layout wrap>
                <template v-for="(app, i) in work.apps">
                  <v-flex :key="i" xs12 sm6 md4>
                    <p-portfolio-app :app="app" />
                  </v-flex>
                </template>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PExperience from "@/components/PExperience.vue";
import dataObject from "@/data/data.json";

export default {
  name: "Home",
  components: {
    PPortfolioApp,
    PExperience,
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
    this.$store.commit("setTitlePage", "Sobre mí");
  },
};
</script>
