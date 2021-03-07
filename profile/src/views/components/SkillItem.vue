<template>
  <div>
    <ImageShadow
      :alt="item.name"
      :src="item.image"
      width="120"
      className="text-center img-fluid card"
    />
  </div>
  <!--
  <div class="card">
    <div class="card-body text-center">
      <img :src="item.image" class="img-fluid mx-auto" />
    </div>
  </div>
  -->
</template>
<script>
import ImageShadow from "vue-image-shadow";
export default {
  name: "SkillItem",
  components: { ImageShadow },
  props: { item: Object },
  methods: {},
};
</script>
