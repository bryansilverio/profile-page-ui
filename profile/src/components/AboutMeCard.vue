<template>
  <v-card max-height="1000">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ text }}</v-card-text>
    <v-card-actions>
      <router-link to="/about">
        <v-btn text color="teal accent-4">
          Más sobre mí
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    text: String,
  },
};
</script>
