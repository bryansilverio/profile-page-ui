<template>
    <div class="col-lg-12 sidebar">

        <projectsRelationed 
            :projectsRelationed="projectsRelationed" 
            @onClickToProjectById="onClickToProjectById"/>

      </div>
</template>
<style>
    .sidebar-companies{
        background-color: #36394A;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import companies_data from '@/data/work-experiences.json'
import projectsRelationed from '@/components/_Shared/ProjectsRelationed.vue'
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
    },
    computed: {
        companies(){
            return companies_data
        }
    }
}
</script>