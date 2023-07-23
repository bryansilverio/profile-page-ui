import findPrincipalSkillsData from '../data/findPrincipalSkills.json'
export default {
	methods: {
		executeFindPrincipalSkillsDescription() {
			return findPrincipalSkillsData.filter(x=>x.principal=='PRINCIPAL')
		}
	}
};