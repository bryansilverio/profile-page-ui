<template>
  <footer>
    <i
      v-for="(item, index) in socialNetworks"
      :key="index"
      :class="item.icon"
    ></i>
    <br />
    <span
      >Created By <a href="https://www.codingnepalweb.com">CodingNepal</a> |
      <span class="far fa-copyright"></span> {{ new Date().getFullYear() }} All
      rights reserved.</span
    >
  </footer>
</template>
<script>
import dataObject from "@/data/data.json";

export default {
  name: "Footer",
  data() {
    return {
      socialNetworks: [],
      data: dataObject.contactLinks,
    };
  },
  created() {
    this.getSocialNetworks(this.data);
  },
  methods: {
    getSocialNetworks(items = []) {
      this.socialNetworks = [];
      this.socialNetworks = items.find(({ type }) => type === "SOCIAL_NETWORK");
    },
  },
};
</script>
