<template>
  <footer class="py-6 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <ul class="list-inline">
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
            <li class="list-inline-item">
              <a href=""><i class="fa fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa fa-google-plus"></i></a>
            </li>
            <li class="list-inline-item">
              <a href=""><i class="fa fa-dribbble"></i></a>
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
