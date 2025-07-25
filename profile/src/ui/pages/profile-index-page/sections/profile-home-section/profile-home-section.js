import { defineComponent } from 'vue'
import listContactDetailsService from '@/services/contactDetails/listContactDetailsService';
export default defineComponent({
  name: "profile-home-section",
  mixins: [
    listContactDetailsService,
  ],
  methods: {
    goToContactSiteOnClick(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListContactDetails();
    }
  }
});