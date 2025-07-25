import listWorkExperiencesData from "./listWorkExperiences.json";
export default {
  methods: {
    executeGetWorkExperience(id) {
      return listWorkExperiencesData.find((x) => x.id == id) ?? {};
    },
  },
};
