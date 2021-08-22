<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
          ></v-text-field
          >
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea name="input-7-1" label="Mensaje"></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions> </v-card-actions>
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
