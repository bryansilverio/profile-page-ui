import projectsData from "@/data/projects.json";
export default {
	methods: {
		listProjectsServices() {
			return projectsData;
		},
		listLastProjectsServices(records = 0) {
			let result = [];
            for (var i = 0; i < records; i++) {
                result[i]=projectsData[i]
            }
			return result;
		},
		listProjectsByProjectType(type = '') {
			return projectsData.filter(x=>x.projectType==type);
		},
		findProjectsByIdServices(id = 0 ) {
			return projectsData.find(x => x.id == id);
		}
	}
};