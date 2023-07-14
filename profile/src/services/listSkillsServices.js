import skillsData from "@/data/skills.json";
export default {
	methods: {
		listSkillsServices(type = '') {
			let result = skillsData.filter((x) => x.type == type);
			return result;
		},
		listPrincipalSkillsServices(principal = ''){
			let result = skillsData.filter((x) => x.principal == principal);
			return result;
		}
	}
};