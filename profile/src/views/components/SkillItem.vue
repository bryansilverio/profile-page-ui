<template>
  <div class="card">
    <div class="card-body text-center">
      <img :src="item.image" class="img-fluid mx-auto" />
    </div>
  </div>
</template>
<script>
export default {
  name: "SkillItem",
  props: { item: Object },
  methods: {},
};
</script>
