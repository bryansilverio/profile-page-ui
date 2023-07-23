<template>
	<div class="sidebar-box sidebar-projects-relationed">
      <h3 class="heading-sidebar">{{lbProjectsRelationed}}</h3>
      <div class="row">
        <div class="block-21 mb-4 d-flex project-item col-md-3" 
          v-for="(v,i) in projectsRelationed" :key="i" 
          @click="onClickToProjectById(v.id)" style="cursor:pointer;">
          <a class="blog-img mr-4" :style="setImage(v.image)"></a>
          <div class="text">
            <h6 class="heading mt-3" style="font-size:small;font-style: oblique;word-break: break-all"><a>{{v.name}}</a></h6>
          </div>
          <hr>
        </div>
      </div>
    </div>
</template>
<style>
  .sidebar-projects-relationed{
    background-color: #36394A;
  }
  .block-21 .text .meta > div a{
    color: white;
  }
  .project-item:hover{
    border-radius: 10px;
    transform: scale(1.1);
    transition: transform .2s;
    border-style: solid;
  }
</style>
<script>
import VueI18n from '@/translation/i18n'
export default{
	name:'ProjectsRelationed',
  data(){
    return {
       lbProjectsRelationed: VueI18n.tc('pages.projectDetails.projectsRelationed')
    }
  },
  methods:{
    setImage(url){
      return "background-image: url("+process.env.VUE_APP_BASE_URL+"/"+url+");width:60px;height:60px;";
    },
    onClickToProjectById(id) {
      this.$emit("onClickToProjectById", id)
    }
  },
	props:{
		projectsRelationed:{
			type: Array
		}
	}
}
</script>