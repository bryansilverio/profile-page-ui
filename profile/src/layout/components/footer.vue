<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="dark">
        <v-btn
          v-for="contact in contactLinks"
          :key="contact"
          class="mx-4"
          dark
          icon
          :href="contact.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ contact.icon }}
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>BSilverio</strong>
      </v-card-text>
    </v-card>

    <p-footer />
  </v-footer>
</template>
<script>
import PFooter from "@/components/PFooter";
import dataObject from "@/data/data.json";
export default {
  name: "Footer",
  components: { PFooter },
  data() {
    return { contactLinks: dataObject.contactLinks };
  },
};
</script>
