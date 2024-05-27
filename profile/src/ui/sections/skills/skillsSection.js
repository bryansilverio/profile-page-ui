import listSkillsService from '@/services/skills/listSkillsService'
import Carrusel from '@/ui/components/basics/Carrusel.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Skills",
    components:{Carrusel},
    mixins: [
        listSkillsService
    ],
    methods: {
    },
  computed: {
    skills() {
      return this.executeListSkills()
    }
  }
});