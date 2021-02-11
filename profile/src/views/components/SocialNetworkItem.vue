<template>
  <div>
    <a :href="item.url" :class="item.icon" target="_blank"
      ><i :class="'icofont-' + item.icon"></i
    ></a>
  </div>
</template>
<script>
export default {
  name: "SocialNetworkItem",
  props: { item: Object },
};
</script>
