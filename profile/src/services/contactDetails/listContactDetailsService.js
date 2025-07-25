import listContactDetailsData from './listContactDetails.json'
export default {
	methods: {
		executeListContactDetails() {
			return listContactDetailsData.filter(x=>x.show) ?? [];
		},
		executeGetContactDetailsEmail() {
			return listContactDetailsData.find(x=>x.id=="EMAIL") ?? {};
		},
		executeGetContactDetailsPhone() {
			return listContactDetailsData.find(x=>x.id=="PHONE") ?? {};
		}
	}
};