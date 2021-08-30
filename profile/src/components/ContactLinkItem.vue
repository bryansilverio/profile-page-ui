<template>
  <router-link :to="to" :class="socialNetworkType"
    ><i :class="iconSocialNetworkType"></i
  ></router-link>
</template>
<script>
export default {
  name: "ContactLinkItem",
  props: {
    to: String,
    socialNetworkType: String,
    iconSocialNetworkType: String,
  },
};
</script>
