import skills_data from "@/data/skills.json";
export default {
	methods: {
		listSkillsServices(type = '') {
			let result = skills_data.filter((x) => x.type == type);
			return result;
		}
	}
};