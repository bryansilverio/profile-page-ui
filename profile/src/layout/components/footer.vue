<template>
  <footer class="py-6 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <ul class="list-inline" v-show="false">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Affiliates</a></li>
            <li class="list-inline-item"><a href="#">Support</a></li>
            <li class="list-inline-item"><a href="#">Blog</a></li>
          </ul>
          <p class="text-muted small text-uppercase mt-4">
            Social media
          </p>
          <ul class="list-inline social social-dark social-sm">
            <li
              class="list-inline-item"
              v-for="(item, index) in socialNetworks"
              :key="index"
            >
              <a :href="item.link" target="_blank"
                ><i :class="item.icon"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-muted text-center small-xl">
          &copy; {{ new Date().getFullYear() }} Bsilverio - All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import dataObject from "@/data/data.json";

export default {
  name: "Footer",
  data() {
    return {
      socialNetworks: [],
    };
  },
  created() {
    this.getSocialNetworks();
  },
  methods: {
    getSocialNetworks() {
      this.socialNetworks = [];
      dataObject.contactLinks.forEach((element) => {
        if (element.type == "SOCIAL_NETWORK") {
          this.socialNetworks.push(element);
        }
      });
    },
  },
};
</script>
