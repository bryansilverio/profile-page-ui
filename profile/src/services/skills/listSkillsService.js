import listSkillsData from "./listSkills.json";
export default {
    methods: {
        executeListSkills() {
            return listSkillsData ?? [];
        },
        executeListSkillsFrontend() {
            return listSkillsData.filter(x=>x.type=="FRONTEND") ?? [];
        },
        executeListSkillsBackend() {
            return listSkillsData.filter(x=>x.type=="BACKEND") ?? [];
        },
        executeListSkillsDevtools() {
            return listSkillsData.filter(x=>x.type=="DEVTOOLS") ?? [];
        }
    }
};