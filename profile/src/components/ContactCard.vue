<template>
  <v-card class="mx-auto" max-width="400" :color="item.color">
    <v-card-text class="pb-0" :color="item.color">
      <center>
        <v-avatar color="white">
          <v-icon x-large>
            {{ item.icon }}
          </v-icon>
        </v-avatar>
      </center>
      <center>
        <h4>{{ item.name }}</h4>
      </center>
    </v-card-text>
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
