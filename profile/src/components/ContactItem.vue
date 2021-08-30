<template>
  <div :class="contactType">
    <i :class="iconContactType"></i>
    <h4>{{ label }}:</h4>
    <p>{{ value }}</p>
  </div>
</template>
<script>
export default {
  name: "ContactItem",
  props: {
    contactType: String,
    iconContactType: String,
    label: String,
    value: String,
  },
};
</script>
