<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div
        class="container-fluid d-flex justify-content-between align-items-center"
      >
        <h1 class="logo me-auto me-lg-0">
          <router-link to="/">Bsilverio</router-link>
        </h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li v-for="(item, index) in menu" :key="index">
              <router-link :to="item.to" :class="item.css">{{
                item.name
              }}</router-link>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->

        <div class="header-social-links">
          <ContactLinkItem
            v-for="(item, index) in contactLinks"
            :key="index"
            :to="item.link"
            :socialNetworkType="item.name"
            :iconSocialNetworkType="item.icon"
          />
        </div>
      </div>
    </header>
    <!-- End Header -->
  </div>
</template>
<script>
import dataObject from "@/data/data.json";
import menuObject from "@/data/menu.json";

import ContactLinkItem from "@/components/ContactLinkItem";

export default {
  name: "NavBar",
  components: { ContactLinkItem },
  data() {
    return {
      contactLinks: dataObject.contactLinks,
      menu: menuObject.menu,
    };
  },
};
</script>
