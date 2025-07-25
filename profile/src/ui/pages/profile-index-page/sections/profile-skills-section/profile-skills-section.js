import listSkillsService from "@/services/skills/listSkillsService";
import { defineComponent } from "vue";
export default defineComponent({
  name: "profile-skills-section",
  mixins: [listSkillsService],
  methods: {},
  computed: {
    skills() {
      return this.executeListSkills();
    },
  },
});
