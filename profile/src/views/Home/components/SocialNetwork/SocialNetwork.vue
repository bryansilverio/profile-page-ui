<template>
  <div class="row">
    <template v-if="social_network">
      <template v-for="(value, index) in social_network">
        <div class="col-md-2" :key="index">
          <gb-social-button
            :network="value.name"
            size="default"
            theme="light"
            :url="value.url"
            :rounded="true"
            @click="onClickSocialNetwork(value)"
          >
            {{ value.name }}
          </gb-social-button>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SocialNetwork',
  props: {
    social_network: Array,
  },
  methods: {
    onClickSocialNetwork(socialNetwork) {
      if (socialNetwork) {
        let openWindow = window.open(socialNetwork.url, '_blank')
        openWindow.focus()
      }
    },
  },
}
</script>
