import contactDetailData from '@/data/contactDetails.json'
export default {
	methods: {
		listContactServices() {
			return contactDetailData;
		},
		findEmailContactServices() {
			return contactDetailData.find(x => x.id == 'EMAIL');
		}
	}
};