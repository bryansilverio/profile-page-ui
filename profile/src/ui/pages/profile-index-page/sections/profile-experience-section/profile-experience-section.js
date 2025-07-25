import { defineComponent } from 'vue'
import listWorkExperiencesService from "@/services/experience/listWorkExperiencesService.js"
export default defineComponent({
    name: "profile-experience-section",
    mixins: [listWorkExperiencesService],
    methods: {
        goToProjectsSectionOnClick() {
            window.open('./#projects', '_blank')
        }
    },
    computed: {
        experiences() {
            return this.executeListWorkExperiences();
        }
    }
});