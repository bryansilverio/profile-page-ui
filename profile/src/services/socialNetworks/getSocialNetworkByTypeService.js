import listSocialNetworksData from './listSocialNetwork.json'
export default {
	methods: {
		executeGetSocialNetworksByType(id='') {
			return listSocialNetworksData.find(x=>x.id==id);
		}
	}
};