import { defineComponent } from 'vue'
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default defineComponent({
  name: "About",
  mixins: [
    listSocialNetworkService,
  ],
  methods: {
    goToContactSiteOnClick(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    }
  }
});