<template>
    <div class="col-lg-12 sidebar">

        <projectsRelationed 
            :projectsRelationed="projectsRelationed" 
            @onClickToProjectById="onClickToProjectById"/>

      </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
import projectsRelationed from '@/components/shared/ProjectsRelationed.vue'
export default {
    name: 'ProjectsRelationed',
    components:{projectsRelationed},
    data(){
        return{
            lbCompanies:VueI18n.tc('pages.projectDetails.companies')
        }
    },
    props:{
        projectsRelationed:{
            type: Array
        }
    },
    methods: {
        onClickToProjectById(id) {
            this.$emit("onClickToProjectById", id)
        },
    }
}
</script>