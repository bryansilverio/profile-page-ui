<template>
  <v-card flat color="transparent">
    <v-toolbar flat color="dark" dark>
      <v-toolbar-title>Experiencia</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical color="dark">
      <v-tab
        v-for="(item, index) in experience"
        :key="index"
        class="align-baseline"
      >
        <v-icon left>
          mdi-briefcase
        </v-icon>
        <span class="aligh-left">
          {{ item.company }}
        </span>
      </v-tab>

      <v-tab-item v-for="(item, index) in experience" :key="index">
        <v-card flat>
          <v-card-title>
            <h4>{{ item.position }}</h4>
            <v-spacer></v-spacer>
            <small
              >{{ item.startDate }} - {{ validateEndDate(item.endDate) }}</small
            >
          </v-card-title>
          <v-card-text>
            <p v-html="item.descripcion"></p>
            <v-layout>
              <template v-for="(tech, i) in item.technologies">
                <v-flex xs3 :key="i">
                  <div class="text-center">
                    <v-btn icon>
                      <v-icon>{{ tech.icon }}</v-icon>
                    </v-btn>
                    <div class="caption">{{ tech.name }}</div>
                  </div>
                </v-flex>
              </template>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
export default {
  name: "PExperience",
  props: {
    experience: Array,
  },
  methods: {
    validateEndDate(endDate) {
      if (endDate) {
        return endDate;
      } else {
        return "Presente";
      }
    },
  },
};
</script>
<style scoped>
.v-tab {
  justify-content: start;
}
</style>
