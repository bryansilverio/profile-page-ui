import aboutData from '../data/shortAboutDescription.json'
export default {
	methods: {
		executeFindShortAboutDescription() {
			return aboutData.description;
		}
	}
};