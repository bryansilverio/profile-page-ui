import listProjectsData from "../data/listProjects.json";
export default {
	methods: {
		executeListProjectsByProjectType(type = '') {
			return listProjectsData.filter(x=>x.projectType==type);
		}
	}
};