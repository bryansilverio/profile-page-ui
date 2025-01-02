import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
export default {
  name: "Projects",
  props:{
	socialNetworkType:{
		type: String,
		default: ''
	}
  },
  mixins: [listSocialNetworkService],
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    }
  }
};