<template>
  <div class="col-xl-4">
    <div class="card card-profile">
      <img
        src="assets/img/theme/img-1-1000x600.jpg"
        alt="Image placeholder"
        class="card-img-top"
      />
      <div class="row justify-content-center" v-if="data">
        <div class="col-lg-3 order-lg-2">
          <div class="card-profile-image">
            <a href="#">
              <img :src="data.image" class="rounded-circle" />
            </a>
          </div>
        </div>
      </div>
      <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div class="d-flex justify-content-between">
          <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
          <a href="#" class="btn btn-sm btn-default float-right">Message</a>
        </div>
      </div>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col">
            <div class="card-profile-stats d-flex justify-content-center">
              <div>
                <span class="heading"></span>
                <span class="description"></span>
              </div>
              <div>
                <span class="heading"></span>
                <span class="description"></span>
              </div>
              <div>
                <span class="heading"></span>
                <span class="description"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center" v-if="data">
          <h5 class="h3">
            {{ data.name }}
            <span class="font-weight-light"></span>
          </h5>
          <div class="h5 font-weight-300">
            <i class="ni location_pin mr-2"></i>
            {{ data.location }}
          </div>
          <div class="h5 mt-4">
            <i class="ni business_briefcase-24 mr-2"></i>
            {{ data.profile }}
          </div>
          <div>
            <i class="ni education_hat mr-2"></i>
            University of Computer Science
          </div>
          <div class="mt-5">
            <h4 class="heading-small text-muted mb-4">{{ $t('about_me') }}</h4>
            <small class="text-muted">{{ data.about_me }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: {
    data: Object,
  },
}
</script>
