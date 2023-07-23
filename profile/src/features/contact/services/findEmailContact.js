import listContactDetailsData from '../data/listContactDetails.json'
export default {
	methods: {
		executeFindEmailContact() {
			return listContactDetailsData.find(x=>x.id=="EMAIL");
		}
	}
};