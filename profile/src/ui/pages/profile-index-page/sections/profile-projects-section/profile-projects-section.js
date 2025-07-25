import listProjectsService from "@/services/projects/listProjectsService";
export default {
  name: "profile-projects-section",
  mixins: [listProjectsService],
  computed: {
    projects() {
      return this.executelistProjects();
    },
  },
};
