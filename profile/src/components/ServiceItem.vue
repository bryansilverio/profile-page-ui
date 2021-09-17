<template>
  <div class="col-md-6 mb-3">
    <div class="card">
      <div class="card-body text-center">
        <div class="icon-box border-box">
          <div class="icon-box-inner small-xs text-primary">
            <span data-feather="crop" width="30" height="30"></span>
          </div>
        </div>
        <h5 class="mt-0 mb-3">{{ value.title }}</h5>
        {{ value.description }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceItem",
  props: {
    value: Object,
  },
};
</script>
