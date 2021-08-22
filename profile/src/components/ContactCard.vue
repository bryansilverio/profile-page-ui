<template>
  <v-card class="mx-auto" max-width="400">
    <v-sheet class="white--text align-end" :color="item.color" height="100px">
      <v-card-title>
        <v-avatar color="">
          <v-icon x-large>
            {{ item.icon }}
          </v-icon>
        </v-avatar>
      </v-card-title>
    </v-sheet>

    <v-card-subtitle class="pb-0">
      {{ item.name }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange" text>
        Ir al sitio
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    item: Object,
  },
};
</script>
