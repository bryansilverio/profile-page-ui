<template>
    <div class="col-lg-4 sidebar">
        
        <div class="sidebar-box" v-show="false">
          <form action="#" class="search-form">
            <div class="form-group">
              <span class="icon icon-search"></span>
              <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
            </div>
          </form>
        </div>

        <div class="sidebar-box sidebar-companies" v-show="false">
            <h3 class="heading-sidebar">{{lbCompanies}}</h3>
            <ul class="categories">
                <li v-for="(v,i) in companies" :key="i">
                    <a>{{v.company}} <span></span></a>
                </li>
            </ul>
        </div>

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