import listSkillsData from "../data/listSkills.json";
export default {
	methods: {
		executeListCertificationsByType(type = '') {
			let result = listSkillsData.filter((x) => x.type == type);
			return result;
		}
	}
};