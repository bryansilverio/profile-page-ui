import listProjectsData from "./listProjects.json";
export default {
  methods: {
    executelistProjects() {
      return listProjectsData ?? [];
    },
  },
};
