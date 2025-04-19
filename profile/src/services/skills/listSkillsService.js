import listSkillsData from "./listSkills.json";
export default {
    methods: {
        executeListSkills() {
            return listSkillsData ?? [];
        }
    }
};