<template>
  <li>
    <i class="bi bi-chevron-right"></i>
    <strong>{{ $t(label) }}:</strong> <span>{{ value }}</span>
  </li>
</template>
<script>
export default {
  name: "LabelInfoItem",
  props: { label: String, value: String },
};
</script>
