import listProjectsService from '@/services/projects/listProjectsService';
export default {
  name: "Projects",
  mixins: [
    listProjectsService
  ],
  computed: {
    projects() {
      return this.executelistProjects();
    }
  }
};