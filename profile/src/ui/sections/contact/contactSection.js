import getSocialNetworkByTypeService from '@/services/socialNetworks/getSocialNetworkByTypeService';
export default {
  name: "Projects",
  props:{
	socialNetworkType:{
		type: String,
		default: ''
	}
  },
  mixins: [getSocialNetworkByTypeService],
  computed: {
    socialNetwork() {
      return this.executeGetSocialNetworksByType(this.socialNetworkType);
    }
  }
};