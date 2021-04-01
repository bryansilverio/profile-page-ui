<template>
  <a :href="item.url" :class="item.icon" target="_blank"
    ><i :class="'bx bxl-' + item.icon"></i
  ></a>
</template>
<script>
export default {
  name: "SocialNetworkItem",
  props: { item: Object },
  watch: {
    item($value) {
      this.item = $value;
    },
  },
};
</script>
