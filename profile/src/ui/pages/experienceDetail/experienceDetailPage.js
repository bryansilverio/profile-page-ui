import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

import getWorkExperiencesService from "@/services/experience/getWorkExperiencesService.js"
import PageTitle from '@/ui/components/basics/pageTitle/PageTitle.vue';

export default defineComponent({
    name: "ExperienceDetailPage",
    components: {
        PageTitle
    },
    mixins: [getWorkExperiencesService],
    computed: {
        experience() {
            const id = this.$route.params.id
            return this.executeGetWorkExperience(id);
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});