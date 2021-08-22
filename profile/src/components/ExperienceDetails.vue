<template>
  <v-dialog v-show="show" width="1000">
    <v-card>
      <v-card-title>
        {{ company }}
      </v-card-title>
      <v-card-text>
        <v-layout>
          <template v-for="(tech, i) in technologies">
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
  </v-dialog>
</template>
<script>
export default {
  name: "ExperienceDetail",
  props: {
    show: Boolean,
    company: String,
    technologies: Array,
  },
};
</script>
