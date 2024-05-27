import { defineComponent } from 'vue'
import listSocialNetworkService from '@/services/socialNetworks/listSocialNetworkService';
import listSkillsService from '@/services/skills/listSkillsService'
export default defineComponent({
  name: "About",
  mixins: [
    listSocialNetworkService,
    listSkillsService
  ],
  methods: {
    goToExperienceSectionOnClick() {
      location.href = '#experience'
    }
  },
  computed: {
    socialNetworks() {
      return this.executeListSocialNetworks();
    },
    skills() {
      return this.executeListSkills()
    }
  }
});