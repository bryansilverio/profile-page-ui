import listSocialNetworksData from './listSocialNetwork.json'
export default {
	methods: {
		executeListSocialNetworks() {
			return listSocialNetworksData.filter(x=>x.show);
		}
	}
};