import findProjectData from "../data/findProject.json";
export default {
	methods: {
		executeFindProjectById(id = '') {
			return findProjectData.find(x=>x.id=id);
		}
	}
};