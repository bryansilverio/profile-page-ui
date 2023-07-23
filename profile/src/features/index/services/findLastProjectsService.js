import findLastProjectsData from '../data/findLastProjects.json'
export default {
	methods: {
		executeFindLastProjects() {
			return findLastProjectsData.slice(0,3);
		}
	}
};