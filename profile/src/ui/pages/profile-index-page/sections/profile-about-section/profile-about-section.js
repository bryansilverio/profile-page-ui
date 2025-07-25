import { defineComponent } from 'vue'
import listContactDetailsService from '@/services/contactDetails/listContactDetailsService';
import listSkillsService from '@/services/skills/listSkillsService'
export default defineComponent({
  name: "profile-about-section",
  mixins: [
    listContactDetailsService,
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
      return this.executeListSkills();
    },
    frontendSkills() {
      return this.executeListSkillsFrontend();
    },
    backendSkills() {
      return this.executeListSkillsBackend();
    },
    devtoolSkills() {
      return this.executeListSkillsDevtools();
    }
  }
});