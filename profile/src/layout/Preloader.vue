<template>
  <!--====== PRELOADER PART START ======-->

  <div class="preloader" v-show="show">
      <div class="loader">
          <div class="ytp-spinner">
              <div class="ytp-spinner-container">
                  <div class="ytp-spinner-rotator">
                      <div class="ytp-spinner-left">
                          <div class="ytp-spinner-circle"></div>
                      </div>
                      <div class="ytp-spinner-right">
                          <div class="ytp-spinner-circle"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <!--====== PRELOADER PART ENDS ======-->
</template>
<script>
export default {
  name: "Preloader",
  props:{
    show:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {};
  },
};
</script>
