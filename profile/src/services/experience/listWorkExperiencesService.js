import listWorkExperiencesData from './listWorkExperiences.json'
export default {
	methods: {
		executeListWorkExperiences() {
			return listWorkExperiencesData ?? [];
		}
	}
};